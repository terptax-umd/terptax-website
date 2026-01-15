import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FAQAccordion from "../components/FAQAccordion";

// FAQ data structure - you can add/edit questions and answers here
interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "general" | "services" | "appointments" | "tax-basics";
}

const faqData: FAQ[] = [
  {
    id: "1",
    question: "Not Able To Get An Appointment?",
    answer:
      "Come to VMH 3505 every Tuesday from February 10th - April 14th to file your own taxes through FSA Self Preparation. Please see the FSA Self Preparation link in the navigation bar.",
    category: "appointments",
  },
  {
    id: "2",
    question: "Do you offer in-person appointments?",
    answer:
      "We are currently offering in-person, virtual, and asynchronous appointments!",
    category: "appointments",
  },
  {
    id: "3",
    question:
      "Can I file my taxes with TerpTax even if I don't live in the University of Maryland, College Park community?",
    answer:
      "Yes. You can file your taxes with TerpTax if your income is $64,000 or less. However, we do not offer tax consultation services, only tax preparation services.",
    category: "general",
  },
  {
    id: "4",
    question: "What is the deadline for filing my 2025 tax return?",
    answer:
      "The deadline for filing your 2025 Federal Tax Return is Monday, April 15, 2026. If mailing your return, it must be postmarked by 11:59 pm on that day.",
    category: "tax-basics",
  },
  {
    id: "5",
    question: "What forms do I need to file my Federal tax return?",
    answer:
      "If you were working (ex: graduate assistantship, hourly on-campus position) in 2025, you will be sent a W-2 statement (by January 31). For Non-resident Aliens: If you received a scholarship/fellowship OR you are claiming a tax exemption due to a TAX TREATY in 2023, you will be sent a 1042-S Form (by March 15). If you need to request a Duplicate W-2 or 1042-S, go to Central Payroll Bureau's Payroll Services for State Agencies website and follow the instructions.",
    category: "tax-basics",
  },
  {
    id: "6",
    question:
      "What are some continued tax resources during the University Remote Operational Environment?",
    answer:
      "TerpTax, housed in the Robert H. Smith School of Business, is a Volunteer Income Tax Assistance (VITA) chapter, a program created by the Internal Revenue Service (IRS), to provide FREE tax return preparation to low-to-mid-income individuals and families, the elderly, students, and persons with disabilities. TerpTax can prepare both federal and state returns for clients. FSA Tax Prep can be used free of charge by F-1/F-2 and J-1/J-2 status holders in UMD to prepare their U.S. Federal income tax return. FSA Tax Prep is now available for this filing season. To access FSA Tax Prep: Visit the 'Prepare return' tab of the TerpTax website, read over the instructions and steps to create a TaxSlayer account and start preparing your return, then access the FSA Self-Preparation Tool and start preparing your federal and state returns! For any questions regarding the FSA tool please reach out to terptax@gmail.com with the subject line 'FSA help' in your email.",
    category: "services",
  },
  {
    id: "7",
    question:
      "Am I Resident or Non-resident Alien for Tax Purposes?",
    answer:
      "Please visit the 'What to Upload' tab to determine your filing status as instructions on how to determine your status can be found there. If you are still unsure please reach out to terptax@gmail.com. After determining your status please feel free to schedule an appointment with us!",
    category: "tax-basics",
  },
];

const categories = [
  { id: "general", label: "General & Eligibility" },
  { id: "services", label: "Our Services" },
  { id: "appointments", label: "Appointments" },
  { id: "tax-basics", label: "Tax Basics" },
];

export default function FAQsPage() {

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col pt-16">
      <NavBar />
      <main className="grow bg-background-light">
        <div className="container mx-auto w-full px-4 py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col items-center gap-8">
            {/* Page Heading */}
            <div className="flex w-full flex-col items-center gap-4 text-center">
              <h1 className="text-4xl font-black tracking-tighter text-black sm:text-5xl">
                Frequently Asked Questions
              </h1>
              <p className="max-w-xl text-lg text-gray-800">
                Find answers to common questions about our services,
                eligibility, and what you need to prepare.
              </p>
            </div>

            <FAQAccordion faqs={faqData} categories={categories} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
