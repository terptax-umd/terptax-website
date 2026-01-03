"use client";

import React, { useState, useMemo } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Link from "next/link";

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
    question: "What is the deadline for filing my 2024 tax return?",
    answer:
      "The deadline for filing your 2024 Federal Tax Return is Monday, April 15, 2025. If mailing your return, it must be postmarked by 11:59 pm on that day.",
    category: "tax-basics",
  },
  {
    id: "5",
    question: "What forms do I need to file my Federal tax return?",
    answer:
      "If you were working (ex: graduate assistantship, hourly on-campus position) in 2024, you will be sent a W-2 statement (by January 31). For Non-resident Aliens: If you received a scholarship/fellowship OR you are claiming a tax exemption due to a TAX TREATY in 2023, you will be sent a 1042-S Form (by March 15). If you need to request a Duplicate W-2 or 1042-S, go to Central Payroll Bureau's Payroll Services for State Agencies website and follow the instructions.",
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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(["1"])); // First item open by default

  // Filter FAQs based on category
  const filteredFAQs = useMemo(() => {
    return faqData.filter((faq) => {
      const matchesCategory =
        selectedCategory === null || faq.category === selectedCategory;

      return matchesCategory;
    });
  }, [selectedCategory]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

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

            {/* Category Chips */}
            <div className="flex flex-wrap items-center justify-center gap-3 w-full px-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() =>
                    setSelectedCategory(
                      selectedCategory === category.id ? null : category.id
                    )
                  }
                  className={`flex h-9 cursor-pointer items-center justify-center gap-x-2 rounded-full px-4 text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? "bg-primary/20 text-primary font-semibold"
                      : "bg-slate-200 px-4 hover:bg-slate-300 text-black"
                  }`}
                >
                  <p>{category.label}</p>
                </button>
              ))}
            </div>

            {/* FAQ Accordion */}
            <div className="w-full flex-col pt-8 px-4">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, index) => {
                  const isOpen = openItems.has(faq.id);
                  const isLast = index === filteredFAQs.length - 1;

                  return (
                    <div
                      key={faq.id}
                      className={`group flex flex-col border-t ${
                        isLast ? "border-b" : ""
                      } border-slate-200 py-2 dark:border-slate-800`}
                    >
                      <button
                        onClick={() => toggleItem(faq.id)}
                        className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-left w-full"
                      >
                        <p className="text-base font-semibold text-black">
                          {faq.question}
                        </p>
                        <div
                          className={`text-gray-600 transition-transform duration-300 shrink-0 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: 24 }}
                          >
                            expand_more
                          </span>
                        </div>
                      </button>
                      {isOpen && (
                        <p className="pb-2 text-base font-normal leading-relaxed text-gray-800">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="py-8 text-center">
                  <p className="text-black">
                    No FAQs found for this category. Please try a different
                    category.
                  </p>
                </div>
              )}
            </div>

            {/* CTA Section */}
            <div className="mt-12 w-full rounded-xl bg-slate-100 p-8 text-center dark:bg-slate-800/50 sm:p-12">
              <div className="flex flex-col items-center gap-4">
                <h3 className="text-2xl font-bold text-black">
                  Still have questions?
                </h3>
                <p className="max-w-md text-base text-gray-800">
                  If you can&apos;t find what you&apos;re looking for, feel free
                  to reach out to our team. We&apos;re here to help.
                </p>
                <Link
                  href="/booking"
                  className="mt-4 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-6 bg-primary text-white text-base font-bold shadow-sm transition-all hover:bg-opacity-90"
                >
                  <span className="truncate">Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
