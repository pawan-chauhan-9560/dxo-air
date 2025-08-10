"use client";

import { motion } from "framer-motion";

export default function ColdRoomStoragePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Page Title */}
      <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Cold Room & Cold Storage Services
      </motion.h1>

      {/* Intro */}
      <motion.p
        className="mb-6 text-lg text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        DXO provides high-quality cold room and cold storage solutions to keep
        your temperature-sensitive products safe, fresh, and compliant with
        industry standards. From perishable foods to pharmaceuticals, we ensure
        optimal storage conditions for maximum product lifespan.
      </motion.p>

      {/* Supply & Installation */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-2">Supply & Installation</h2>
        <p className="text-gray-700">
          We specialize in designing, supplying, and installing cold rooms and
          cold storage units that match your operational needs. Our
          installations prioritize insulation, refrigeration performance, and
          safety to ensure energy-efficient and reliable cold storage.
        </p>
      </motion.div>

      {/* Maintenance */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-2">Maintenance</h2>
        <p className="text-gray-700">
          We provide regular maintenance to ensure your cold storage operates at
          peak efficiency. Our services include temperature checks, refrigerant
          monitoring, defrosting, and cleaning coils and compressors—preventing
          costly downtime and preserving performance.
        </p>
      </motion.div>

      {/* Servicing */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-2">Servicing</h2>
        <p className="text-gray-700">
          Seasonal and routine servicing keeps refrigeration units, electrical
          systems, and cooling components in top shape. Our expert team ensures
          your system remains reliable year-round, avoiding unexpected failures.
        </p>
      </motion.div>

      {/* Repairing */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-2">Repairing</h2>
        <p className="text-gray-700">
          If your cold storage unit experiences a fault—whether in temperature
          regulation, mechanical parts, or the refrigeration system—we offer
          fast, effective repairs to minimize downtime and protect your
          inventory.
        </p>
      </motion.div>

      {/* Contact CTA */}
      <motion.div
        className="bg-gradient-to-r from-sky-500 to-cyan-400 p-6 rounded-lg shadow text-white text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-2">
          Keep Your Products Fresh & Safe
        </h3>
        <p className="mb-4">
          Contact DXO for expert cold room and cold storage installation,
          maintenance, and repair services.
        </p>
        <button className="bg-white text-sky-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </motion.div>
    </div>
  );
}
