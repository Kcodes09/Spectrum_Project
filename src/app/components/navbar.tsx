import Link from "next/link";
import React from "react";
import { ClipboardPenIcon, HomeIcon, InfoIcon, MicIcon } from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <Link href="/" className="flex items-center gap-2">
            <img src="/Spectrum.svg" alt="Spectrum" className="h-8 w-auto" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-yellow-600 to-pink-500 bg-clip-text text-transparent hover:bg-gradient-to-l sm:text-xl">
              Spectrum
            </span>
          </Link>


          <div className="flex space-x-1 lg:space-x-4 md:space-x-2">
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-400 hover:text-white hover:bg-blue-600 px-3 py-1 rounded-md transition"
            >
              <HomeIcon className="h-5 w-5" />
              <span className="hidden md:inline">Home</span>
            </Link>

            <Link
              href="#articles"
              className="flex items-center gap-2 text-gray-400 hover:text-white hover:bg-blue-600 px-3 py-1 rounded-md transition"
            >
              <ClipboardPenIcon className="h-5 w-5" />
              <span className="hidden md:inline">Articles</span>
            </Link>

            <Link
              href="#profs"
              className="flex items-center gap-2 text-gray-400 hover:text-white hover:bg-blue-600 px-3 py-1 rounded-md transition"
            >
              <MicIcon className="h-5 w-5" />
              <span className="hidden md:inline">Talk With Professors</span>
            </Link>

            <Link
              href="#aboutus"
              className="flex items-center gap-2 text-gray-400 hover:text-white hover:bg-blue-600 px-3 py-1 rounded-md transition"
            >
              <InfoIcon className="h-5 w-5" />
              <span className="hidden md:inline">About Us</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


