"use client";

import { motion } from "framer-motion";

export default function CassetteACPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Cassette Air Conditioning
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
          With the summer heat waves rolling in, a well-maintained cassette AC
          installation service in Delhi is your best friend. However, when it
          begins malfunctioning, it quickly turns your cool haven into a stuffy
          nightmare. Irregular cooling or unusual noises are clear signs that
          it’s time to bring your AC back to peak performance with professional
          repair services.
        </motion.p>

        <motion.h2 className="text-2xl font-semibold mt-8">
          Blueace Limited: Your Trusted AC Care Experts
        </motion.h2>
        <motion.p>
          Blueace Limited provides premium cassette AC installation, repair,
          maintenance, and servicing for residential and commercial clients in
          Delhi, with a strong focus on quality and customer satisfaction.
        </motion.p>

        <motion.h2 className="text-2xl font-semibold mt-8">
          Professional Cassette AC Installation
        </motion.h2>
        <motion.p>
          Our expert technicians ensure seamless installation for maximum
          comfort and system longevity. From placement to wiring, we guarantee
          the best cooling performance and energy efficiency.
        </motion.p>

        <motion.h2 className="text-2xl font-semibold mt-8">
          Premium Repair & Servicing
        </motion.h2>
        <motion.p>
          We offer thorough inspections, fast repairs, and efficient maintenance
          to keep your AC running smoothly. Using advanced tools and genuine
          parts, we ensure reliability and customer satisfaction.
        </motion.p>

        <motion.h3 className="text-xl font-semibold mt-6">
          Our Services Include:
        </motion.h3>
        <motion.ul className="list-disc list-inside space-y-2">
          <li>
            <strong>General Inspection & Diagnosis:</strong> Full system check
            to detect hidden issues affecting performance.
          </li>
          <li>
            <strong>Filter Cleaning & Replacement:</strong> Maintains airflow,
            cooling efficiency, and indoor air quality.
          </li>
          <li>
            <strong>Refrigerant Check & Refill:</strong> Ensures optimal cooling
            and system efficiency.
          </li>
          <li>
            <strong>Compressor & Motor Inspection:</strong> Early detection of
            wear or damage to prevent breakdowns.
          </li>
          <li>
            <strong>Drain Line Cleaning:</strong> Prevents blockages, water
            leaks, and mold growth.
          </li>
        </motion.ul>

        <motion.h2 className="text-2xl font-semibold mt-8">
          Signs Your Cassette AC Needs Service
        </motion.h2>
        <motion.ul className="list-disc list-inside space-y-2">
          <li>Poor cooling or longer cooling times</li>
          <li>Grinding or buzzing noises</li>
          <li>Water leaks or clogged drains</li>
          <li>Frozen coils or reduced airflow</li>
        </motion.ul>

        <motion.h2 className="text-2xl font-semibold mt-8">
          Why Choose Blueace Limited?
        </motion.h2>
        <motion.p>
          We use only premium components, modern diagnostic tools, and the
          latest repair techniques to deliver long-lasting results. With
          transparent pricing, flexible scheduling, and personalized solutions,
          we ensure a hassle-free experience from start to finish.
        </motion.p>

        <motion.p className="font-semibold mt-6">
          Don’t wait for your AC to break down — Book your cassette AC service
          in Delhi with Blueace Limited today and enjoy cool, efficient comfort
          year-round!
        </motion.p>
      </motion.div>
    </div>
  );
}
