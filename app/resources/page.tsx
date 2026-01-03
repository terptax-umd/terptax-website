"use client";

import React, { useState, useMemo } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Resource {
  id: string;
  title: string;
  link: string;
  description: string;
  category: "Tax Forms" | "Helpful Guides" | "External Links" | "FAQs" | "Videos";
  icon: string;
  actionText: string;
  type?: "link" | "video";
  videoId?: string; // For Vimeo video ID
}

const resources: Resource[] = [
  {
    id: "1",
    title: "Form 1040 (2023)",
    link: "https://www.irs.gov/pub/irs-pdf/f1040.pdf",
    description:
      "U.S. Individual Income Tax Return, the main form for filing your federal taxes.",
    category: "Tax Forms",
    icon: "description",
    actionText: "Download",
  },
  {
    id: "2",
    title: "Form W-2 Guide",
    link: "https://www.irs.gov/forms-pubs/about-form-w-2",
    description:
      "A guide to understanding your Wage and Tax Statement from your employer.",
    category: "Helpful Guides",
    icon: "description",
    actionText: "View Guide",
  },
  {
    id: "3",
    title: "IRS Website",
    link: "https://www.irs.gov",
    description:
      "The official source for federal tax information, forms, and publications.",
    category: "External Links",
    icon: "open_in_new",
    actionText: "Visit Site",
  },
  {
    id: "4",
    title: "Appointment Checklist",
    link: "#",
    description:
      "What to bring with you to your tax preparation appointment with us.",
    category: "Helpful Guides",
    icon: "checklist",
    actionText: "Download",
  },
  {
    id: "5",
    title: "Filing Status FAQ",
    link: "https://www.irs.gov/help/ita/what-is-my-filing-status",
    description:
      "Answers to common questions about choosing the right filing status.",
    category: "FAQs",
    icon: "quiz",
    actionText: "Read More",
  },
  {
    id: "6",
    title: "MD Comptroller",
    link: "https://www.marylandtaxes.gov",
    description:
      "Official website for Maryland state tax forms and information.",
    category: "External Links",
    icon: "open_in_new",
    actionText: "Visit Site",
  },
  {
    id: "7",
    title: "Form 1098-T",
    link: "https://www.irs.gov/forms-pubs/about-form-1098-t",
    description:
      "Tuition Statement form for students claiming education credits.",
    category: "Tax Forms",
    icon: "description",
    actionText: "View Form",
  },
  {
    id: "8",
    title: "Student Tax Guide",
    link: "https://www.irs.gov/pub/irs-pdf/p970.pdf",
    description: "Tax Benefits for Education - Publication 970 from the IRS.",
    category: "Helpful Guides",
    icon: "school",
    actionText: "Download",
  },
  {
    id: "9",
    title: "Standard Deduction Guide",
    link: "https://www.irs.gov/taxtopics/tc551",
    description:
      "Learn about standard deductions and when to itemize your deductions.",
    category: "Helpful Guides",
    icon: "info",
    actionText: "Read More",
  },
  {
    id: "10",
    title: "EITC Information",
    link: "https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit",
    description:
      "Earned Income Tax Credit information and eligibility requirements.",
    category: "FAQs",
    icon: "quiz",
    actionText: "Learn More",
  },
  {
    id: "11",
    title: "Form 8863",
    link: "https://www.irs.gov/forms-pubs/about-form-8863",
    description:
      "Education Credits form for American Opportunity and Lifetime Learning Credits.",
    category: "Tax Forms",
    icon: "description",
    actionText: "Download",
  },
  {
    id: "12",
    title: "Free File Program",
    link: "https://www.irs.gov/filing/free-file-do-your-federal-taxes-for-free",
    description:
      "IRS Free File program for eligible taxpayers to file federal taxes for free.",
    category: "External Links",
    icon: "open_in_new",
    actionText: "Visit Site",
  },
  {
    id: "13",
    title: "Where's My Refund?",
    link: "https://www.irs.gov/refunds",
    description:
      "Check the status of your tax refund online through the IRS website.",
    category: "External Links",
    icon: "track_changes",
    actionText: "Check Status",
  },
  {
    id: "14",
    title: "Dependent Exemptions FAQ",
    link: "https://www.irs.gov/help/ita/can-i-claim-my-child-as-a-dependent",
    description:
      "Common questions about claiming dependents on your tax return.",
    category: "FAQs",
    icon: "quiz",
    actionText: "Read More",
  },
  {
    id: "15",
    title: "Form 1099-NEC",
    link: "https://www.irs.gov/forms-pubs/about-form-1099-nec",
    description:
      "Nonemployee Compensation form for independent contractors and freelancers.",
    category: "Tax Forms",
    icon: "description",
    actionText: "View Form",
    type: "link",
  },
  {
    id: "16",
    title: "How to File Your Taxes - Video Guide",
    link: "https://vimeo.com/572269830",
    description:
      "A comprehensive video guide on how to file your taxes step by step.",
    category: "Videos",
    icon: "play_circle",
    actionText: "Watch Video",
    type: "video",
    videoId: "572269830",
  },
];

