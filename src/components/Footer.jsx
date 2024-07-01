// src/components/Footer.js
import React from "react";
import { CgMail } from "react-icons/cg";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdCall, MdMail } from "react-icons/md";
import payment from "../assets/payment.png";

const Footer = () => {
  return (
    <footer className="bg-[#e2feff] py-8 border-t border-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:ml-16 md:mr-16">
          <div>
            
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:border-b border-black ">Blogs</a></li>
              <li><a href="#" className="hover:border-b border-black">Offers</a></li>
              <li><a href="#" className="hover:border-b border-black">Contact Us</a></li>
              <li><a href="#" className="hover:border-b border-black">Disclaimer</a></li>
              <li><a href="#" className="hover:border-b border-black">Privacy Policy</a></li>
              <li><a href="#" className="hover:border-b border-black">Terms of Service</a></li>
              <li><a href="#" className="hover:border-b border-black">FAQs</a></li>
              <li><a href="#" className="hover:border-b border-black">Seed Supplier</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Policies</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:border-b border-black">Refund Policy</a></li>
              <li><a href="#" className="hover:border-b border-black">Terms and Conditions</a></li>
              <li><a href="#" className="hover:border-b border-black">Shipping Policy</a></li>
              <li><a href="#" className="hover:border-b border-black">Become A Distributor</a></li>
              <li><a href="#" className="hover:border-b border-black">Private Label</a></li>
              <li><a href="#" className="hover:border-b border-black">Best kachi ghani mustard oil in Delhi</a></li>
              <li><a href="#" className="hover:border-b border-black">Best kachi ghani mustard oil in Jaipur</a></li>
              <li><a href="#" className="hover:border-b border-black">Mustard Oil Price Calculator</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <p className="mb-2">Address 1:</p>
            <p className="mb-4">
              B-6, 2nd Floor, Mahalaxmi Nagar, Malviya Nagar, Jaipur- 302017 Landmark: Behind World Trade Park
            </p>
            <p className="mb-2">Address 2:</p>
            <p className="mb-4">
              Khasra no 180-186, Pyariwas, Teh- Nangal Rajawatan, Dist - Dausa, Rajasthan
            </p>
            <p className="mb-2 flex gap-3">
            
                <MdCall size={24}/>
              <a href="tel:+917300483669" className="">+91 7300483669</a>
            </p>
            <p className="flex gap-3">
                <CgMail size={24}/>

              <a href="mailto:care@nayeshamills.com" className="">hello@niramay.com</a>
            </p>
          </div>
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-4">Subscribe to our Newsletter</h2>
          <form className="flex flex-col md:flex-row items-center md:space-x-4">
            <input
              type="email"
              placeholder="Your Email Id"
              className="w-full md:w-auto px-4 py-2 mb-4 md:mb-0 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
            >
              Subscribe
            </button>
          </form>

          <h2 className="text-2xl text-center font-bold mb-4 mt-5">Follow Us On</h2>
            <div className="flex space-x-4 justify-center">
              <a href="https://www.facebook.com" target="_block" className="hover:scale-150 duration-150">
                <FaFacebook size={24}/>
              </a>
              <a href="https://www.instagram.com" target="_block" className="hover:scale-150 duration-150">
                <FaInstagram size={24}/>
              </a>
              <a href="https://www.linkedin.com" target="_block" className="hover:scale-150 duration-150">
                <FaLinkedin size={24}/>
              </a>
              <a href="https://www.twitter.com" target="_block" className="hover:scale-150 duration-150">
                <FaTwitter size={24}/>
              </a>
              <a href="https://www.youtube.com" target="_block" className="hover:scale-150 duration-150">
                <FaYoutube size={24}/>
              </a>
            </div>
        </div>

        
        </div>

        <div>
        <p className="mt-8 border-t  border-gray-700 flex flex-col items-center">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:text-sm text-[11px] ">
          <div className="mt-4 text-center">© 2022, Niramay Oil Mills. Designed, Developed & Marketed by <a href="https://jahunexus.in/" target="_block" className="hover:border-b text-start">Jahu Nexus</a></div>
          <div className="md:w-[300px] md:h-[100px] w-[200px] h-[100px] md:ml-20 ml-10" >
            <img src={payment} alt="payment"/>
        
          </div>
          </div>
        </p>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
