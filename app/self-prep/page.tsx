import React from "react";
import NavBar from "../components/NavBar";
import Link from "next/link";
import Footer from "../components/Footer";

export default function SelfPrepPage() {
  const steps = [
    {
      number: 1,
      title: "Create an account",
      description: "Create an account on the TaxSlayer website",
    },
    {
      number: 2,
      title: "Verify phone number",
      description: "Complete phone number verification",
    },
    {
      number: 3,
      title: "Upload documents or enter manually",
      description:
        'Select option to upload documents directly or select "skip" to enter manually',
    },
    {
      number: 4,
      title: "Complete personal information",
      description: "Enter your name, SSN, DTB, email, and address",
    },
    {
      number: 5,
      title: "Select Filing Status",
      description:
        "Refer to filing status FAQ on our website to determine your status",
    },
    {
      number: 6,
      title: "Complete Schedule OI (if applicable)",
      description:
        "If you are a Non-resident, complete the schedule OI portion",
    },
    {
      number: 7,
      title: "Claim dependents",
      description: "Claim dependents if applicable",
    },
    {
      number: 8,
      title: "Complete the federal return",
      description:
        "Fill out all sections: Income, Deductions, Other Taxes, Payments and Estimates (1042-S included), and Miscellaneous Forms",
    },
    {
      number: 9,
      title: "Add applicable state returns",
      description: "Complete any state tax returns that apply to you",
    },
    {
      number: 10,
      title: "Review Tax Return Summary",
      description:
        "Carefully review your complete tax return summary before submitting",
    },
  ];

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col pt-16">
      <NavBar />
      <div className="layout-container flex h-full grow flex-col px-4">
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col flex-1 w-full">
            <main>
              {/* Hero Section */}
              <div className="@container">
                <div className="flex flex-col gap-6 px-4 py-16 @[480px]:gap-8 @[864px]:flex-row @[864px]:items-center">
                  <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
                    <div className="flex flex-col gap-4 text-left">
                      <h1 className="text-text-primary text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                        Self-Preparation Classes
                      </h1>
                      <h2 className="text-text-primary/80 text-base font-normal leading-normal @[480px]:text-lg @[480px]:font-normal @[480px]:leading-normal">
                        File your taxes yourself using our free-to-use FSA
                        return preparation tool with volunteer support available
                        during in-person clinics.
                      </h2>
                    </div>
                    <a
                      href="https://www.taxslayer.com/v.aspx?rdr=%2Fvitafsa&sidn=11011236&source=TSUSATY2023"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-fit min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-opacity-90 transition-opacity"
                    >
                      <span className="truncate">
                        Access TaxSlayer FSA Tool
                      </span>
                    </a>
                  </div>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full"
                    data-alt="Students working on their taxes with volunteer support."
                    style={{
                      backgroundImage: `url("/self-prep.jpg")`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Clinic Information Section */}
              <div className="bg-background-alt">
                <div className="flex flex-col gap-10 px-4 py-16 @container w-full">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-text-primary tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      In-Person Clinics
                    </h1>
                    <p className="text-text-primary/80 text-base font-normal leading-normal">
                      During the tax season, we host in-person clinics where
                      volunteers are available to answer your questions as you
                      go through your return using our free FSA tool.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-1 gap-4 rounded-xl border border-slate-200 bg-background-light p-6 items-center">
                      <div className="text-primary flex-shrink-0">
                        <span
                          className="material-symbols-outlined"
                          style={{ fontSize: 32 }}
                        >
                          calendar_today
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h2 className="text-text-primary text-lg font-bold leading-tight">
                          When
                        </h2>
                        <p className="text-text-primary/70 text-sm font-normal leading-normal">
                          Every Tuesday during tax season
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 gap-4 rounded-xl border border-slate-200 bg-background-light p-6 items-center">
                      <div className="text-primary flex-shrink-0">
                        <span
                          className="material-symbols-outlined"
                          style={{ fontSize: 32 }}
                        >
                          schedule
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h2 className="text-text-primary text-lg font-bold leading-tight">
                          Time
                        </h2>
                        <p className="text-text-primary/70 text-sm font-normal leading-normal">
                          6:00 PM - 9:00 PM
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 gap-4 rounded-xl border border-slate-200 bg-background-light p-6 items-center">
                      <div className="text-primary flex-shrink-0">
                        <span
                          className="material-symbols-outlined"
                          style={{ fontSize: 32 }}
                        >
                          location_on
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h2 className="text-text-primary text-lg font-bold leading-tight">
                          Location
                        </h2>
                        <p className="text-text-primary/70 text-sm font-normal leading-normal">
                          VMH 3505
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step-by-Step Guide Section */}
              <div className="flex flex-col gap-10 px-4 py-16 @container w-full">
                <div className="flex flex-col gap-4">
                  <h1 className="text-text-primary tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    Step-by-Step Guide
                  </h1>
                  <p className="text-text-primary/80 text-base font-normal leading-normal">
                    Follow these steps to complete your tax return using the
                    TaxSlayer FSA Self-Preparation Tool. Our volunteers are
                    available during Tuesday clinics to help you through any
                    step.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {steps.map((step) => (
                    <div
                      key={step.number}
                      className="flex gap-4 rounded-xl border border-slate-200 bg-background-light p-6"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary font-bold text-lg">
                          {step.number}
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 flex-1">
                        <h2 className="text-text-primary text-lg font-bold leading-tight">
                          {step.title}
                        </h2>
                        <p className="text-text-primary/70 text-sm font-normal leading-normal">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-background-alt">
                <div className="flex flex-col gap-10 px-4 py-16 w-full">
                  <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
                    <h2 className="text-text-primary text-[32px] font-bold leading-tight tracking-[-0.015em]">
                      Need More Help?
                    </h2>
                    <p className="text-text-primary/80 text-base font-normal leading-normal">
                      If you prefer one-on-one assistance, you can also book a
                      free appointment with one of our certified volunteers who
                      will guide you through the entire process.
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link
                      href="/booking"
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-opacity"
                    >
                      <span className="truncate">Book an Appointment</span>
                    </Link>
                  </div>
                </div>
              </div>

              <Footer />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
