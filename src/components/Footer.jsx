import React from "react";
import Logo from "./Logo";
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import Brands from '../assets/Brands.png'

const Footer = () => {
  return (
    <footer className="bg-[#BCDDFE] h-[626px] text-gray-700">
      <section className="flex justify-around pt-20 px-15 pb-10">
        <div className="about w-[220px]">
          <h2 className="flex items-center gap-5 text-xl font-bold text-blue-600 mb-3"> <Logo/> <span>E-Comm</span></h2>
          <p className="text-sm leading-relaxed mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti reiciendis, libero, nostrum cum minus repellat aspernatur doloremque corrupti nemo hic magnam possimus eius ducimus, error modi harum repudiandae vitae sint.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        <div className="followUs w-[197px]">
          <h3 className="font-semibold text-xl mb-5">Follow Us</h3>
          <p className="text-sm">Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
          <div className="flex gap-10 mt-4"> <img src={facebook} alt="" /> <img src={twitter} alt="" /></div>
        </div>
        
        <div className="contactUs w-[148px]">
          <h3 className="font-semibold mb-5 text-xl">Contact Us</h3>
          <p className="text-sm">
            E-Comm, 4578 Marmora Road,<br />
            Glasgow D04 89GR
          </p>
        </div>
      </section>

      <section className="flex justify-center gap-52">

        <div className="information">
          <h3 className="font-semibold mb-3">Information</h3>
          <ul className="text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Information</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>

       
        <div className="service">
          <h3 className="font-semibold mb-3">Service</h3>
          <ul className="text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Information</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="myAccount">
          <h3 className="font-semibold mb-3">My Account</h3>
          <ul className="text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Information</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          </ul>

        </div>

        <div className="ourOffer">
          <h3 className="font-semibold mb-3">Our Offer</h3>
          <ul className="text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Information</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          </ul>

        </div>
       
      </section>
      

      {/* Bottom Section */}
      <div className="border-t  border-gray-100 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className=" text-[#C1C8CE]"> © 2018 Ecommerce theme by www.bisenbaev.com</p>
          <img src={Brands} alt="Visa" className="h-6" />

        </div>
      </div>
    </footer>
  );
};

export default Footer;
