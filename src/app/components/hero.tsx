import AOS from "aos";      
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false, mirror: true });
  }, []);

  return (
<div className="relative w-full h-screen bg-gray-900 overflow-hidden">
  {/* Blackhole GIF */}
  <img
    src="/hero/blackhole.gif"
    alt="Blackhole"
    className="absolute inset-0 w-full h-full object-cover animate-fade-out"
  />

  {/* Content */}
  <div className="relative w-full h-full flex flex-col items-center justify-center text-center px-4">
    
    {/* Logo + Spectrum */}
    <div className="flex items-center justify-center mb-6">
      <img
        src="/Spectrum.svg"
        alt="Logo"
        className="h-12 w-auto sm:h-16 md:h-20 mr-2 animate-zoom-in"
      />
      <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold 
        bg-gradient-to-r from-blue-600 via-yellow-600 to-pink-500 bg-clip-text text-transparent animate-zoom-in">
        Spectrum
      </span>
    </div>

    {/* Welcome text */}
    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white animate-zoom-in font-serif">
      Welcome to Spectrum
    </h1>
  </div>
</div>

  );
};

export default Hero;
