"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Cog6ToothIcon,
  BuildingOffice2Icon,
  CubeIcon,
  CloudIcon,
  SwatchIcon,
  BoltIcon,
  Squares2X2Icon,
  WrenchScrewdriverIcon,
  FireIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const services = [
  { title: "AHU", icon: Cog6ToothIcon, path: "/services/ahu" },
  { title: "FCU", icon: BuildingOffice2Icon, path: "/services/fcu" },
  {
    title: "Ductable Air Conditioner",
    icon: CubeIcon,
    path: "/services/ductable-air-conditioner",
  },
  {
    title: "Cold Room & Cold Storage",
    icon: CloudIcon,
    path: "/services/cold-room-cold-storage",
  },
  {
    title: "Water Cooled Chiller",
    icon: SwatchIcon,
    path: "/services/water-cooled-chiller",
  },
  {
    title: "VRV & VRF Air Conditioner",
    icon: BoltIcon,
    path: "/services/vrv-vrf-air-conditioner",
  },
  {
    title: "Cassette Air Conditioner",
    icon: Squares2X2Icon,
    path: "/services/cassette-air-conditioner",
  },
  {
    title: "AC Service & Repair",
    icon: WrenchScrewdriverIcon,
    path: "/services/ac-service-repair",
  },
  {
    title: "Air Cooled Chiller",
    icon: FireIcon,
    path: "/services/air-cooled-chiller",
  },
  { title: "Heat Pump", icon: SunIcon, path: "/services/heat-pump" },
];

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Link key={service.title} href={service.path}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ scale: 1.05 }}
                className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition-shadow cursor-pointer"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
