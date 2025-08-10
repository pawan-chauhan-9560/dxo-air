// pages/air-cooled-chiller.jsx
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function AirCooledChiller() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Air Cooled Chiller
        </motion.h1>
        <motion.p
          className="text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Efficient, Reliable, and Sustainable Cooling Solutions for Industrial,
          Commercial, and Specialized Needs.
        </motion.p>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-6">
        <motion.h2
          className="text-3xl font-bold text-blue-600"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          What Is an Air Cooled Chiller?
        </motion.h2>
        <p>
          Air Cooled Chillers remove heat from fluids and release it into the
          ambient air using a compressor, condenser, evaporator, and expansion
          valve. Their modular design allows for quick installation, minimal
          maintenance, and reduced operational costs compared to traditional
          systems.
        </p>
      </section>

      {/* Applications Section */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-blue-600 mb-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            Applications
          </motion.h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Industrial Manufacturing – Prevent equipment overheating",
              "Commercial Buildings – Centralized cooling for large spaces",
              "Food & Beverage Industry – Maintain product freshness",
              "Pharmaceuticals & Labs – Precision temperature control",
            ].map((item, idx) => (
              <motion.li
                key={idx}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-6">
        <motion.h2
          className="text-3xl font-bold text-blue-600"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          Why Choose Air Cooled Chillers?
        </motion.h2>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            "Energy Efficient – Lower power consumption",
            "Low Maintenance – No water circuits, scaling, or algae issues",
            "Flexible – Modular design for easy installation",
            "Eco-Friendly – Uses air and sustainable refrigerants",
          ].map((item, idx) => (
            <motion.li
              key={idx}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0" />
              {item}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-12 px-6 text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Ready to Upgrade Your Cooling System?
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Contact Blueace Limited today for a consultation and discover the
          perfect Air Cooled Chiller solution for your business or facility.
        </motion.p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
}
