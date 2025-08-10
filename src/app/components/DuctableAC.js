"use client";

import { motion } from "framer-motion";

export default function DuctableACPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Ductable Air Conditioner Services
      </motion.h1>

      {/* Intro */}
      <motion.p
        className="mb-6 text-lg text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        At DXO, we specialize in premium ductable air conditioner repair and
        supply services. Whether you need professional repairs to restore peak
        performance or want to install a high-efficiency ductable AC system,
        our expert team delivers reliable solutions tailored to your needs.
      </motion.p>

      {/* What is Ductable AC */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-2">
          What Are Ductable Air Conditioners?
        </h2>
        <p className="text-gray-700">
          Also known as ducted AC systems, these units are designed for cooling
          large spaces through a network of ducts and vents, distributing air
          evenly across multiple rooms or zones. Installed discreetly above
          ceilings or behind walls, ductable ACs offer a clean aesthetic,
          minimal noise, and outstanding energy efficiency—making them perfect
          for commercial spaces, offices, and large homes.
        </p>
      </motion.div>

      {/* Repair Services */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-2">
          Our Ductable AC Repair Services
        </h2>
        <p className="text-gray-700">
          If your ductable AC starts underperforming, consuming excess energy,
          or making unusual noises, our certified technicians can diagnose and
          repair the issue promptly. Common problems we fix include low
          refrigerant, clogged filters or ducts, faulty compressors or fans,
          water leakage, electrical failures, and frozen coils.
        </p>
      </motion.div>

      {/* Supply & Installation */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-2">
          Ductable AC Supply & Installation
        </h2>
        <p className="text-gray-700">
          DXO supplies a wide range of high-quality ductable air conditioners
          from top brands, designed for superior performance and durability.
          Our team will assess your space and recommend the right capacity and
          configuration for your needs. We ensure professional installation for
          optimal cooling efficiency and long-term reliability.
        </p>
      </motion.div>

      {/* Maintenance */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-2">
          The Importance of Regular Maintenance
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Increased efficiency and lower energy bills</li>
          <li>Extended lifespan of your AC system</li>
          <li>Improved indoor air quality</li>
          <li>Reduced risk of costly breakdowns</li>
        </ul>
      </motion.div>

      {/* Contact CTA */}
      <motion.div
        className="bg-gradient-to-r from-sky-500 to-cyan-400 p-6 rounded-lg shadow text-white text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-2">
          Book Your Ductable AC Service Today
        </h3>
        <p className="mb-4">
          Keep your ductable AC running at its best with DXO’s expert repair,
          supply, and maintenance solutions.
        </p>
        <button className="bg-white text-sky-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </motion.div>
    </div>
  );
}
