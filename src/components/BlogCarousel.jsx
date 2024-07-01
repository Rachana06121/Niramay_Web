import React, { useState, useEffect } from "react";
import oil12 from "../assets/oil12.png";
import oil1 from "../assets/oil1.png";
import oil5 from "../assets/oil5.png";
import oil6 from "../assets/oil6.png";
import oil7 from "../assets/oil7.png";
import line from "../assets/line.png";

const BlogCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const blogs = [
    {
      title: "Choosing the Healthier Oil: Groundnut Oil Vs Sunflower Oil",
      description:
        "Cooking oils are an essential part of our daily meals. But with so many options like groundnut, sunflower, olive, rice bran, mustard, and more - how do you choose a...",
      image: oil5,
    },
    {
      title: "Benefits of Cold Pressed Oils for Cooking and Health",
      description:
        "Cold pressed oils retain more nutrients and have a richer flavor compared to refined oils. Learn about the various benefits of using cold pressed oils in your diet...",
      image: oil1,
    },
    {
      title: "Benefits of Cold Pressed Oils for Cooking and Health",
      description:
        "Cold pressed oils retain more nutrients and have a richer flavor compared to refined oils. Learn about the various benefits of using cold pressed oils in your diet...",
      image: oil6,
    },
    {
      title: "Benefits of Cold Pressed Oils for Cooking and Health",
      description:
        "Cold pressed oils retain more nutrients and have a richer flavor compared to refined oils. Learn about the various benefits of using cold pressed oils in your diet...",
      image: oil7,
    },
    // Add more blog entries as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const previousSlide = () => {
    const index = currentIndex === 0 ? blogs.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === blogs.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className="container mx-auto md:p-20">
      <h1 className="md:text-5xl text-3xl font-bold text-center">
        Our Blogs
      </h1>
      <img
        className="md:w-[400px] w-[200px] justify-center mx-auto my-2 mb-5"
        src={line}
        alt="line"
      />
      <div className="flex items-center justify-center space-x-4">
        <button onClick={previousSlide} className="text-2xl font-bold p-2">
          &#8249;
        </button>
        <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={blogs[currentIndex].image}
            alt={blogs[currentIndex].title}
            className="w-[300px] md:w-1/2 h-[300px] object-cover"
          />
          <div className="p-4 w-full md:w-1/2">
            <h3 className="text-center md:text-left mt-4 text-2xl md:text-3xl font-bold py-2">
              {blogs[currentIndex].title}
            </h3>
            <p className="text-center md:text-left mt-4 text-xl md:text-2xl py-2">
              {blogs[currentIndex].description}
            </p>
            <button className="bg-[#30b5f3] text-white px-4 py-2 rounded-lg">
              READ MORE
            </button>
          </div>
        </div>
        <button onClick={nextSlide} className="text-2xl font-bold p-2">
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default BlogCarousel;
