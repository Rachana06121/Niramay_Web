import React, { useState } from 'react';
import oil12 from "../assets/oil12.png";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleAnswer = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  const faqs = [
    { question: "What is cold pressed oil?", answer: "Cold pressed oil is made using a method that doesn't involve high temperatures or chemicals, retaining more nutrients and flavors." },
    { question: "Is cold pressed oil better?", answer: "Cold pressed oils are often considered better due to their higher nutritional value and better flavor compared to refined oils." },
    { question: "Why buy cold pressed oil?", answer: "Cold pressed oils are healthier, have a richer flavor, and are free from harmful chemicals." },
    { question: "Are cold pressed oils good for cooking?", answer: "Yes, cold pressed oils can be used for cooking, but it's best to use them in low to medium heat cooking to retain their nutrients." },
    { question: "Is Cold Pressed Oil Good for Hair?", answer: "Yes, cold pressed oils are excellent for hair care, providing essential nutrients and promoting healthy hair growth." },
  ];

  return (
    <div className="w-full py-16 px-4">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 mb-4 md:ml-20 md:mr-20">
          <h2 className="md:text-5xl text-3xl font-bold py-2 mb-4 text-center md:text-left">FAQ's</h2>
          <p className="md:text-2xl text-lg font-bold py-2 text-center md:text-left">Have questions? We have the answers</p>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b md:text-2xl text-lg">
              <div
                className="flex justify-between font-bold items-center md:text-2xl text-lg cursor-pointer py-2"
                onClick={() => toggleAnswer(index)}
              >
                <div className="flex items-center md:text-2xl text-lg">
                  <span className="mr-2 font-bold">{index + 1}<span></span></span>
                  <span> {faq.question}</span>
                </div>  
                <span className="font-bold">{selectedQuestion === index ? '-' : '+'}</span>
              </div>
              {selectedQuestion === index && <p className="py-2">{faq.answer}</p>}
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/3 p-2 md:ml-20 md:mr-20 ">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="md:text-4xl text-2xl font-bold mb-2">Become a distributor for our range of cooking oil</h3>
            <img src={oil12} alt="Cooking Oil Range" className="mb-4 mx-auto"/>
            <Link
                className="my-2 md:mx-0 mx-auto py-1 "
                to="/about-us"
                target="_top"
              ><button className="bg-[#30b5f3] text-white px-4 py-2 rounded-lg">Contact Us</button>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
