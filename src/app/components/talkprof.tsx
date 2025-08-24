import React from "react";
import { ArrowUpRightIcon } from "lucide-react";

type ArticleProps = {
  date: string;
  title: string;
  excerpt: string;
  link: string;
  image: string;
  professor: string;
};

const ProfTalkCard = ({ image, date, title, excerpt, link, professor }: ArticleProps) => {
  return (
    
    <a href={`/article/${link}`} className="min-w-[250px] max-w-[500px] bg-gray-800 shadow-md rounded-xl p-4 hover:scale-105 hover:shadow-xl transition-transform duration-200">
      <img 
        src={image}
        alt={`Image for ${title}`}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-semibold mb-2 text-white">{title}</h2>
      <p className="text-gray-300 mb-4 line-clamp-6">{excerpt}</p>
      <p className="text-sm text-gray-600 mb-4">{professor}</p>
      <p className="text-sm text-gray-400 mb-4">{date}</p>
      <div
        
        className="text-blue-400 font-medium inline-flex items-center gap-1 hover:underline"
      >
        Read more <ArrowUpRightIcon className="h-4 w-4" />
      </div>
    </a>
  );
};

export default ProfTalkCard;
