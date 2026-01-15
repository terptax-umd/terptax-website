"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";

interface Resource {
  id: string;
  title: string;
  link: string;
  description: string;
  category:
    | "Tax Forms"
    | "Helpful Guides"
    | "External Links"
    | "FAQs"
    | "TerpTax";
  icon: string;
  actionText: string;
  type?: "link" | "video";
  videoId?: string;
}

interface ResourceFiltersProps {
  resources: Resource[];
  categories: Resource["category"][];
}

export default function ResourceFilters({
  resources,
  categories,
}: ResourceFiltersProps) {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] =
    useState<Resource["category"]>("Tax Forms");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesCategory = resource.category === selectedCategory;
      const matchesSearch =
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, resources]);

  const handleResourceClick = (resource: Resource) => {
    const resourceType = resource.type || "link";
    if (resourceType === "video") {
      return;
    }
    if (resource.link.startsWith("http")) {
      window.open(resource.link, "_blank", "noopener,noreferrer");
    } else {
      router.push(resource.link);
    }
  };

  const getVideoId = (resource: Resource): string | null => {
    if (resource.videoId) {
      return resource.videoId;
    }
    if (resource.type === "video" || resource.link.includes("vimeo.com")) {
      const match = resource.link.match(
        /(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/
      );
      return match ? match[1] : null;
    }
    return null;
  };

  const VimeoEmbed = ({ videoId }: { videoId: string }) => {
    return (
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0`}
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Vimeo video player"
        />
      </div>
    );
  };

  return (
    <>
      {/* Search Bar */}
      <div className="px-0 py-3 md:px-4 mb-4">
        <label className="flex flex-col min-w-40 h-14 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm border border-slate-200">
            <div className="flex items-center justify-center pl-4 rounded-l-xl border-r-0 bg-background-alt text-text-primary/70">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input
              type="text"
              className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl border-none bg-background-alt h-full placeholder:text-text-primary/50 px-4 pl-2 text-base font-normal leading-normal focus:outline-0 focus:ring-2 focus:ring-primary/50 focus:ring-inset text-text-primary"
              placeholder="Search for forms, guides, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </label>
      </div>

      {/* Segmented Buttons */}
      <div className="flex px-0 py-3 md:px-4 mb-8">
        <div className="flex w-full flex-col gap-2 sm:flex-row sm:h-12 items-center justify-center rounded-xl bg-background-alt p-1">
          {categories.map((category) => (
            <label
              key={category}
              className={`w-full flex cursor-pointer h-10 grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-medium leading-normal transition-all ${
                selectedCategory === category
                  ? "bg-background-light shadow-md text-text-primary"
                  : "text-text-primary/70 hover:text-text-primary"
              }`}
            >
              <span className="truncate">{category}</span>
              <input
                type="radio"
                name="resource-filter"
                value={category}
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
                className="invisible w-0"
              />
            </label>
          ))}
        </div>
      </div>

      {/* Section Header */}
      <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-text-primary">
        {selectedCategory}
      </h2>

      {/* Resource Cards */}
      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 px-4 py-3 sm:grid-cols-2 lg:grid-cols-3">
          {filteredResources.map((resource) => {
            const videoId = getVideoId(resource);
            return (
              <div
                key={resource.id}
                className={`flex flex-col rounded-xl border border-slate-200 bg-background-light p-6 shadow-sm transition-shadow ${
                  (resource.type === "video" ||
                    resource.link.includes("vimeo.com")) &&
                  videoId
                    ? "hover:shadow-lg lg:col-span-3"
                    : "hover:shadow-lg"
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">
                      {resource.icon}
                    </span>
                  </div>
                  <h3 className="flex-1 text-base font-bold text-text-primary">
                    {resource.title}
                  </h3>
                </div>
                <p className="text-sm text-text-primary/70 mb-6 grow">
                  {resource.description}
                </p>
                {(resource.type === "video" ||
                  resource.link.includes("vimeo.com")) &&
                videoId ? (
                  <div className="mt-auto mb-4">
                    <VimeoEmbed videoId={videoId} />
                  </div>
                ) : (
                  <button
                    onClick={() => handleResourceClick(resource)}
                    className="mt-auto flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/30 transition-colors"
                  >
                    <span className="material-symbols-outlined text-base">
                      {resource.icon === "open_in_new" ||
                      resource.icon === "track_changes"
                        ? "arrow_forward"
                        : resource.icon === "quiz"
                        ? "read_more"
                        : resource.icon === "play_circle"
                        ? "play_arrow"
                        : "download"}
                    </span>
                    <span className="truncate">{resource.actionText}</span>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="px-4 py-8 text-center">
          <p className="text-text-primary/70">
            No resources found matching your search.
          </p>
        </div>
      )}
    </>
  );
}

