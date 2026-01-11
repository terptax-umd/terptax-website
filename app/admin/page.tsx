"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

interface DriveLink {
  id: string;
  title: string;
  url: string;
  createdAt: string;
}

export default function AdminPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState<DriveLink[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Check authentication status on mount
  useEffect(() => {
    checkAuth();
  }, []);

  // Fetch links when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchLinks();
    }
  }, [isAuthenticated]);

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/auth/check", {
        credentials: "include",
      });
      const data = await response.json();
      console.log("Auth check response:", data);
      setIsAuthenticated(data.authenticated === true);
    } catch (err) {
      console.error("Auth check error:", err);
      setIsAuthenticated(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setUsername("");
        setPassword("");
        // Login successful - set authenticated state directly
        setIsAuthenticated(true);
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      setIsAuthenticated(false);
      setLinks([]);
      router.push("/admin");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  const fetchLinks = async () => {
    try {
      const response = await fetch("/api/drive-links", {
        credentials: "include",
      });
      const data = await response.json();
      setLinks(data.links || []);
    } catch (err) {
      console.error("Error fetching links:", err);
    }
  };

  const handleAddLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsAdding(true);

    try {
      const response = await fetch("/api/drive-links", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          title: newTitle,
          url: newUrl,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setNewTitle("");
        setNewUrl("");
        fetchLinks();
      } else {
        setError(data.error || "Failed to add link");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsAdding(false);
    }
  };

  const handleDeleteLink = async (id: string) => {
    if (!confirm("Are you sure you want to delete this link?")) {
      return;
    }

    setDeletingId(id);

    try {
      const response = await fetch(`/api/drive-links?id=${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (response.ok) {
        fetchLinks();
      } else {
        const data = await response.json();
        setError(data.error || "Failed to delete link");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  // Show loading state while checking auth
  if (isAuthenticated === null) {
    return (
      <div className="relative flex min-h-screen w-full flex-col pt-16">
        <NavBar />
        <main className="flex-grow w-full flex items-center justify-center">
          <div className="text-text-primary">Loading...</div>
        </main>
        <Footer />
      </div>
    );
  }

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="relative flex min-h-screen w-full flex-col pt-16">
        <NavBar />
        <main className="flex-grow w-full">
          <div className="container mx-auto max-w-md px-4 py-16">
            <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
              <h1 className="text-3xl font-bold text-text-primary mb-2">
                Admin Login
              </h1>
              <p className="text-text-primary/70 mb-6">
                Sign in to manage Google Drive links
              </p>

              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary bg-background-alt"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary bg-background-alt"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center rounded-lg h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </form>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Show dashboard if authenticated
  return (
    <div className="relative flex min-h-screen w-full flex-col pt-16">
      <NavBar />
      <main className="flex-grow w-full">
        <div className="container mx-auto max-w-4xl px-4 py-8 md:py-16">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div>
              <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-text-primary">
                Admin Dashboard
              </h1>
              <p className="text-lg font-normal leading-normal text-text-primary/70 mt-2">
                Manage Google Drive links
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="mt-4 sm:mt-0 flex items-center justify-center rounded-lg h-10 px-4 bg-slate-200 text-text-primary text-sm font-bold leading-normal hover:bg-slate-300 transition-colors"
            >
              Logout
            </button>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          {/* Add New Link Form */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8 shadow-sm">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Add New Link
            </h2>
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-800 text-sm">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-base mt-0.5">
                  info
                </span>
                <div>
                  <strong>Important:</strong> Before adding a link, make sure
                  your Google Drive file is set to{" "}
                  <strong>&quot;Anyone with the link can view&quot;</strong> and
                  the sharing permission is <strong>&quot;Viewer&quot;</strong>{" "}
                  (view-only). This ensures the document can be embedded and
                  viewed by all users.
                </div>
              </div>
            </div>
            <form onSubmit={handleAddLink}>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary bg-background-alt"
                  placeholder="Document Title"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="url"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Google Drive URL
                </label>
                <input
                  id="url"
                  type="url"
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary bg-background-alt"
                  placeholder="https://drive.google.com/file/d/..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isAdding}
                className="flex items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAdding ? "Adding..." : "Add Link"}
              </button>
            </form>
          </div>

          {/* Links List */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Existing Links ({links.length})
            </h2>

            {links.length === 0 ? (
              <p className="text-text-primary/70 py-8 text-center">
                No links yet. Add your first link above.
              </p>
            ) : (
              <div className="space-y-4">
                {links.map((link) => (
                  <div
                    key={link.id}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border border-slate-200 rounded-lg hover:bg-background-alt transition-colors"
                  >
                    <div className="flex-1 mb-2 sm:mb-0">
                      <h3 className="text-base font-bold text-text-primary">
                        {link.title}
                      </h3>
                      <p className="text-sm text-text-primary/70 mt-1 truncate">
                        {link.url}
                      </p>
                      <p className="text-xs text-text-primary/50 mt-1">
                        Added: {new Date(link.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDeleteLink(link.id)}
                      disabled={deletingId === link.id}
                      className="sm:ml-4 flex items-center justify-center rounded-lg h-9 px-4 bg-red-50 text-red-700 text-sm font-medium hover:bg-red-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {deletingId === link.id ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
