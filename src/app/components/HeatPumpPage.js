"use client";

import { motion } from "framer-motion";
import { CheckCircleIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function HeatPumpPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-sky-600 to-cyan-500 text-white py-16 px-6 text-center">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Heat Pump Installation & Services
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Efficient, year-round heating and cooling — DXO provides professional
          heat pump installation, maintenance and support tailored to your home
          or business.
        </motion.p>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        {/* Intro */}
        <motion.div
          className="prose max-w-none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold">
            Efficient and Versatile Climate Control
          </h2>
          <p>
            A heat pump transfers heat to deliver both heating and cooling
            efficiently. In winter it extracts heat from outside air/ground and
            moves it indoors; in summer it reverses the cycle to cool your
            space. Compared to conventional systems, heat pumps move heat rather
            than generate it, making them energy-efficient and eco-friendly —
            ideal for year-round comfort.
          </p>
        </motion.div>

        {/* How it works */}
        <motion.section
          className="bg-white rounded-xl p-6 shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-3">How Heat Pumps Work</h3>
          <p className="text-gray-700 mb-2">
            Heat pumps use a refrigerant cycle (compressor, condenser,
            evaporator, expansion valve) to move heat between indoors and
            outdoors. In heating mode they extract ambient heat and deliver it
            inside; in cooling mode they remove indoor heat and release it
            outside. Modern heat pumps often include variable speed compressors
            and eco-friendly refrigerants for top energy performance.
          </p>
        </motion.section>

        {/* Where to use + Benefits */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            className="bg-white rounded-xl p-6 shadow"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-3">
              Where Heat Pumps Shine
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>Residential homes (especially mild winter climates)</li>
              <li>Commercial buildings and offices</li>
              <li>Energy-efficient new builds & renovations</li>
              <li>Geothermal (ground-source) installations where feasible</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-6 shadow"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-3">Key Benefits</h3>
            <ul className="space-y-3 text-gray-700">
              <li>Highly energy efficient — lower running costs</li>
              <li>Provides both heating and cooling in one system</li>
              <li>Reduces carbon footprint with modern refrigerants</li>
              <li>Flexible options: air-source, ground-source, water-source</li>
            </ul>
          </motion.div>
        </div>

        {/* Tailored solutions */}
        <motion.section
          className="bg-white rounded-xl p-6 shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-3">
            Tailored Heat Pump Solutions
          </h3>
          <p className="text-gray-700 mb-3">
            DXO evaluates your space (insulation, size, usage) and recommends a
            heat pump solution that maximizes comfort and efficiency. We size
            the system correctly, choose the right technology
            (air/ground/water), and ensure optimal placement and controls for
            long-term savings.
          </p>

          <h4 className="font-semibold mb-2">Professional Installation</h4>
          <p className="text-gray-700 mb-2">
            Our certified technicians perform precise installations with minimal
            disruption. Proper sizing, placement, and commissioning are
            essential — and we handle all of it so your system performs reliably
            from day one.
          </p>

          <h4 className="font-semibold mb-2">Ongoing Maintenance & Support</h4>
          <p className="text-gray-700">
            Regular servicing (inspections, filter checks, refrigerant checks,
            software/controls updates) keeps your heat pump efficient and
            extends lifespan. DXO provides maintenance plans and fast support to
            minimize downtime.
          </p>
        </motion.section>

        {/* Sustainability & CTA */}
        <motion.section
          className="rounded-xl p-6 bg-gradient-to-r from-sky-600 to-cyan-500 text-white shadow-lg"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <SparklesIcon className="w-6 h-6" />
                Sustainable Comfort
              </h3>
              <p className="max-w-xl">
                Reduce running costs and emissions by switching to modern heat
                pump technology — smarter controls, efficient compressors, and
                eco refrigerants mean better performance and lower bills.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:info@dxo.com?subject=Heat%20Pump%20Enquiry"
                className="inline-flex items-center justify-center px-5 py-3 bg-white text-sky-600 font-semibold rounded-lg shadow hover:opacity-95"
              >
                Email Us
              </a>
              <a
                href="tel:+911234567890"
                className="inline-flex items-center justify-center px-5 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10"
              >
                Call +91 12345 67890
              </a>
            </div>
          </div>
        </motion.section>

        {/* checklist */}
        <motion.div
          className="bg-white rounded-xl p-6 shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4">
            Quick Checklist — Is a Heat Pump Right for You?
          </h3>
          <ul className="grid md:grid-cols-2 gap-3">
            {[
              "You need both heating and cooling",
              "Your location has moderate winters (good for air-source)",
              "You want to reduce running costs and emissions",
              "You have space for proper installation/ventilation",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-sky-600 flex-shrink-0" />
                <span className="text-gray-700">{t}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </main>
    </div>
  );
}
