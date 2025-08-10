"use client";

import { motion } from "framer-motion";

export default function FCUInfo() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Fan Coil Unit (FCU) Services
      </motion.h1>

      <motion.p
        className="mb-6 text-lg text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        A Fan Coil Unit (FCU) is a vital component in heating, ventilation, and
        air conditioning (HVAC) systems. It uses a fan to circulate air over a
        coil containing either hot or cold water, conditioning the air in the
        surrounding space. FCUs are often used in individual rooms or zones to
        maintain a comfortable temperature, offering flexibility and energy
        efficiency.
      </motion.p>

      <motion.h2
        className="text-2xl font-semibold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Our FCU Services
      </motion.h2>

      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white p-6 rounded-lg shadow"
        >
          <h3 className="text-xl font-semibold mb-2">
            Supply & Installation of FCUs
          </h3>
          <p className="text-gray-700">
            DXO provides top-quality supply and installation services for Fan
            Coil Units (FCUs). Our expert team ensures your FCU system is
            correctly installed for optimal comfort and energy efficiency. We
            assess your space to recommend the right FCU model, size, and
            configuration that suits your needs. Whether for residential or
            commercial use, we guarantee professional installation for
            long-lasting performance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-white p-6 rounded-lg shadow"
        >
          <h3 className="text-xl font-semibold mb-2">
            Repairing & Maintenance of FCUs
          </h3>
          <p className="text-gray-700">
            To ensure your FCU operates smoothly, our skilled technicians offer
            reliable repair and maintenance services. Whether your unit has
            stopped cooling or heating effectively, is making unusual noises, or
            isn’t working at peak efficiency, we provide quick, effective
            repairs. We also offer regular maintenance to extend system lifespan
            and maintain high air quality.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
