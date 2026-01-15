import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Link from "next/link";
import ResourceFilters from "../components/ResourceFilters";

// Keep forms, 
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
  videoId?: string; // For Vimeo video ID
}

const resources: Resource[] = [
  {
    id: "1",
    title: "Form 1040",
    link: "https://www.irs.gov/pub/irs-pdf/f1040.pdf",
    description:
      "U.S. Individual Income Tax Return, the main form for filing your federal taxes.",
    category: "Tax Forms",
    icon: "description",
    actionText: "View Form",
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
    title: "Exempt individual – Who is a student",
    link: "https://www.irs.gov/individuals/international-taxpayers/exempt-individual-who-is-a-student",
    description:
      "A guide to understanding who is a student and how to claim the student exemption.",
    category: "Helpful Guides",
    icon: "description",
    actionText: "View Guide",
  },
  {
    id: "4",
    title: "IRS 4011",
    link: "https://www.irs.gov/pub/irs-pdf/p4011.pdf",
    description:
      "VITA/TCE Foreign Student and Scholar Volunteer Resource Guide",
    category: "FAQs",
    icon: "description",
    actionText: "View Guide",
  },
  {
    id: "5",
    title: "Filing Status FAQ",
    link: "https://www.irs.gov/help/ita/what-is-my-filing-status",
    description:
      "Answers to common questions about choosing the right filing status.",
    category: "FAQs",
    icon: "quiz",
    actionText: "Learn More",
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
    actionText: "Learn More",
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
    actionText: "View Form",
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
    title: "Substance Presence Test - Decision Tree",
    link: "https://www.irs.gov/pub/irs-pdf/p4011.pdf#page=8",
    description:
      "Are you temporarily present in the United States?",
    category: "FAQs",
    icon: "quiz",
    actionText: "View Decision Tree",
  },
  {
    id: "16",
    title: "Report of Foreign Bank and Financial Accounts (FBAR)",
    link: "https://vimeo.com/572269830",
    description: "FBAR and Transitioning to Alien Resident Status",
    category: "TerpTax",
    icon: "play_circle",
    actionText: "Watch Video",
    type: "video",
    videoId: "572269830",
  },
  {
    id: "17",
    title: "Filing an extension for free",
    link: "https://vimeo.com/697764445",
    description: "Filing an extension for free",
    category: "TerpTax",
    icon: "play_circle",
    actionText: "Watch Video",
    type: "video",
    videoId: "697764445",
  },
  {
    id: "18",
    title: "Taxation of Scholarships, Grants, and Fellowships",
    link: "https://vimeo.com/578080980",
    description: "Taxation of Scholarships, Grants, and Fellowships",
    category: "TerpTax",
    icon: "play_circle",
    actionText: "Watch Video",
    type: "video",
    videoId: "578080980",
  },
  {
    id: "19",
    title: "Assistance with Tax Controvery Cases",
    link: "https://www.law.umaryland.edu/Programs-and-Impact/Clinical-Law/Requests-for-assistance/Low-Income-Taxpayer-Clinic/",
    description:
      "if you owe the IRS, here is some help. Please contact UMD Law School in Baltimore for assistance. The link will lead you to their site",
    category: "External Links",
    icon: "open_in_new",
    actionText: "Visit Site",
  },
  {
    id: "20",
    title: "Form 1042-S",
    link: "https://www.irs.gov/pub/irs-pdf/f1042s.pdf",
    description: "Foreign Person's U.S. Source Income Subject to Withholding",
    category: "Tax Forms",
    icon: "description",
    actionText: "View Form",
  },
  {
    id: "21",
    title: "Foreign Students, Scholars, Teachers, Researchers, and Exchange Visitors",
    link: "https://www.irs.gov/individuals/international-taxpayers/foreign-students-scholars-teachers-researchers-and-exchange-visitors",
    description: "Information for foreign students, scholars, teachers, researchers, and exchange visitors.",
    category: "Helpful Guides",
    icon: "description",
    actionText: "View Guide",
  },
];

const categories: Resource["category"][] = [
  "Tax Forms",
  "Helpful Guides",
  "External Links",
  "FAQs",
  "TerpTax",
];

export default function ResourcesPage() {

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

          <ResourceFilters
            resources={resources}
            categories={categories}
          />

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
