"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 px-10 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4 md:col-span-2">
          <div className="flex items-center gap-2">
            {/* <div className="size-5 text-primary"> */}
            {/* <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-text-primary">TerpTax</h3> */}
            <Image src="/logo.png" alt="TerpTax Logo" width={100} height={50} />
          </div>
          <p className="text-sm text-text-primary/70 max-w-sm">
            A student-run nonprofit providing free tax preparation services to
            the University of Maryland community.
            <br />
            <br />
            All our volunteers are undergraduate and graduate students from the
            Robert H. Smith School of Business at the University of Maryland, College Park.
            Our volunteers are certified by the IRS in preparing tax returns and
            are supervised by faculty director Professor Samuel Handwerger, CPA.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-text-primary">Quick Links</h4>
          <a
            className="text-sm text-text-primary/70 hover:text-primary"
            href="/about"
          >
            About Us
          </a>
          <a
            className="text-sm text-text-primary/70 hover:text-primary"
            href="/faqs"
          >
            FAQ
          </a>
          <a
            className="text-sm text-text-primary/70 hover:text-primary"
            href="/contact"
          >
            Contact
          </a>
          <a
            className="text-sm text-text-primary/70 hover:text-primary"
            href="/booking"
          >
            Book Appointment
          </a>
          <a
            className="text-sm text-text-primary/70 hover:text-primary"
            href="/self-prep"
          >
            Self-Preparation
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-text-primary">Contact</h4>
          <p className="text-sm text-text-primary/70">terptax@gmail.com</p>
          <p className="text-sm text-text-primary/70">
            University of Maryland, College Park, MD
          </p>
          <div className="flex gap-4 mt-2">
            <a
              className="text-text-primary/70 hover:text-primary"
              href="https://www.facebook.com/MSLCUMD/"
            >
              <svg
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a
              className="text-text-primary/70 hover:text-primary"
              href="https://www.instagram.com/mslc2020/"
            >
              <svg
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  height="20"
                  rx="5"
                  ry="5"
                  width="20"
                  x="2"
                  y="2"
                ></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
            <a
              className="text-text-primary/70 hover:text-primary"
              href="https://www.linkedin.com/company/terptax-inc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect height="12" width="4" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-text-primary/60 mt-10 pt-5 border-t border-slate-200">
        © 2024 TerpTax. All rights reserved.
      </div>
    </footer>
  );
}
