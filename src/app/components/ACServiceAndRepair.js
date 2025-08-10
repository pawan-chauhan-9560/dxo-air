// src/pages/ACServiceAndRepair.jsx
import React from "react";
import { motion } from "framer-motion";

const ACServiceAndRepair = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
      <motion.div
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto"
      >
        {/* Main Title */}
        <motion.h1
          variants={sectionVariants}
          className="text-3xl font-bold text-blue-700 mb-6"
        >
          AC Service and Repair
        </motion.h1>

        {/* Sections */}
        {[
          {
            title:
              "Quick And Efficient Central Air Conditioner Installation Services",
            text: `Central air conditioner installation services are in demand nowadays... letting you enjoy the benefits of efficient air conditioning with minimal delay.`,
          },
          {
            title: "Trusted Installation and Repair Services by Experts",
            text: `When talking about air conditioning, timely and reliable installation and repair services... lasting comfort and peace of mind.`,
          },
          {
            title:
              "Emergency AC Services: Fast, Reliable Repairs When You Need Them Most",
            text: `We know that one day your air conditioner will malfunction without warning... in case you need them.`,
          },
          {
            title:
              "Upgrade And Retrofit AC Systems for Enhanced Performance and Cost Savings",
            text: `We also make existing, dated, or inefficient air conditioning systems stronger... pleasant and cozy throughout the year.`,
          },
          {
            title:
              "Ductwork Design and Installation to Achieve Peak Cooling Efficiency",
            text: `Properly designed and installed ductwork is essential in any room... efficient cooling across your space.`,
          },
          {
            title: "Range of Central AC Systems We Provide",
            text: `Blueace Limited is one of the best central AC dealers in Delhi... installation to fit every need.`,
          },
          {
            title: "Why Our Installation Services Are a Popular Choice",
            text: `Our central Air conditioner installation services are so prominently chosen because of their precision... attention to detail.`,
          },
          {
            title:
              "All-Inclusive Maintenance and Repair Services for Your AC System",
            text: `Scheduled maintenance is one of those things you must do to ensure the longevity... runs smoothly year-round.`,
          },
          {
            title: "Why Choose Us: Trusted Expertise and Unmatched Service",
            text: `When it comes to HVAC solutions, our commitment to quality sets us apart... difference by yourself.`,
          },
        ].map((section, index) => (
          <motion.div
            key={index}
            variants={sectionVariants}
            className="mb-8 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              {section.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">{section.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ACServiceAndRepair;
