import React from "react";
import Link from "next/link";
import { InstagramIcon , FacebookIcon, MailIcon } from "lucide-react";

function Footer()  {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <Link href="https://www.instagram.com/spectrum_bphc?igsh=MXZiejN2aTZuNXZpZg==" className="hover:text-white">
              <InstagramIcon className="w-6 h-6 inline" />
            </Link>
          </div>
          <div>
            <Link href="https://www.facebook.com/groups/181613401861124/?ref=share&mibextid=NSMWBTc" className="hover:text-white">
              <FacebookIcon className="w-6 h-6 inline" />
            </Link>
          </div>
          <div>
            <Link href="mailto:spectrum@hyderabad.bits-pilani.ac.in" className="hover:text-white">
              <MailIcon className="w-6 h-6 inline" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
