"use client";
import Image from "next/image";

import { FaArrowUp, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-500 text-white py-8">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Section */}
          <div>
            <h3 className="font-bold mb-4 uppercase">Company</h3>
            <ul>
              <li className="mb-2 hover:underline">
                <a href="#">About Us</a>
              </li>
              <li className="mb-2 hover:underline">
                <a href="#">Contact Us</a>
              </li>
              <li className="mb-2 hover:underline">
                <a href="#">Careers</a>
              </li>
              <li className="mb-2 hover:underline">
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          {/* Customer Support Section */}
          <div>
            <h3 className="font-bold mb-4 uppercase">Customer Support</h3>
            <ul>
              <li className="mb-2 hover:underline">
                <a href="#">FAQs</a>
              </li>
              <li className="mb-2 hover:underline">
                <a href="#">Shipping Policy</a>
              </li>
              <li className="mb-2 hover:underline">
                <a href="#">Return & Refund</a>
              </li>
              <li className="mb-2 hover:underline">
                <a href="#">Track Order</a>
              </li>
              <li className="mb-2 hover:underline">
                <a href="#">Support</a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-bold mb-4 uppercase">Quick Links</h3>
            <ul>
              <li className="mb-2 hover:underline">
                <a href="#">Special Offers</a>
              </li>
              <li className="mb-2 hover:underline">
                <a href="#">New Arrivals</a>
              </li>
              <li className="mb-2 hover:underline">
                <a href="#">Categories</a>
              </li>
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="font-bold mb-4 uppercase">Products</h3>
            <ul>
              <li className="mb-2 hover:underline">
                <a href="#">Books</a>
              </li>
              <li className="mb-2 hover:underline">
                <a href="#">Electronics</a>
              </li>
              <li className="mb-2 hover:underline">
                <a href="#">Groceries & Foods</a>
              </li>
              <li className="mb-2 hover:underline">
                <a href="#">Clothing</a>
              </li>
              <li className="mb-2 hover:underline">
                <a href="#">Offers</a>
              </li>
              <li className="mb-2 hover:underline">
                <a href="#">Others</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Icons */}
        <div className="mt-8 flex flex-wrap justify-center items-center space-x-2">
          <span className="text-sm">Pay With</span>
          <Image
            src="https://www.khaasfood.com/wp-content/uploads/2022/12/SSL-Commerz-Pay-With-logo-All-Size-03-scaled.webp"
            alt="Profile picture"
            width={1200} // Original width of the image
            height={300} // Original height of the image
          />
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm">
            &copy; 2025 Sunnah Store. All Rights Reserved.
          </div>
          <form className="flex mt-4 md:mt-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <button className="bg-white text-green-500 px-4 py-2 rounded-r-lg hover:bg-gray-100">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Scroll to Top */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-white text-green-500 p-2 rounded-full shadow-md hover:bg-gray-100">
          <FaArrowUp size={20} />
        </button>
      </div>

      {/* Social Media Links */}
      <div className="mt-8 flex justify-center space-x-4">
        <a href="#" className="text-white hover:text-gray-300">
          <FaFacebook size={20} />
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          <FaInstagram size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
