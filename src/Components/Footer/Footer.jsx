import React from "react";

const Footer = () => {
  return (
    <footer className="text-zinc-900 bg-gray-200 font-semibold mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4 sm:grid-cols-2">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">ShopEase</h2>
          <p className="text-sm">
            Your one-stop destination for quality products at the best prices.
            Shop smart, shop easy.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-zinc-900 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-gray-600 cursor-pointer">Home</li>
            <li className="hover:text-gray-600 cursor-pointer">Products</li>
            <li className="hover:text-gray-600 cursor-pointer">Categories</li>
            <li className="hover:text-gray-600 cursor-pointer">Offers</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-zinc-800 mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-gray-600 cursor-pointer">Contact Us</li>
            <li className="hover:text-gray-600 cursor-pointer">Shipping Policy</li>
            <li className="hover:text-gray-600 cursor6pointer">Return Policy</li>
            <li className="hover:text-gray-600 cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-zinc-900 mb-4">Contact</h3>
          <p className="text-sm mb-2">Email: support@shopease.com</p>
          <p className="text-sm mb-2">Phone: +91 98765 43210</p>
          <p className="text-sm">Location: India</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-zinc-700 text-center py-4 text-sm">
        © 2026 ShopEase. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;