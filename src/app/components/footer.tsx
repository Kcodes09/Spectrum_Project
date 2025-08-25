import React from "react";
import Link from "next/link";
import { Instagram , Facebook, MailIcon , CopyrightIcon, LinkIcon} from "lucide-react";

function Footer()  {
  return (
    <div className="bg-gray-600">
    <div className="bg-gray-600 text-gray-400 py-5">
        <p
          className="text-3xl md:text-5xl text-center font-lucida font-semibold text-white mb-8 flex justify-center items-center"
        >
          <LinkIcon className="w-6 h-6 inline-block mr-2" /> Connect With Us
        </p>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center  px-2 flex-wrap gap-6" >
          <div className="flex flex-col items-center text-center hover:text-white transition">
            <Link href="https://www.instagram.com/spectrum_bphc?igsh=MXZiejN2aTZuNXZpZg==" className=" flex flex-col hover:text-white items-center text-center sm:text-hidden">
              <Instagram className="w-6 h-6 mb-1" /> <span className=" text-white text-md  font-bold hidden sm:inline"> @spectrum_bphc</span>
            </Link>
          </div>
          <div className="flex  mb-4 hover:text-white transition">
            <Link href="https://www.facebook.com/groups/181613401861124/?ref=share&mibextid=NSMWBTc" className=" flex flex-col justify-center hover:text-white items-center sm:text-hidden">
                <Facebook className="w-6 h-6 mb-1" /> <span className="text-white text-md  font-bold hidden sm:inline">facebook.com/spectrum-thephysicsassociation</span>
            </Link>
          </div>
          <div className="flex flex-col items-center text-center hover:text-white transition">
            <Link href="mailto:spectrum@hyderabad.bits-pilani.ac.in" className=" flex flex-col hover:text-white items-center text-center sm:text-hidden">
              <MailIcon className="w-6 h-6 mb-1" /> <span className="text-white text-md font-bold hidden sm:inline">spectrum@hyderabad.bits-pilani.ac.in</span>
            </Link>
          </div>
        </div>
      </div>
      </div>
    <footer className="text-center bg-gray-800 mt-6">

           <CopyrightIcon className="inline w-4 h-4" /> <Link href="/">Spectrum</Link>

      </footer>
      </div>
  );
};

export default Footer;
