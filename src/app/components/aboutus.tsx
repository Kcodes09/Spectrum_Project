import React from "react";

type ArticleProps = {
  mission: string;
  about: string;
  tagline: string;
  whoWeAre: string;     
};

const AboutUs = ({ mission, about, tagline, whoWeAre }: ArticleProps) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-200 max-w-3xl mx-auto justify-center">
      <p className="text-lg text-gray-200 mb-4">{about}</p>
      <p className="text-lg text-gray-200 mb-4">{whoWeAre}</p>
      <blockquote className="text-xl font-semibold text-white border-l-4 border-pink-500 pl-4 italic mb-4">
        {tagline}
      </blockquote>
       <p className="text-gray-400 italic font-medium text-center">-Team Spectrum</p>
      <p className="text-gray-200 text-lg">{mission}</p>
    </div>
  );
};

export default AboutUs;
