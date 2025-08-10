"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import { PhoneIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function DXOHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      className="w-full bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M12 2v20M2 12h20M4.5 4.5l15 15M19.5 4.5l-15 15"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-base font-bold text-gray-900">DXO</span>
                <span className="text-xs text-gray-500">
                  AC Conditioner Services
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["Home", "Services", "About", "Pricing", "Contact"].map((item) => (
              <motion.div whileHover={{ scale: 1.05 }} key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-gray-700 hover:text-sky-600"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+919354833137"
              className="hidden md:flex items-center gap-2 text-sm text-gray-700 hover:text-sky-600"
            >
              <PhoneIcon className="h-5 w-5" />
              <span className="font-medium">+91 9354833137</span>
            </a>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/book"
                className="hidden md:inline-block px-3 py-1.5 rounded-md bg-gradient-to-r from-sky-500 to-cyan-400 text-white text-sm font-medium shadow-md hover:opacity-90"
              >
                Book Now
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              aria-label="Toggle menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex items-center justify-center md:hidden p-2 rounded-md hover:bg-gray-100"
            >
              {mobileOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t shadow-inner"
          >
            <div className="px-4 py-3 flex flex-col gap-3">
              {["Home", "Services", "About", "Pricing", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileOpen(false)}
                    className="py-2 rounded hover:bg-gray-100"
                  >
                    {item}
                  </Link>
                )
              )}
              <a
                href="tel:+911234567890"
                className="py-2 rounded hover:bg-gray-100 font-medium"
              >
                Call +91 12345 67890
              </a>
              <Link
                href="/book"
                onClick={() => setMobileOpen(false)}
                className="mt-2 py-2 px-3 rounded-md bg-gradient-to-r from-sky-500 to-cyan-400 text-white text-center"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
