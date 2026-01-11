import { NextRequest, NextResponse } from "next/server";
import { clearSessionCookie } from "@/app/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const response = NextResponse.json(
      { success: true, message: "Logout successful" },
      { status: 200 }
    );

    clearSessionCookie(response);

    return response;
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}


