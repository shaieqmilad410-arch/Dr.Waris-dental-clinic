import React from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const DeveloperCredit = () => {
  return (
    <div className="border-t border-gray-200/80 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 sm:flex-row">
        {/* Developer Name */}
        <div className="text-center sm:text-left">
          <p className="text-sm text-gray-500">
            Designed & Developed by{" "}
            <span className="font-semibold text-gray-900">Milad Shaieq</span>
          </p>

          <p className="mt-1 text-xs text-gray-400">Web Developer</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-2">
          {/* WhatsApp */}
          <a
            href="YOUR_WHATSAPP_LINK"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-9 w-9 items-center justify-center rounded-full
                       border border-gray-200 text-gray-500
                       transition-all duration-300
                       hover:-translate-y-1 hover:border-green-500
                       hover:bg-green-500 hover:text-white"
          >
            <FaWhatsapp size={16} />
          </a>

          {/* Facebook */}
          <a
            href="YOUR_FACEBOOK_LINK"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-9 w-9 items-center justify-center rounded-full
                       border border-gray-200 text-gray-500
                       transition-all duration-300
                       hover:-translate-y-1 hover:border-blue-600
                       hover:bg-blue-600 hover:text-white"
          >
            <FaFacebookF size={14} />
          </a>

          {/* Instagram */}
          <a
            href="YOUR_INSTAGRAM_LINK"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full
                       border border-gray-200 text-gray-500
                       transition-all duration-300
                       hover:-translate-y-1 hover:border-pink-500
                       hover:bg-pink-500 hover:text-white"
          >
            <FaInstagram size={16} />
          </a>

          {/* Email */}
          <a
            href="mailto:YOUR_EMAIL@gmail.com"
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full
                       border border-gray-200 text-gray-500
                       transition-all duration-300
                       hover:-translate-y-1 hover:border-red-500
                       hover:bg-red-500 hover:text-white"
          >
            <FaEnvelope size={15} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCredit;
