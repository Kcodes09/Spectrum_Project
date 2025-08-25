"use client";
import React, { useEffect } from "react";
import Navbar from "./components/navbar";
import ArticleCard from "./components/articlecard";
import articles from "./data/articles.json";
import ProfTalkCard from "./components/talkprof";
import proftalk from "./data/proftalk.json";
import AOS from "aos";
import Footer from "./components/footer";
import "aos/dist/aos.css";

const HomePage: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false , mirror: true});
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100">
      {/* Navbar */}
      <Navbar />
      <div className="pt-24"></div>

      {/* Articles Section */}
      <section
        id="articles"
        className="pt-8 max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8"
      >
        <h1
          className="text-5xl md:text-6xl lg:text-7xl text-center font-lucida font-semibold mb-8 text-white"
          data-aos="fade-down"
        >
          Latest Articles
        </h1>

        <div className="flex space-x-6 overflow-x-auto px-4 py-6 pb-4 " data-aos="fade-right" data-aos-delay={0}>
          {articles.map((article, index) => (
            
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
      </section>

      {/* Professors Section */}
      <section
        id="profs"
        className="pt-8 max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8"
      >
        <h1
          className="text-5xl md:text-6xl lg:text-7xl text-center font-lucida font-semibold mb-8 text-white"
          data-aos="fade-down"
        >
          Talk With Professors
        </h1>

        <div className="flex space-x-6 overflow-x-auto px-4 py-6 pb-4 " data-aos="fade-right" data-aos-delay={0}>
          {proftalk.map((prof, index) => (
            
              <ProfTalkCard
                key={prof.title}
                image={prof.image}
                link={prof.link}
                date={prof.date}
                title={prof.title}
                excerpt={prof.excerpt}
                professor={prof.professor}
              />
            
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
