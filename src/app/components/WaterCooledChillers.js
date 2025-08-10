"use client";

import { motion } from "framer-motion";

export default function WaterCooledChillersPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Page Title */}
      <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Water Cooled Chillers
      </motion.h1>

      {/* Intro */}
      <motion.p
        className="mb-6 text-lg text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Water cooled chillers are advanced, high-efficiency cooling systems
        ideal for large-scale applications such as commercial buildings,
        industrial facilities, and manufacturing plants. By using water as a
        medium for heat exchange, they deliver exceptional energy efficiency,
        precise temperature control, and long-term reliability for demanding
        cooling needs.
      </motion.p>

      {/* How It Works */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-2">How They Work</h2>
        <p className="text-gray-700">
          Water cooled chillers absorb heat from a circulating water loop via a
          refrigerant in the evaporator coil. The refrigerant is compressed,
          releasing heat into a cooling tower. This process runs continuously,
          ensuring consistent and efficient cooling for large facilities.
        </p>
      </motion.div>

      {/* Benefits */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-2">
          Why Choose Water Cooled Chillers
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Superior energy efficiency for high-capacity cooling.</li>
          <li>Consistent temperature control in demanding environments.</li>
          <li>Longer system lifespan with proper maintenance.</li>
          <li>Quieter operation compared to air cooled systems.</li>
          <li>Lower environmental impact with eco-friendly refrigerants.</li>
        </ul>
      </motion.div>

      {/* Product Types */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4">
          Our Water Cooled Chiller Range
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Industrial Water Chillers</h3>
            <p className="text-gray-700">
              Built for large industrial sites, these deliver powerful cooling
              capacity with exceptional durability and heat rejection
              efficiency.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Commercial Water Chillers</h3>
            <p className="text-gray-700">
              Energy-efficient, space-conscious, and quiet systems ideal for
              offices, malls, hotels, and hospitals.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Packaged Water Chillers</h3>
            <p className="text-gray-700">
              All-in-one units combining chiller, cooling tower, and pumps for
              easy installation in smaller spaces.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Installation & Support */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-2">
          Professional Installation & Support
        </h2>
        <p className="text-gray-700">
          Our experts ensure seamless integration into your existing systems,
          prioritizing safety, efficiency, and minimal downtime. We also offer
          regular maintenance, troubleshooting, and rapid-response repairs.
        </p>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="bg-gradient-to-r from-sky-500 to-cyan-400 p-6 rounded-lg shadow text-white text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-2">
          Need a High-Performance Cooling Solution?
        </h3>
        <p className="mb-4">
          Contact DXO for expert water cooled chiller installation, maintenance,
          and repair services.
        </p>
        <button className="bg-white text-sky-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </motion.div>
    </div>
  );
}
