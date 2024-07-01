import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import oil12 from "../assets/oil12.png";
import bulb from "../assets/bulb.png";
import cold from "../assets/cold.png";
import raw from "../assets/raw.png";
import sun from "../assets/sun.png";
import quality from "../assets/quality.jpg";
import coldpressed from "../assets/coldpressed.jpg";
import coldpressed1 from "../assets/coldpressed1.jpg";
import seed from "../assets/seed.jpg";
import line from "../assets/line.png";
import amazon from "../assets/amazon.png";
import BigBasket from "../assets/BigBasket.png";
import Flipkart from "../assets/Flipkart.png";

import FAQ from "../components/FAQ";
import BlogCarousel from "../components/BlogCarousel";
import TestimonialCarousel from "../components/TestimonialCarousel";

function Home() {
  let slide = [];

  return (
    <div className="pt-24">
      <div className="w-full py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className="w-[500px] mx-auto my-4" src={oil12} alt="/" />
          <div className="flex flex-col justify-center items-center">
            <h3 className="md:text-4xl sm:text-2xl font-bold py-2 text-center">
              Choose Higher Energy, Stronger Immunity, More Nutrients.
            </h3>
            <h1 className="md:text-5xl text-2xl font-bold py-2 text-center">
              Choose Iriola Cold-Pressed Oil!
            </h1>

            <Link
              className="my-2 md:mx-0 mx-auto py-1 "
              to="/products"
              target="_top"
            >
              <button className="bg-[#30b5f3] text-white w-[200px] text-lg rounded-lg font-bold my-6 md:mx-0 mx-auto py-3">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <br></br>

      <div>
        <div>
          <h1 className="md:text-5xl text-2xl font-bold py-2 text-center">
            Our Products
          </h1>
          <img
            className="md:w-[400px] w-[200px] justify-center mx-auto my-2"
            src={line}
            alt="line"
          />
        </div>

        <div className="w-full  py-16 px-4">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2  ">
            <div className="flex flex-col justify-center items-center">
              <h1 className="md:text-5xl text-2xl font-bold py-2 text-center">
                Mustard Oil
              </h1>
              <img className="w-[400px] mx-auto my-4" src={oil12} alt="/" />
              <Link
                className="my-2 md:mx-0 mx-auto py-1 "
                to="/products"
                target="_top"
              >
                <button className="bg-[#30b5f3] text-white w-[200px] text-lg rounded-lg font-bold my-6 md:mx-0 mx-auto py-3">
                  Shop Now
                </button>
              </Link>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h1 className="md:text-5xl text-2xl font-bold py-2 text-center">
                Cold-Pressed Oil
              </h1>
              <img className="w-[400px] mx-auto my-4" src={oil12} alt="/" />
              <Link
                className="my-2 md:mx-0 mx-auto py-1 "
                to="/products"
                target="_top"
              >
                <button className="bg-[#30b5f3] text-white w-[200px] text-lg rounded-lg font-bold my-6 md:mx-0 mx-auto py-3">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------------------------- */}

      <div className="md:mt-4">
        <div>
          <h1 className="md:text-5xl text-2xl font-bold py-2 text-center">
            Edible Oil
          </h1>
          <img
            className="md:w-[400px] w-[200px] justify-center mx-auto my-2"
            src={line}
            alt="line"
          />
          <p className="md:text-2xl text-center md:ml-44 md:mr-44 m-5 text-lg font-bold py-2">
            Oil Mills offers a range of premium cold pressed oils that bring the
            purity of seeds directly from the farms to your kitchen. Iriola cold
            pressed oil is traditionally extracted from the first press of
            seeds, ensuring its purity and retention of natural properties.
            Known for their natural aroma, these oils enhance your dishes with
            authentic Indian flavors. Ideal for those seeking the benefits of
            online cold pressed oil and the taste of traditional Indian cooking.
            It is a perfect addition to your kitchen.
          </p>

          <div className="flex flex-col justify-center items-center">
            <Link
              className="my-2 md:mx-0 mx-auto py-1 "
              to="/about-us"
              target="_top"
            >
              <button className="bg-[#30b5f3] text-white w-[200px] text-lg rounded-lg font-bold my-6 md:mx-0 mx-auto py-3">
                About Us
              </button>
            </Link>
            <img className="w-[400px] mx-auto my-4" src={oil12} alt="/" />
          </div>
        </div>
      </div>
      <br></br>
      {/* ---------------------------------------------------------------------------------------------------------------------- */}

      <div>
        <div className="w-full  py-16 px-4">
          <h1 className="md:text-5xl text-2xl font-bold py-2 text-center">
            WHAT MAKES US DIFFERENT ?
          </h1>
          <img
            className="md:w-[400px] w-[200px] justify-center mx-auto my-2"
            src={line}
            alt="line"
          />

          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className="w-[500px] mx-auto my-4 mt-10" src={oil12} alt="/" />
            <div className="flex flex-col justify-center items-center">
              <div className="flex gap-4 md:m-2">
                <div>
                  <img
                    src={quality}
                    className="w-[100px] hidden md:block flex-[20%] "
                    alt=""
                  />
                </div>
                <div className="flex-[80%]">
                  <h1 className="md:text-2xl text-lg font-bold py-2 text-center md:text-left">
                    QUALITY CHECKS
                  </h1>
                  <p className="text-center md:text-left">
                    Multiple lab tests to ensure that all our products are 100%
                    pure & natural and free from of all type of adultaration
                  </p>
                </div>
              </div>
              <div className="flex gap-4 md:m-2 ">
                <div>
                  <img
                    src={bulb}
                    className="w-[100px] hidden md:block flex-[20%]"
                    alt=""
                  />
                </div>
                <div className="flex-[80%]">
                  <h1 className="md:text-2xl text-lg font-bold py-2 text-center md:text-left">
                    MINDFULNESS
                  </h1>
                  <p className="text-center md:text-left">
                    We produces our oils in small batches so that ultmost purity
                    and quantity maintaned
                  </p>
                </div>
              </div>

              <div className="flex gap-4 md:m-2">
                <div>
                  <img
                    src={raw}
                    className="w-[100px] hidden md:block flex-[20%]"
                    alt=""
                  />
                </div>
                <div className="flex-[80%]">
                  <h1 className="md:text-2xl text-lg font-bold py-2 text-center md:text-left">
                    HIGH-QUALITY RAW MATERIAL
                  </h1>
                  <p className="text-center md:text-left">
                    We use high-quality raw material cultivated naturally in
                    local farms under natural conditions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 md:m-2">
                <div>
                  <img
                    src={cold}
                    className="w-[100px] hidden md:block flex-[20%]"
                    alt=""
                  />
                </div>
                <div className="flex-[80%]">
                  <h1 className="md:text-2xl text-lg font-bold py-2 text-center md:text-left">
                    COLD-PRESSED METHOD
                  </h1>
                  <p className="text-center md:text-left">
                    Our oils are extracted in a clean mill using traditional
                    wood-press methods at low RPM.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  py-16 px-4">
        <h1 className="md:text-5xl text-2xl font-bold py-2 text-center">
          Our Process
        </h1>
        <img
          className="md:w-[400px] w-[200px] justify-center mx-auto my-2"
          src={line}
          alt="line"
        />

        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <div className="flex flex-col justify-center mx-4 mb-3 mt-1 order-2 md:order-1">
            <div className="flex flex-col justify-center items-center">
              <div className="flex gap-4 md:m-2">
                <div>
                  <img
                    src={seed}
                    className="w-[70px] hidden md:block flex-[20%] "
                    alt=""
                  />
                </div>
                <div className="flex-[80%]">
                  <p className="text-center md:text-left mt-4 text-2xl">
                    Seeds Procured directly from farmer
                  </p>
                </div>
              </div>

              <div className="flex gap-4 md:m-2">
                <div className="flex-[80%]">
                  <p className="text-center md:text-left mt-4 text-2xl">
                    sun-dried for moisture removal
                  </p>
                </div>
                <div>
                  <img
                    src={sun}
                    className="w-[70px] hidden md:block flex-[20%] "
                    alt=""
                  />
                </div>
              </div>

              <div className="flex gap-4 md:m-2">
                <div>
                  <img
                    src={coldpressed}
                    className="w-[70px] hidden md:block flex-[20%] "
                    alt=""
                  />
                </div>
                <div className="flex-[80%]">
                  <p className="text-center md:text-left mt-4 text-2xl">
                    Extracted in traditional Cold Pressed Oil
                  </p>
                </div>
              </div>

              <div className="flex gap-4 md:m-2">
                <div className="flex-[80%]">
                  <p className="text-center md:text-left mt-4 text-2xl">
                    Single Pressed to retain all Nutrients
                  </p>
                </div>
                <div>
                  <img
                    src={coldpressed1}
                    className="w-[70px] hidden md:block flex-[20%] "
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 mt-5">
            <img
              className="w-[500px] md:h-[350px] lg:[350px] p-1 mx-auto my-4 rounded-md"
              src={oil12}
              alt="/"
            />
          </div>
        </div>
      </div>

      <div className="w-full  py-16 px-4">
        <img
          className="md:w-[400px] w-[200px] justify-center mx-auto my-2"
          src={line}
          alt="line"
        />

        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <div className="flex flex-col justify-center mx-4 mb-3 mt-1 order-2 md:order-1">
            <div className="flex flex-col justify-center items-center">
              <div className="flex gap-4 md:m-2">
                <div className="flex-[80%]">
                  <p className="text-center md:text-left mt-4 text-2xl md:text-5xl font-bold py-2 text-[#0f3449]">
                    The goodness of health available in various sizes!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 mt-5">
            <img
              className="w-[500px] md:h-[350px] lg:[350px] p-1 mx-auto my-4 rounded-md"
              src={oil12}
              alt="/"
            />
          </div>
        </div>
      </div>

      <div className="w-full  py-16 px-4">
        <img
          className="md:w-[400px] w-[200px] justify-center mx-auto my-2"
          src={line}
          alt="line"
        />
        <FAQ />
      </div>

      <div className="w-full">
        <BlogCarousel />
      </div>

      <div className="w-full  py-16 px-4">
        <TestimonialCarousel />
      </div>

      <div className="w-full  py-16 px-4">
        <h1 className="md:text-4xl text-2xl font-bold text-center">
        We are available on
        </h1>
        <img
          className="md:w-[400px] w-[200px] justify-center mx-auto my-2 mb-5"
          src={line}
          alt="line"
        />

<div className="max-w-[1240px] mx-auto grid md:grid-cols-3">
          <div className="order-1">
            <img
              className="w-[200px] md:h-[150px] lg:[150px] p-1 mx-auto my-4 rounded-md hover:scale-110 duration-150"
              src={amazon}
              alt="/"
            />
          </div>
          <div className="order-2">
            <img
              className="w-[200px] md:h-[150px] lg:[150px] p-1 mx-auto my-4 rounded-md hover:scale-110 duration-150"
              src={Flipkart}
              alt="/"
            />
          </div>
          <div className="order-3">
            <img
              className="w-[200px] md:h-[150px] lg:[150px] p-1 mx-auto my-4 rounded-md hover:scale-110 duration-150"
              src={BigBasket}
              alt="/"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
