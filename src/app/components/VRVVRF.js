"use client";

import { motion } from "framer-motion";

export default function VRVVRFPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        VRV & VRF Air Conditioning
      </motion.h1>

      <motion.div
        className="space-y-6 text-gray-700 leading-relaxed"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        <motion.p>
          VRV (Variable Refrigerant Volume) and VRF (Variable Refrigerant Flow)
          air conditioning systems are advanced, energy-efficient cooling and
          heating solutions ideal for large buildings and multi-zone
          applications. These systems provide precise temperature control,
          offering significant energy savings and comfort. VRV/VRF systems are
          designed to adapt to varying cooling and heating demands across
          different zones of a building.
        </motion.p>

        <motion.h2 className="text-2xl font-semibold mt-8">
          Our VRV-VRF Air Conditioning System Services:
        </motion.h2>

        <motion.ul className="list-disc list-inside space-y-4">
          <li>
            <strong>Supply & Installation:</strong> We specialize in the supply
            and installation of VRV/VRF air conditioning systems tailored to the
            specific needs of your space. Our expert team ensures that the
            system is installed to optimize energy efficiency, comfort, and
            performance. Whether for a commercial, industrial, or large
            residential setting, we provide professional installation to meet
            all your cooling and heating needs.
          </li>
          <li>
            <strong>Servicing:</strong> Regular servicing is essential to
            maintain the high performance of your VRV/VRF system. Our servicing
            includes routine inspections, cleaning of filters, checking
            refrigerant levels, and ensuring the entire system operates
            efficiently. We also address any operational issues, ensuring your
            system runs smoothly year-round.
          </li>
          <li>
            <strong>Maintenance:</strong> Proper maintenance helps extend the
            life of your VRV/VRF air conditioning system and keeps it running at
            peak efficiency. We provide comprehensive maintenance services,
            including regular inspections, system diagnostics, and preventive
            checks to prevent breakdowns. Our proactive approach helps minimize
            downtime and maximize the lifespan of your system.
          </li>
          <li>
            <strong>Repairing:</strong> If your VRV/VRF system encounters
            issues, our skilled technicians are ready to diagnose and repair the
            problem promptly. Whether it’s a fault with the compressor,
            refrigerant leakage, or control panel issues, we provide fast and
            reliable repair services to restore your system to full
            functionality, ensuring comfort and efficiency are maintained.
          </li>
        </motion.ul>

        <motion.p>
          Our VRV-VRF Air Conditioning System services focus on providing
          optimal comfort, energy efficiency, and long-term performance for your
          cooling and heating needs. From installation to ongoing maintenance
          and repairs, we are committed to keeping your VRV/VRF system in top
          condition.
        </motion.p>
      </motion.div>
    </div>
  );
}
