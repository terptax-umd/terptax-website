import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { getFileContent, getDriveEmbedUrl } from "../lib/github";

// Enable ISR - revalidate every 5 minutes (300 seconds)
export const revalidate = 300;

interface DriveLink {
  id: string;
  title: string;
  url: string;
  createdAt: string;
}

export default async function MemosPage() {
  let links: DriveLink[] = [];
  let error: string | null = null;

  try {
    const data = await getFileContent();
    links = data.links || [];
  } catch (err) {
    console.error("Error fetching links:", err);
    error = "Failed to load memos. Please try again later.";
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col pt-16">
      <NavBar />
      <main className="flex-grow w-full">
        <div className="container mx-auto max-w-6xl px-4 py-8 md:py-16">
          {/* Page Heading */}
          <div className="flex flex-col gap-3 text-center mb-8">
            <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl text-text-primary">
              Memos
            </h1>
            <p className="text-lg font-normal leading-normal text-text-primary/70">
              View and access shared tax memos and resources.
            </p>
          </div>

          {error ? (
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
              <p className="text-red-700">{error}</p>
            </div>
          ) : links.length === 0 ? (
            <div className="bg-background-alt rounded-xl p-12 text-center">
              <span className="material-symbols-outlined text-6xl text-text-primary/30 mb-4">
                description
              </span>
              <p className="text-text-primary/70 text-lg">
                No memos available at this time.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {links.map((link) => {
                const embedUrl = getDriveEmbedUrl(link.url);
                return (
                  <div
                    key={link.id}
                    className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm"
                  >
                    <h2 className="text-2xl font-bold text-text-primary mb-4">
                      {link.title}
                    </h2>
                    {embedUrl ? (
                      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                        <iframe
                          src={embedUrl}
                          className="absolute top-0 left-0 w-full h-full rounded-lg border-0"
                          allow="autoplay"
                          title={link.title}
                        />
                      </div>
                    ) : (
                      <div className="bg-background-alt rounded-lg p-8 text-center">
                        <p className="text-text-primary/70 mb-4">
                          Unable to embed this memo. Please access it directly:
                        </p>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal hover:opacity-90 transition-opacity"
                        >
                          Open in Google Drive
                          <span className="material-symbols-outlined ml-2 text-base">
                            open_in_new
                          </span>
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

