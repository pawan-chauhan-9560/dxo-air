"use client";

import { motion } from "framer-motion";

export default function AHUInfo() {
  const sections = [
    {
      title: "Expert Air Handling Unit Services",
      content: `AHUs offer optimal performance as the building block of any HVAC system, conditioning and circulating air in buildings. They control temperature, humidity, and air quality by filtering, heating, cooling, and distributing air. Regular repairing, maintaining, and installing ensures maximum operation. DXO provides professional air handling unit maintenance services to ensure your AHU's efficiency, enhance air quality, and extend system life.`,
    },
    {
      title: "The Function of AHUs in HVAC Systems",
      content: `AHUs regulate and circulate air in HVAC systems, ensuring clean indoor air, temperature control, ventilation, and humidity regulation. Modern AHUs are designed for energy efficiency to save costs while delivering optimal airflow and air quality.`,
    },
    {
      title: "DXO: Single-Stop Solution for AHU Services",
      content: `We offer all-inclusive solutions for repair, maintenance, and installation—whether it's preventive maintenance, motor replacement, refrigerant leak repair, or electrical fault fixes. Our expertise ensures energy efficiency, system longevity, and seamless integration.`,
    },
    {
      title: "Our AHU Services",
      content: `
      • Installation: Custom-designed AHUs for optimal airflow and efficiency.
      • Maintenance: Filter changes, system checks, and preventive care.
      • Repairs: Fixing motor issues, fan faults, refrigerant leaks, coil damage, and electrical problems.`,
    },
    {
      title: "Common Problems We Solve",
      content: `Motor failures, fan malfunctions, refrigerant leaks, coil damage, faulty sensors, wiring problems, and control system failures. Our skilled technicians diagnose and repair promptly for minimal downtime.`,
    },
    {
      title: "Our Commitment",
      content: `At DXO, we prioritize customer satisfaction, transparency, and long-term solutions. We deliver premium quality services with budget-friendly pricing to keep your AHUs running at peak performance year-round.`,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <motion.h1
        className="text-3xl sm:text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Air Handling Unit (AHU) Services
      </motion.h1>

      <div className="space-y-10">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            className="bg-white shadow-lg rounded-xl p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
            <p className="text-gray-700 whitespace-pre-line">
              {section.content}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
