import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken } from "@/app/lib/auth";

const SESSION_COOKIE_NAME = "admin_session";

export async function GET(request: NextRequest) {
  try {
    // Read cookie directly from request
    const sessionToken = request.cookies.get(SESSION_COOKIE_NAME)?.value;
    
    if (!sessionToken) {
      return NextResponse.json(
        { authenticated: false },
        { status: 200 }
      );
    }
    
    const isAuthenticated = verifySessionToken(sessionToken);
    return NextResponse.json(
      { authenticated: isAuthenticated },
      { status: 200 }
    );
  } catch (error) {
    console.error("Auth check error:", error);
    return NextResponse.json(
      { authenticated: false },
      { status: 200 }
    );
  }
}


