"use client";

import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Link from "next/link";

// Document structure with optional links
interface DocumentItem {
  text: string;
  required?: boolean;
  link?: string;
  linkText?: string;
  requiredNote?: string;
  subItems?: DocumentItem[];
}

// Component to render a document item
function DocumentListItem({
  doc,
  index,
}: {
  doc: DocumentItem;
  index: number;
}) {
  return (
    <li className="flex items-start gap-3 text-text-primary">
      <span className="mt-1 text-green-600 font-bold">{index + 1}.</span>
      <div className="flex-1">
        <div className="flex items-start gap-2 flex-wrap">
          <span className="flex-1">{doc.text}</span>
          {doc.link && (
            <Link
              href={doc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:text-green-800 hover:underline font-medium text-sm whitespace-nowrap"
            >
              {doc.linkText || "View form"}
            </Link>
          )}
          {doc.required && (
            <span className="text-red-600 font-semibold text-sm whitespace-nowrap">
              *REQUIRED{doc.requiredNote ? ` ${doc.requiredNote}` : ""}
            </span>
          )}
        </div>
        {doc.subItems && (
          <ul className="mt-2 ml-4 space-y-2">
            {doc.subItems.map((subItem, subIndex) => (
              <li
                key={subIndex}
                className="flex items-start gap-2 text-text-primary"
              >
                <span className="text-green-600 mt-1">
                  {String.fromCharCode(97 + subIndex)})
                </span>
                <div className="flex-1 flex items-start gap-2 flex-wrap">
                  <span className="flex-1">{subItem.text}</span>
                  {subItem.link && (
                    <Link
                      href={subItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-700 hover:text-green-800 hover:underline font-medium text-sm whitespace-nowrap"
                    >
                      {subItem.linkText || "View form"}
                    </Link>
                  )}
                  {subItem.required && (
                    <span className="text-red-600 font-semibold text-sm whitespace-nowrap">
                      *REQUIRED
                      {subItem.requiredNote
                        ? ` ${subItem.requiredNote}`
                        : ""}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

// Documents for Residents (US Citizens and Resident Aliens)
const residentDocuments: DocumentItem[] = [
  {
    text: "Signed consent Form 14446",
    required: true,
  },
  {
    text: "Form 13614-C",
    required: true,
  },
  {
    text: "Proof of identity (driver's license or passport)",
    required: true,
  },
  {
    text: "Social security card",
    required: true,
  },
  {
    text: "Documents related to income:",
    subItems: [
      { text: "Form W-2(s)" },
      {
        text: "Form 1098-T (if you received any scholarships/had tuition expenses)",
        required: true,
        requiredNote: "REQUIRED FOR STUDENTS",
      },
      { text: "Form 1099-Misc (if any)" },
      { text: "Form 1098-INT (if you had bank interests)" },
      { text: "Form 1099-B (if you had investment income)" },
      { text: "Form 1099-Div (if you had dividend income)" },
      { text: "Documents reporting any miscellaneous income" },
    ],
  },
  {
    text: "Bank information (if requesting direct deposit/debit) - (1) Bank Name; (2) Account Type (Checking/Savings); (3) Account Number; (4) Routing Number",
    required: true,
  },
  {
    text: "I-94 full travel history (this applies to resident aliens who are international students - it helps us verify whether or not they actually are resident aliens)",
  },
];

// Team Leader Contact Information
interface TeamLeader {
  name: string;
  email: string;
}

const teamLeaders: TeamLeader[] = [
  { name: "Hurjus", email: "htaneja@terpmail.umd.edu" },
  { name: "Joie", email: "Jsung123@terpmail.umd.edu" },
  { name: "Joy", email: "jchen148@terpmail.umd.edu" },
  { name: "Julia", email: "jhuang31@terpmail.umd.edu" },
  { name: "Tobias", email: "Twiggins@terpmail.umd.edu" },
  { name: "Tyler", email: "tjones77@terpmail.umd.edu" },
  { name: "KP", email: "naingkpm@terpmail.umd.edu" },
];

// Documents for Non-Resident Aliens
const nonResidentDocuments: DocumentItem[] = [
  {
    text: "Signed consent Form 14446",
    required: true,
  },
  {
    text: "Form 13614-NR",
    required: true,
    link: "#",
    linkText: "13614-NR sample form",
  },
  {
    text: "Passport and VISA",
    required: true,
  },
  {
    text: "Social security card photo",
    required: true,
  },
  {
    text: "I-94 full travel history",
    required: true,
  },
  {
    text: "Documents related to income:",
    subItems: [
      { text: "Form W-2(s)" },
      {
        text: "Form 1042-S (if you had tax treaty benefits and/or personal use scholarships)",
      },
      {
        text: "Form 1098-T (if you received any scholarships/had tuition expenses)",
        required: true,
        requiredNote: "REQUIRED FOR STUDENTS",
      },
      { text: "Form 1099-Misc (if any)" },
      { text: "Form 1099-B (if you had investment income)" },
      { text: "Form 1099-Div (if you had dividend income)" },
      { text: "Documents reporting any miscellaneous income" },
    ],
  },
  {
    text: "Bank information (if requesting direct deposit/debit) - (1) Bank Name; (2) Account Type (Checking/Savings); (3) Account Number; (4) Routing Number",
    required: true,
  },
];

export default function BookingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"resident" | "nonresident">(
    "resident"
  );

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col pt-16">
      <NavBar />
      <main className="grow bg-background-light">
        <div className="container mx-auto px-4 py-8 sm:py-12 max-w-6xl">
          {/* Page Heading */}
          <div className="flex flex-col gap-4 mb-8 text-center">
            <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-text-primary">
              Book Your Free Tax Appointment
            </h1>
            <p className="text-base font-normal leading-normal text-text-primary/70 max-w-2xl mx-auto">
              Follow the steps below to schedule your session with one of our
              volunteers. Please determine your filing status before scheduling.
            </p>
          </div>

          {/* Important Information Banner */}
          <div className="bg-green-50 border border-green-300 rounded-lg p-4 mb-8">
            <h3 className="font-bold text-green-700 mb-2">Before You Schedule</h3>
            <p className="text-sm text-text-primary/80 mb-3">
              Determine your filing status as this will determine what documents
              will be necessary for you to complete your appointment. When you
              have scheduled your appointment, you will be shown the list of
              required documents for both Residents and Alien Non-Residents.
            </p>
            <p className="text-sm text-text-primary/80 mb-2">
              <strong>Filing Status Note:</strong> F-1/J-1 visa students are
              treated as resident aliens for tax purposes in their 6th year in
              the U.S. and they should be present in the U.S. for more than 183
              days in this tax year. J-1 visa scholars/trainees are treated as
              resident aliens in their 3rd year in the U.S. If you are uncertain
              as to whether you are a resident or nonresident, please contact us
              at{" "}
              <a
                href="mailto:terptax@gmail.com"
                className="text-green-700 hover:underline font-medium"
              >
                terptax@gmail.com
              </a>{" "}
              or{" "}
              <a
                href="mailto:mslc@rhsmith.umd.edu"
                className="text-green-700 hover:underline font-medium"
              >
                mslc@rhsmith.umd.edu
              </a>{" "}
              to confirm your residency status.
            </p>
            <p className="text-sm text-text-primary/80">
              <strong>We will ONLY accept PDF uploads.</strong>
            </p>
          </div>

          {/* Documents Modal Trigger Button */}
          <div className="mb-8 text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex min-w-[84px] max-w-[480px] mx-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-6 bg-green-100 text-green-700 text-base font-bold leading-normal tracking-[0.015em] hover:bg-green-200 transition-colors"
            >
              <span className="truncate flex items-center gap-2">
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                  description
                </span>
                View Required Documents
              </span>
            </button>
          </div>

          {/* Documents Modal */}
          {isModalOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
              onClick={() => setIsModalOpen(false)}
            >
              <div
                className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-text-primary">
                    Required Documents
                  </h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-text-primary/70 hover:text-text-primary transition-colors"
                    aria-label="Close modal"
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 28 }}
                    >
                      close
                    </span>
                  </button>
                </div>
                <div className="p-6">
                  <p className="text-text-primary/80 mb-4">
                    Please upload the following documents. All documents should be
                    in PDF format for upload.
                  </p>

                  {/* Tabs */}
                  <div className="flex gap-2 mb-6 border-b border-slate-200">
                    <button
                      onClick={() => setActiveTab("resident")}
                      className={`px-4 py-2 font-medium text-sm transition-colors ${
                        activeTab === "resident"
                          ? "text-green-700 border-b-2 border-green-700"
                          : "text-text-primary/60 hover:text-text-primary"
                      }`}
                    >
                      For Residents
                    </button>
                    <button
                      onClick={() => setActiveTab("nonresident")}
                      className={`px-4 py-2 font-medium text-sm transition-colors ${
                        activeTab === "nonresident"
                          ? "text-green-700 border-b-2 border-green-700"
                          : "text-text-primary/60 hover:text-text-primary"
                      }`}
                    >
                      For Non-Resident Aliens
                    </button>
                  </div>

                  {/* Document List */}
                  <div>
                    <h3 className="text-lg font-bold text-text-primary mb-4">
                      {activeTab === "resident"
                        ? "For residents, please upload the following documents:"
                        : "For nonresident aliens, please upload the following documents:"}
                    </h3>
                    <ul className="space-y-4">
                      {(activeTab === "resident"
                        ? residentDocuments
                        : nonResidentDocuments
                      ).map((doc, index) => (
                        <DocumentListItem key={index} doc={doc} index={index} />
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 px-6 py-4 flex justify-end">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-opacity"
                  >
                    <span className="truncate">Close</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Main Booking Container */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-10 mb-8">
            {/* Acuity Scheduling Integration */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] text-text-primary mb-4">
                Schedule Your Appointment
              </h2>
              {/* Replace this div with your Acuity Scheduling embed code */}
              {/* See integration instructions below */}
              <div
                id="acuity-scheduling"
                className="acuity-scheduling-container"
              >
                {/* Acuity Scheduling embed will go here */}
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-12 text-center bg-slate-50">
                  <p className="text-text-primary/70 mb-4">
                    Acuity Scheduling widget will be embedded here
                  </p>
                  <p className="text-sm text-text-primary/60">
                    The Acuity Scheduling calendar will appear in this section to
                    allow you to select your preferred date and time.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Leader Contact Information */}
            <div className="mt-8 pt-8 border-t border-slate-200">
              <h3 className="text-lg font-bold text-text-primary mb-4">
                Questions About Your Appointment?
              </h3>
              <p className="text-sm text-text-primary/70 mb-4">
                If you have any questions regarding your appointment, please
                email the team leader you booked your appointment with:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {teamLeaders.map((leader, index) => (
                  <div key={index}>
                    <p className="font-medium text-text-primary">{leader.name}</p>
                    <a
                      href={`mailto:${leader.email}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {leader.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

