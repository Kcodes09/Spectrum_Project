import React from "react";
import Link from "next/link";
import { Instagram , Facebook, MailIcon , CopyrightIcon, LinkIcon} from "lucide-react";

function Footer()  {
  return (
    <div className="bg-gray-600">
    <div className="bg-gray-600 text-gray-400 py-5">
        <p
          className="text-5xl md:text-3xl lg:text-5xl text-center items-center font-lucida font-semibold mb-8 text-white"
        >
          <LinkIcon className="w-6 h-6 inline-block mr-2" /> Connect With Us
        </p>
      <div className="max-w-7xl mx-auto  pl-40">
        <div className="flex justify-between items-center  px-2">
          <div className="text-lg font-bold text-white line-clamp-2 hover:text-blue-300">
            <Link href="https://www.instagram.com/spectrum_bphc?igsh=MXZiejN2aTZuNXZpZg==" className=" flex flex-col hover:text-white items-center text-center">
              <Instagram className="w-6 h-6 mb-1" /> @spectrum_bphc
            </Link>
          </div>
          <div className="text-lg font-bold text-white line-clamp-2 hover:text-blue-300">
            <Link href="https://www.facebook.com/groups/181613401861124/?ref=share&mibextid=NSMWBTc" className=" flex flex-col hover:text-white items-center text-center">
              <Facebook className="w-6 h-6 mb-1" /> facebook.com/spectrum-thephysicsassociation
            </Link>
          </div>
          <div className="text-lg font-bold text-white line-clamp-2 column-clamp-1 hover:text-blue-300">
            <Link href="mailto:spectrum@hyderabad.bits-pilani.ac.in" className=" flex flex-col hover:text-white items-center text-center">
              <MailIcon className="w-6 h-6 mb-1" /> spectrum@hyderabad.bits-pilani.ac.in
            </Link>
          </div>
        </div>
      </div>
      </div>
    <footer className="text-center bg-gray-800 mt-6">
        
           <CopyrightIcon className="inline w-4 h-4" /> Spectrum
        
      </footer>
      </div>
  );
};

export default Footer;