const categories: Resource["category"][] = [
  "Tax Forms",
  "Helpful Guides",
  "External Links",
  "FAQs",
  "Videos",
];

// Helper function to extract Vimeo video ID from URL
const extractVimeoId = (url: string): string | null => {
  const match = url.match(/(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/);
  return match ? match[1] : null;
};

export default function ResourcesPage() {
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
  }, [selectedCategory, searchQuery]);

  const handleResourceClick = (resource: Resource) => {
    const resourceType = resource.type || "link";
    if (resourceType === "video") {
      // Videos are embedded, no need to navigate
      return;
    }
    if (resource.link.startsWith("http")) {
      window.open(resource.link, "_blank", "noopener,noreferrer");
    } else {
      // Handle internal links if needed
      router.push(resource.link);
    }
  };

  // Get video ID from resource (either from videoId field or extract from link)
  const getVideoId = (resource: Resource): string | null => {
    if (resource.videoId) {
      return resource.videoId;
    }
    if (resource.type === "video" || resource.link.includes("vimeo.com")) {
      return extractVimeoId(resource.link);
    }
    return null;
  };

  // Component for rendering Vimeo video embed
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
    <div className="relative flex min-h-screen w-full flex-col pt-16">
      <NavBar />
      <main className="flex-grow w-full">
        <div className="container mx-auto max-w-4xl px-4 py-8 md:py-16">
          {/* Page Heading */}
          <div className="flex flex-col gap-3 text-center mb-8">
            <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl text-text-primary">
              Tax Resources
            </h1>
            <p className="text-lg font-normal leading-normal text-text-primary/70">
              Your one-stop hub for tax forms, guides, and helpful information.
            </p>
          </div>

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
              {filteredResources.map((resource) => (
                <div
                  key={resource.id}
                  className={`flex flex-col rounded-xl border border-slate-200 bg-background-light p-6 shadow-sm transition-shadow ${
                    (resource.type === "video" || resource.link.includes("vimeo.com")) &&
                    getVideoId(resource)
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
                  <p className="text-sm text-text-primary/70 mb-6 flex-grow">
                    {resource.description}
                  </p>
                  {(resource.type === "video" || resource.link.includes("vimeo.com")) &&
                  getVideoId(resource) ? (
                    <div className="mt-auto mb-4">
                      <VimeoEmbed videoId={getVideoId(resource)!} />
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
              ))}
            </div>
          ) : (
            <div className="px-4 py-8 text-center">
              <p className="text-text-primary/70">
                No resources found matching your search.
              </p>
            </div>
          )}

          {/* "Get Help" CTA */}
          <div className="my-16 mx-4 rounded-xl bg-primary/10 p-8 text-center">
            <h2 className="text-2xl font-bold mb-2 text-text-primary">
              Still have questions?
            </h2>
            <p className="text-text-primary/70 mb-6 max-w-lg mx-auto">
              Our trained volunteers are here to provide free, personalized tax
              assistance. Let us help you file with confidence.
            </p>
            <Link
              href="/booking"
              className="inline-flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] shadow-md hover:opacity-90 transition-opacity"
            >
              <span className="truncate">Schedule an Appointment</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
