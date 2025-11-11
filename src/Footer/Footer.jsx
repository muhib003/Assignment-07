import { Facebook, Linkedin, Mail, X } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-5 gap-7 py-20 text-center">
        <div className="space-y-6">
          <h2 className="font-bold text-2xl text-white">CS — Ticket System</h2>
          <p className="text-[#a1a1aa] text-base">
            CS — Ticket System - the ticketing platform that supports your team,
            so they can support your customers. Say goodbye to complicated and
            embrace a new era of seamless, efficient, and customer-centric
            support with Odoo.
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="font-medium text-xl text-white">Company</h3>
          <ul className="text-[#a1a1aa] text-base space-y-3">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Saled</li>
          </ul>
        </div>
        <div className="space-y-6">
          <h3 className="font-medium text-xl text-white">Services</h3>
          <ul className="text-[#a1a1aa] text-base space-y-3">
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>
        <div className="space-y-6">
          <h3 className="font-medium text-xl text-white">Information</h3>
          <ul className="text-[#a1a1aa] text-base space-y-3">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>
        <div className="space-y-6">
          <h3 className="font-medium text-xl text-white">Social Links</h3>
          <ul className="text-[#a1a1aa] text-base space-y-3 flex flex-col items-center">
            <li className="flex">
              <X />
              @CS — Ticket System
            </li>
            <li className="flex gap-1">
              <Linkedin />
              @CS — Ticket System
            </li>
            <li className="flex">
              <Facebook />
              @CS — Ticket System
            </li>

            <li className="flex gap-1">
              <Mail />
              support@cst.com
            </li>
          </ul>
        </div>
      </div>
      <p className="text-white text-center pb-7">
        © 2025 CS — Ticket System. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
