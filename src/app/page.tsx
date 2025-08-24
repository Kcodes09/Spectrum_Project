import Navbar from "./components/navbar";
import ArticleCard from "./components/articlecard";
import articles from "./data/articles.json";
import React from "react";
import proftalk from "./data/proftalk.json";
import ProfTalkCard from "./components/talkprof";

const HomePage = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="pt-24"></div>

      {/* Articles Section */}
      <div
        id="articles"
        className="pt-8 max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-center font-lucida font-semibold mb-8 text-white">
          Latest Articles
        </h1>

        <div className="flex space-x-6 overflow-x-auto px-4 py-6 pb-4 ">
          <div className="scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-800"></div>
            {articles.map((article) => (
              <ArticleCard
                key={article.title}
                image={article.image}
                link={article.link}
              date={article.date}
              title={article.title}
              excerpt={article.excerpt}
            />
          ))}
        </div>
      </div>

      <div
        id="profs"
        className="pt-8 max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-center font-lucida font-semibold mb-8 text-white">
          Talk With Professors
        </h1>

        <div className="flex space-x-6 overflow-x-auto px-4 py-6 pb-4 ">
          <div className="scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-800"></div>
            {proftalk.map((proftalk) => (
              <ProfTalkCard
              key={proftalk.title}
              image={proftalk.image}
              link={proftalk.link}
              date={proftalk.date}
              title={proftalk.title}
              excerpt={proftalk.excerpt}
              professor={proftalk.professor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

