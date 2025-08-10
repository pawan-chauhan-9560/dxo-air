"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function DXOFooter() {
  return (
    <motion.footer
      className="bg-gray-900 text-gray-300 pt-10 pb-6 mt-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-gray-700">
          {/* Brand */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">DXO</h2>
            <p className="text-gray-400 text-sm">
              Keeping you cool and comfortable with expert AC installation,
              repair, and maintenance.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {["Installation", "Repair", "Maintenance", "Cleaning"].map(
                (service) => (
                  <motion.li whileHover={{ x: 5 }} key={service}>
                    <Link
                      href={`/services#${service.toLowerCase()}`}
                      className="hover:text-sky-400"
                    >
                      {service}
                    </Link>
                  </motion.li>
                )
              )}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Pricing", "Contact"].map((link) => (
                <motion.li whileHover={{ x: 5 }} key={link}>
                  <Link
                    href={`/${link.toLowerCase()}`}
                    className="hover:text-sky-400"
                  >
                    {link}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPinIcon className="h-5 w-5 text-sky-400" />
                123 Main Street, City, Country
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 text-sky-400" />
                <a href="tel:+911234567890" className="hover:text-sky-400">
                  +91 12345 67890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <EnvelopeIcon className="h-5 w-5 text-sky-400" />
                <a href="mailto:info@dxo.com" className="hover:text-sky-400">
                  info@dxo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} DXO AC Conditioner Service. All rights
            reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-sky-400">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-sky-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
