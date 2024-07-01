import React from "react";
import "./AboutUs.css";
import line from "../assets/line.png";
import oil12 from "../assets/oil12.png";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";

function AboutUs() {
  return (
    <div className="pt-24">
      <div>
        <h1 className="md:text-5xl text-2xl font-bold py-2 text-center">
          About Us
        </h1>
        <img
          className="md:w-[400px] w-[200px] justify-center mx-auto my-2"
          src={line}
          alt="line"
        />
      </div>
      <div className="w-full bg-white py-9 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            className="w-[500px] mx-auto my-4 rounded-md"
            src={oil12}
            alt="/"
          />
          <div className="flex flex-col justify-center">
            <p className=" text-sm md:text-lg ">
              Ever since our founding, we are committed to delivering “healthier
              and happier living” through our products and we are aware of the
              goodness nature holds for healthy living. We believe in extracting
              oils without harming the environment and our planet and to achieve
              this, we have perfected the technique to extract oil from the
              seeds without the use of chemicals or heat treatment. We use
              wooden churners to extract the oil at low temperature so that all
              the micronutrients of the oils are intact. Our aim is to promote a
              healthy lifestyle by ensuring that our consumers understand the
              benefits of consuming unadulterated edible oils.
            </p>
          </div>
        </div>
      </div>

      
      <div className="w-full bg-white py-9 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            className="w-[400px] mx-auto my-4 rounded-md"
            src={oil12}
            alt="/"
          />
          <div className="flex flex-col justify-center">
          <div>
        <h1 className="md:text-3xl text-2xl font-bold py-2 text-center">
          Quality Assurance
        </h1>
        <img
          className="md:w-[300px] w-[100px] justify-center mx-auto my-2"
          src={line}
          alt="line"
        />
      </div>
            <p className=" text-sm md:text-lg text-center ">
              Being a sustainable business, the quality of our oils is our top
              priority and we leave no stone unturned in manufacturing process
              to ensure that our customers get high quality, pure and
              unadulterated cooking oils. All our oils comply stringent food &
              safety standards laid by FSSAI, we are committed to provide
              healthiest of edible oils to our consumers.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="md:text-5xl text-2xl font-bold py-2 text-center">
          About Us
        </h1>
        <img
          className="md:w-[400px] w-[200px] justify-center mx-auto my-2"
          src={line}
          alt="line"
        />
      </div>
      <div className="w-full bg-white py-9 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3">
          <div className="text-center text-lg m-5">
          <img
            className="w-[500px] mx-auto my-4 rounded-2xl"
            src={about1}
            alt="/"
          />
          <p>Our aim to provide easy access to pure, natural, healthy andunadulterated edible oils to our consumers</p>
          </div>
          <div className="text-center text-lg m-5">
          <img
            className="w-[500px] mx-auto my-4 rounded-2xl"
            src={about2}
            alt="/"
          />
          <p>Our cooking oils are processed using traditionally wood-pressed method wherein no heat is generated, meaning health in every drop.</p>
          </div>
          <div className="text-center text-lg m-5">
          <img
            className="w-[500px] mx-auto my-4 rounded-2xl"
            src={about3}
            alt="/"
          />
          <p>We test oil samples to check the quality of our oils and ensure that various food safety standard are met before shipping the products.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AboutUs;
