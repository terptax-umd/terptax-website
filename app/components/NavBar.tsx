"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="flex flex-col items-stretch whitespace-nowrap border-b border-solid border-b-slate-200 px-4 md:px-10 py-3 fixed top-0 left-0 right-0 bg-background-light z-50">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 text-text-primary">
          {/* <div className="size-6 text-primary">
            <svg
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
          <h2 className="text-text-primary text-xl font-bold leading-tight tracking-[-0.015em]">
            TerpTax
          </h2> */}
          <Image src="/logo.png" alt="TerpTax Logo" width={100} height={50} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <Link
              className={`text-sm font-medium leading-normal transition-colors ${
                pathname === "/"
                  ? "text-primary font-bold"
                  : "text-text-primary hover:text-primary"
              }`}
              href="/"
            >
              Home
            </Link>
            <Link
              className={`text-sm font-medium leading-normal transition-colors ${
                pathname === "/about"
                  ? "text-primary font-bold"
                  : "text-text-primary hover:text-primary"
              }`}
              href="/about"
            >
              About Us
            </Link>
            <Link
              className={`text-sm font-medium leading-normal transition-colors ${
                pathname === "/faqs"
                  ? "text-primary font-bold"
                  : "text-text-primary hover:text-primary"
              }`}
              href="/faqs"
            >
              FAQ
            </Link>
            <Link
              className={`text-sm font-medium leading-normal transition-colors ${
                pathname === "/resources"
                  ? "text-primary font-bold"
                  : "text-text-primary hover:text-primary"
              }`}
              href="/resources"
            >
              Resources
            </Link>
          </div>
          <Link
            href="/booking"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-opacity"
          >
            <span className="truncate">Book Appointment</span>
          </Link>
        </div>

        {/* Mobile Burger Menu Button */}
        <button
          onClick={toggleMenu}
          className="flex md:hidden min-w-[40px] max-w-[40px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 p-2 bg-transparent text-text-primary text-sm font-bold"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 py-4 border-t border-slate-200">
          <Link
            className={`text-sm font-medium leading-normal px-2 py-2 transition-colors ${
              pathname === "/"
                ? "text-primary font-bold"
                : "text-text-primary hover:text-primary"
            }`}
            href="/"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            className={`text-sm font-medium leading-normal px-2 py-2 transition-colors ${
              pathname === "/about"
                ? "text-primary font-bold"
                : "text-text-primary hover:text-primary"
            }`}
            href="/about"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            className={`text-sm font-medium leading-normal px-2 py-2 transition-colors ${
              pathname === "/faqs"
                ? "text-primary font-bold"
                : "text-text-primary hover:text-primary"
            }`}
            href="/faqs"
            onClick={closeMenu}
          >
            FAQ
          </Link>
          <Link
            className={`text-sm font-medium leading-normal px-2 py-2 transition-colors ${
              pathname === "/resources"
                ? "text-primary font-bold"
                : "text-text-primary hover:text-primary"
            }`}
            href="/resources"
            onClick={closeMenu}
          >
            Resources
          </Link>
          <Link
            href="/booking"
            onClick={closeMenu}
            className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-opacity mt-2"
          >
            <span className="truncate">Book Appointment</span>
          </Link>
        </div>
      )}
    </header>
  );
}
