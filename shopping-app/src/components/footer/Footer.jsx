import React from 'react'

const Footer = () => {
  return (
    <div className="flex bg-black bottom-0 left-0 h-60 relative p-4 border-t-2 border-t-white gap-x-14 space-x-12 text-sm ">
      <div className=" flex-row space-x-4 gap-14 cursor-pointer text-start">
        <h4 className="text-xs mx-5 text-gray-300">ABOUT</h4>
        <p>Contact Us</p>
        <p>About Us</p>
        <p>Careers</p>
        <p>Our Stories</p>
        <p>Press</p>
        <p>Corporate information</p>
      </div>
      <div className="flex-row">
        <h4 className="text-xs text-gray-300 "> GROUP COMPANIES</h4>
        <p>Buhahaha</p>
        <p>Rameshwaram </p>
        <p>Avunu</p>
      </div>
      <div className="flex-col">
        <h4 className="text-xs text-gray-300 ">HELP</h4>
        <p>Payments</p>
        <p>Shipping</p>
        <p>Cancellations and Returns</p>
        <p>FAQ</p>
      </div>

      <div className="flex-row">
        <h4 className="text-xs text-gray-300">CANCELLATION POLICY</h4>
        <p>Cancellations & Returns</p>
        <p>Terms of use</p>
        <p>Security</p>
        <p>Privacy</p>
        <p>Sitemap</p>
        <p> Grivience Redressal</p>
        <p>EPR compliance</p>
      </div>

      <div className="flex-row">
        <h4 className="text-xs text-gray-300">MAIL US</h4>
        <p>vivek@vivek.com</p>
        <p>DLF, Gachibowli, </p>
        <p>Gachibowli Village</p>
        <p>Hyderabad</p>
        <p>Telangana, India</p>
      </div>

      <div className="flex-col">
        <h4 className="text-xs text-gray-300">REGISTERED OFFICE ADDRESS</h4>
        <p>Have to set up an office </p>
      </div>
    </div>
  );
}

export default Footer