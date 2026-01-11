/**
 * GitHub API helper functions for reading and writing JSON files
 * Works with private repositories using a Personal Access Token
 */

const GITHUB_API_BASE = "https://api.github.com";
const FILE_PATH = "data/drive-links.json";

interface GitHubFileContent {
  content: string;
  sha: string;
}

interface DriveLink {
  id: string;
  title: string;
  url: string;
  createdAt: string;
}

interface DriveLinksData {
  links: DriveLink[];
}

/**
 * Get the repository owner and name from environment variables
 */
function getRepoInfo() {
  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;
  const token = process.env.GITHUB_TOKEN;

  if (!owner || !token) {
    throw new Error(
      "GITHUB_OWNER and GITHUB_TOKEN environment variables are required"
    );
  }

  return { owner, repo, token };
}

/**
 * Read the drive-links.json file from GitHub
 */
export async function getFileContent(): Promise<DriveLinksData> {
  const { owner, repo, token } = getRepoInfo();

  const url = `${GITHUB_API_BASE}/repos/${owner}/${repo}/contents/${FILE_PATH}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `token ${token}`,
      Accept: "application/vnd.github.v3+json",
    },
    next: { revalidate: 0 }, // Always fetch fresh data
  });

  if (!response.ok) {
    if (response.status === 404) {
      // File doesn't exist yet, return empty structure
      return { links: [] };
    }
    throw new Error(
      `Failed to fetch file from GitHub: ${response.status} ${response.statusText}`
    );
  }

  const data = (await response.json()) as GitHubFileContent;

  // Decode base64 content
  const content = Buffer.from(data.content, "base64").toString("utf-8");

  try {
    return JSON.parse(content) as DriveLinksData;
  } catch (error) {
    console.error("Failed to parse JSON from GitHub:", error);
    return { links: [] };
  }
}

/**
 * Get the SHA of the current file (needed for updates)
 */
async function getFileSha(): Promise<string | null> {
  const { owner, repo, token } = getRepoInfo();

  const url = `${GITHUB_API_BASE}/repos/${owner}/${repo}/contents/${FILE_PATH}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `token ${token}`,
      Accept: "application/vnd.github.v3+json",
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to get file SHA: ${response.status} ${response.statusText}`
    );
  }

  const data = (await response.json()) as GitHubFileContent;
  return data.sha;
}

/**
 * Update the drive-links.json file on GitHub
 */
export async function updateFileContent(data: DriveLinksData): Promise<void> {
  const { owner, repo, token } = getRepoInfo();

  // Get current SHA for the file
  const sha = await getFileSha();

  // Encode content to base64
  const content = JSON.stringify(data, null, 2);
  const encodedContent = Buffer.from(content).toString("base64");

  const url = `${GITHUB_API_BASE}/repos/${owner}/${repo}/contents/${FILE_PATH}`;

  const body: {
    message: string;
    content: string;
    sha?: string;
    branch?: string;
  } = {
    message: sha
      ? `Update drive links - ${new Date().toISOString()}`
      : `Create drive links file - ${new Date().toISOString()}`,
    content: encodedContent,
  };

  // Include SHA if file exists (for updates)
  // If no SHA, this will create a new file
  if (sha) {
    body.sha = sha;
  }

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `token ${token}`,
      Accept: "application/vnd.github.v3+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const errorMessage = errorData.message || response.statusText;

    throw new Error(errorMessage);
  }
}

/**
 * Extract Google Drive file ID from various URL formats
 */
export function extractDriveFileId(url: string): string | null {
  const patterns = [
    /\/file\/d\/([a-zA-Z0-9_-]+)/,
    /[?&]id=([a-zA-Z0-9_-]+)/,
    /\/document\/d\/([a-zA-Z0-9_-]+)/,
    /\/spreadsheets\/d\/([a-zA-Z0-9_-]+)/,
    /\/presentation\/d\/([a-zA-Z0-9_-]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

/**
 * Convert Google Drive URL to embed format
 */
export function getDriveEmbedUrl(url: string): string | null {
  const fileId = extractDriveFileId(url);
  if (!fileId) {
    return null;
  }
  return `https://drive.google.com/file/d/${fileId}/preview`;
}
