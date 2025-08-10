import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center text-center px-6 py-12 sm:px-12">
        {/* Logo */}
        <Image
          src="/dxo-logo.png" // Replace with your actual logo file
          alt="DXO AC Conditioner Service Logo"
          width={160}
          height={160}
          priority
          className="mb-6"
        />

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-sky-600">DXO</span> AC Conditioner
          Services
        </h1>
        <p className="text-gray-600 max-w-xl mb-8">
          Expert air conditioning installation, maintenance, and repair –
          keeping you cool and comfortable all year round.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/services"
            className="bg-sky-600 hover:bg-sky-500 text-white px-6 py-3 rounded-md text-lg shadow-sm"
          >
            View Services
          </Link>
          <Link
            href="/contact"
            className="border border-sky-600 text-sky-600 hover:bg-sky-50 px-6 py-3 rounded-md text-lg"
          >
            Contact Us
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DXO AC Conditioner Services. All rights
        reserved.
      </footer>
    </div>
  );
}
