import React from 'react';
import logo from "../assets/logo.svg";
import mastercard from "../assets/mastercard.png";
import paypal from "../assets/paypal.png";
import visa from "../assets/visa.png";
import westernunion from "../assets/westernunion.png";
import bitcoin from "../assets/bitcoin.png";
import tether from "../assets/Tether_Logo.svg";
import instagram from "../assets/icon-instagram.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" bg-neutral-100 text-center text-black lg:text-left">
      
      <div className="flex-col mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Logo */}
            <div className="mb-4 flex flex-col items-center justify-center font-semibold uppercase md:justify-start">
              <img src={logo} className='logo-black' alt="logo" />
                <a href="https://www.instagram.com/urllset.invest" className="mt-2">
              <img src={instagram} alt="Instagram" className="h-8 w-8 mt-4" />
              </a>
            </div>
      
          {/* Other sections */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Company
            </h6>
            <p className="mb-4">
        <Link to="/legal">Legal & privacy</Link>
      </p>
            
          </div> 
        </div>
      </div>
      
      

      {/* Copyright section */}
      <div className="bg-neutral-100 p-6 text-center">
        <span>© 2024 Copyright:</span>
        <a
          className="font-semibold text-neutral-600"
          href="https://tw-elements.com/"
        > Urllset</a>
      </div>

      {/* Payment icons */}
      <div className="mt-10 flex flex-wrap justify-center overflow-x-auto">
        <img src={mastercard} alt="Mastercard" className="mx-2 h-10 w-10" />
        <img src={paypal} alt="PayPal" className="mx-2 h-10 w-10" />
        <img src={visa} alt="Visa" className="mx-2 h-10 w-10" />
        <img src={westernunion} alt="Western Union" className="mx-2 h-10 w-10" />
        <img src={bitcoin} alt="Bitcoin" className="mx-2 h-10 w-10" />
        <img src={tether} alt="Tether" className="mx-2 h-10 w-10" />
      </div>
    </footer>
  )
}

export default Footer;
