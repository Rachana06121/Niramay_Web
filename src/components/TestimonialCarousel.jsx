import React, { useState, useEffect } from 'react';
import line from "../assets/line.png";
import profile from "../assets/profile.jpg";
import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Rajat Tambi",
      image: profile,
      rating: 5,
      text: "I found out Iriola randomly when I was searching for wood-pressed oils and I decided to give it a try. The oil has such a nice texture and does not have any foul smell, and it is exactly what I was searching for. However, shipping can be improved but apart from it, this is a fantastic product."
    },
    {
      name: "Devansh Gupta",
      image: profile1,
      rating: 4,
      text: "I recently switched to wood pressed oils from refined oils owing to some health issues. I have been using this for three months now and I can see the taste and aroma of this oil is totally natural. It is a value for money product!"
    },
    {
      name: "Anshul Khandelwal",
      image: profile2,
      rating: 5,
      text: "This is the first time that I have bought a bottle of wood-press oil and I am super happy with the purchase. It is definitely a lot better than all the refined oils in the market. Will definitely buy the oil again."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const previousSlide = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="md:text-5xl text-2xl font-bold text-center">
      Testimonial
      </h1>
      <img
        className="md:w-[400px] w-[200px] justify-center mx-auto my-2 mb-5"
        src={line}
        alt="line"
      />
      <div className="relative flex items-center justify-center md:ml-20 md:mr-20">
        <button onClick={previousSlide} className="absolute left-0 text-2xl font-bold p-2">&#8249;</button>
        <div className="flex flex-col md:flex-row items-center justify-between bg-[#93d7f6] rounded-lg shadow-md overflow-hidden mx-4 md:ml-10 md:mr-10">
          <div className="flex flex-col items-center justify-center p-4 w-full">
            <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-24 h-24 rounded-full mb-4"/>
            <div className="flex items-center mb-4">
              {Array(testimonials[currentIndex].rating).fill().map((_, i) => (
                <span key={i} className="text-yellow-500 text-xl">★</span>
              ))}
            </div>
            <p className="text-center md:text-2xl text-lg mb-4">{testimonials[currentIndex].text}</p>
            <p className="font-bold">{testimonials[currentIndex].name}</p>
          </div>
        </div>
        <button onClick={nextSlide} className="absolute right-0 text-2xl font-bold p-2">&#8250;</button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
