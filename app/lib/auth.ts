import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const SESSION_COOKIE_NAME = "admin_session";
const SESSION_SECRET = process.env.ADMIN_PASSWORD;

if (!SESSION_SECRET) {
  console.warn(
    "WARNING: ADMIN_PASSWORD environment variable is not set. Session tokens will not work correctly."
  );
}

/**
 * Generate a simple session token
 * In production, consider using a more secure method like JWT
 */
export function generateSessionToken(): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2);
  return Buffer.from(`${timestamp}-${random}-${SESSION_SECRET}`).toString(
    "base64"
  );
}

/**
 * Verify if a session token is valid
 */
export function verifySessionToken(token: string): boolean {
  try {
    const decoded = Buffer.from(token, "base64").toString("utf-8");
    const parts = decoded.split("-");
    if (parts.length !== 3) return false;

    // Check if token contains the session secret
    return parts[2] === SESSION_SECRET;
  } catch {
    return false;
  }
}

/**
 * Check if the current request has a valid session
 */
export async function verifySession(): Promise<boolean> {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (!sessionToken) {
    return false;
  }

  return verifySessionToken(sessionToken);
}

/**
 * Get the session token from cookies
 */
export async function getSessionToken(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get(SESSION_COOKIE_NAME)?.value || null;
}

/**
 * Set a session cookie
 */
export function setSessionCookie(response: NextResponse, token: string): void {
  response.cookies.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });
}

/**
 * Clear the session cookie
 */
export function clearSessionCookie(response: NextResponse): void {
  response.cookies.delete(SESSION_COOKIE_NAME);
}

/**
 * Middleware to require authentication for API routes
 */
export async function requireAuth(
  request: NextRequest
): Promise<NextResponse | null> {
  // Read cookie from request
  const sessionToken = request.cookies.get(SESSION_COOKIE_NAME)?.value;

  // Debug logging in development
  if (process.env.NODE_ENV === "development") {
    if (sessionToken) {
      console.log(
        "requireAuth - Token valid:",
        verifySessionToken(sessionToken)
      );
    }
  }

  if (!sessionToken) {
    return NextResponse.json(
      { error: "Unauthorized - No session token" },
      { status: 401 }
    );
  }

  if (!verifySessionToken(sessionToken)) {
    return NextResponse.json(
      { error: "Unauthorized - Invalid session token" },
      { status: 401 }
    );
  }

  return null; // Authentication passed
}
