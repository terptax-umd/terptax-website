import { NextRequest, NextResponse } from "next/server";
import { requireAuth, verifySession } from "@/app/lib/auth";
import {
  getFileContent,
  updateFileContent,
  extractDriveFileId,
} from "@/app/lib/github";

interface DriveLink {
  id: string;
  title: string;
  url: string;
  createdAt: string;
}

// GET - Fetch all drive links (public, no auth required)
export async function GET() {
  try {
    const data = await getFileContent();
    // Add cache headers to reduce edge invocations
    // Cache for 5 minutes, allow stale-while-revalidate for 1 hour
    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=3600',
      },
    });
  } catch (error) {
    console.error("Error fetching drive links:", error);
    return NextResponse.json(
      { error: "Failed to fetch drive links" },
      { status: 500 }
    );
  }
}

// POST - Add a new drive link (requires authentication)
export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const authError = await requireAuth(request);
    if (authError) {
      return authError;
    }

    const body = await request.json();
    const { title, url } = body;

    // Validate input
    if (!title || !url) {
      return NextResponse.json(
        { error: "Title and URL are required" },
        { status: 400 }
      );
    }

    // Validate Google Drive URL
    const fileId = extractDriveFileId(url);
    if (!fileId) {
      return NextResponse.json(
        { error: "Invalid Google Drive URL" },
        { status: 400 }
      );
    }

    // Get existing data
    const data = await getFileContent();

    // Create new link
    const newLink: DriveLink = {
      id: `link-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      title: title.trim(),
      url: url.trim(),
      createdAt: new Date().toISOString(),
    };

    // Add to links array
    data.links.push(newLink);

    // Update file on GitHub
    await updateFileContent(data);

    return NextResponse.json({ success: true, link: newLink }, { status: 201 });
  } catch (error) {
    console.error("Error adding drive link:", error);
    return NextResponse.json(
      { error: "Failed to add drive link" },
      { status: 500 }
    );
  }
}

// DELETE - Remove a drive link (requires authentication)
export async function DELETE(request: NextRequest) {
  try {
    // Check authentication
    const authError = await requireAuth(request);
    if (authError) {
      return authError;
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Link ID is required" },
        { status: 400 }
      );
    }

    // Get existing data
    const data = await getFileContent();

    // Find and remove the link
    const initialLength = data.links.length;
    data.links = data.links.filter((link) => link.id !== id);

    if (data.links.length === initialLength) {
      return NextResponse.json({ error: "Link not found" }, { status: 404 });
    }

    // Update file on GitHub
    await updateFileContent(data);

    return NextResponse.json(
      { success: true, message: "Link deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting drive link:", error);
    return NextResponse.json(
      { error: "Failed to delete drive link" },
      { status: 500 }
    );
  }
}
