import React from "react";
import { assets } from "../assets/frontend_assets/Assets";
import { FaPhoneAlt, FaEnvelope, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Company Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
            repellendus deserunt possimus ullam repellat exercitationem vel
            culpa similique dolore officia voluptate a placeat, maiores minus?
            Non accusantium quidem asperiores reprehenderit!
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li><a href="/" className="hover:text-orange-500">Home</a></li>
            <li><a href="/about" className="hover:text-orange-500">About us</a></li>
            <li><a href="/delivery" className="hover:text-orange-500">Delivery</a></li>
            <li><a href="/newsletter" className="hover:text-orange-500">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2 text-orange-500" aria-label="Phone" /> 
              <a href="tel:+12124567890" className="hover:text-orange-500">+1-212-456-7890</a>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2 text-orange-500" aria-label="Email" />
              <a href="mailto:contact@foreveryou.com" className="hover:text-orange-500">contact@foreveryou.com</a>
            </li>
            <li className="flex items-center">
              <FaGithub className="mr-2 text-orange-500" aria-label="GitHub" />
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">GitHub</a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright © 2024 forever.com - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
