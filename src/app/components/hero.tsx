import AOS from "aos";      
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false, mirror: true });
  }, []);

  return (
<div className="relative w-full h-screen bg-gray-900 overflow-hidden pt-24">
  {/* Blackhole GIF */}
  <img
    src="/hero/blackhole.gif"
    alt="Blackhole"
    className="absolute inset-0 w-full h-full object-cover animate-fade-out"
  />

  {/* Content */}
  <div className="relative w-full h-full flex flex-col items-center animate-zoom-in">
    {/* Top logo + Spectrum */}
    <div className="flex flex-col justify-end">
      <div className="flex items-center space-x-4">
        <img src="/Spectrum.svg" alt="Logo" className="h-20 w-auto" />
        <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-yellow-600 to-blue-600 bg-clip-text text-transparent">
          Spectrum
        </span>
      </div>

      {/* Welcome text below logo */}
      <h1 className="mt-6 text-6xl md:text-8xl font-bold text-white text-center">
        Welcome to Spectrum
      </h1>
    </div>
  </div>
</div>
  );
};

export default Hero;
