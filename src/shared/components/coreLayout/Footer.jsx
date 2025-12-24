"use client";

import React from "react";
import { ChevronRight, Instagram, Send } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white w-full p-10 transition-all duration-500 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">درباره ما</h3>
          <p className="text-gray-200 text-sm">
            آکادمی نُوا یک پلتفرم آموزشی مدرن است که دوره‌های تخصصی و رایگان را
            برای علاقه‌مندان به برنامه‌نویسی و تکنولوژی ارائه می‌دهد.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">دسترسی سریع</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li className="flex items-center space-x-2 rtl:space-x-reverse">
              <ChevronRight size={16} className="text-gray-50" />
              <Link href="/contact" className="hover:text-white transition">
                ارتباط با ما
              </Link>
            </li>
            <li className="flex items-center space-x-2 rtl:space-x-reverse">
              <ChevronRight size={16} className="text-gray-50" />
              <Link href="/about" className="hover:text-white transition">
                درباره ما
              </Link>
            </li>
            <li className="flex items-center space-x-2 rtl:space-x-reverse">
              <ChevronRight size={16} className="text-gray-50" />
              <a href="/students" className="hover:text-white transition">
                قبولی‌ها
              </a>
            </li>
            <li className="flex items-center space-x-2 rtl:space-x-reverse">
              <ChevronRight size={16} className="text-gray-50" />
              <a href="/courses" className="hover:text-white transition">
                دوره‌ها
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">تماس با ما</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>
              ایمیل:{" "}
              <a
                href="mailto:info@novawise.com"
                className="hover:text-white transition"
              >
                info@novawise.com
              </a>
            </li>
            <li>
              تلفن:{" "}
              <a
                href="tel:+02433411840"
                className="hover:text-white transition"
              >
                024-33411840
              </a>
            </li>
            <li>آدرس: زنجان، مجتمع تجاری اداری سهند</li>
          </ul>

          <div className="flex gap-2 rtl:space-x-reverse mt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 p-2 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500 text-white shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-300"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 p-2 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-300"
            >
              <Send size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-50" />

      {/* Copyright */}
      <div className="text-center text-gray-100 text-sm">
        © 2025 آکادمی نُوا. تمامی حقوق این سایت محفوظ است.
      </div>
    </footer>
  );
};

export default Footer;
