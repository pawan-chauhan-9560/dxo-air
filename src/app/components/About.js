"use client";
import { motion } from "framer-motion";
import {
  BuildingOfficeIcon,
  Cog8ToothIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  HeartIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

export default function AboutUs() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-blue-900 text-white py-12 text-center"
      >
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-2 text-lg opacity-90">
          Blueace India Limited – Comfort Meets Expertise
        </p>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        {/* Welcome Section */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4"
        >
          <BuildingOfficeIcon className="w-12 h-12 text-blue-700" />
          <div>
            <h2 className="text-2xl font-semibold text-blue-900 mb-2">
              Welcome to Blueace Limited
            </h2>
            <p>
              At Blueace Limited, we bring together innovation, comfort, and
              expertise to deliver world-class HVAC solutions. Our mission is
              simple – to provide top-notch heating, ventilation, and air
              conditioning services that are tailored to your unique needs.
            </p>
          </div>
        </motion.section>

        {/* Who We Are */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4"
        >
          <ShieldCheckIcon className="w-12 h-12 text-blue-700" />
          <div>
            <h2 className="text-2xl font-semibold text-blue-900 mb-2">
              Who We Are
            </h2>
            <p>
              We are more than just an HVAC service provider – we are your
              partners in comfort. Our team of certified technicians and
              industry experts brings years of hands-on experience, ensuring
              seamless performance and long-lasting solutions for residential,
              commercial, and industrial clients.
            </p>
          </div>
        </motion.section>

        {/* Our Values */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <h2 className="text-2xl font-semibold text-blue-900 mb-6">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-blue-50 rounded-lg shadow flex flex-col items-center text-center"
            >
              <HeartIcon className="w-10 h-10 text-blue-700 mb-2" />
              <h3 className="font-semibold">Customer Satisfaction</h3>
              <p className="text-sm">
                Your comfort is our priority in every project.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-blue-50 rounded-lg shadow flex flex-col items-center text-center"
            >
              <Cog8ToothIcon className="w-10 h-10 text-blue-700 mb-2" />
              <h3 className="font-semibold">Innovation</h3>
              <p className="text-sm">
                We adopt the latest technologies for better efficiency.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-blue-50 rounded-lg shadow flex flex-col items-center text-center"
            >
              <GlobeAltIcon className="w-10 h-10 text-blue-700 mb-2" />
              <h3 className="font-semibold">Sustainability</h3>
              <p className="text-sm">
                Eco-friendly solutions for a greener future.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4"
        >
          <RocketLaunchIcon className="w-12 h-12 text-blue-700" />
          <div>
            <h2 className="text-2xl font-semibold text-blue-900 mb-2">
              Why Choose Blueace Limited?
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Expert team with deep industry knowledge</li>
              <li>Customized solutions for every project</li>
              <li>End-to-end service from consultation to after-sales</li>
              <li>Proven track record in all sectors</li>
            </ul>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-blue-950 text-white text-center py-4 text-sm"
      >
        &copy; {new Date().getFullYear()} Blueace India Limited. All rights
        reserved.
      </motion.footer>
    </div>
  );
}
