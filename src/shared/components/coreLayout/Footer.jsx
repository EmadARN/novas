"use client";

import React from "react";
import { ChevronRight, Instagram, Send } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  const hiddenRoutes = ["/auth", "/dashboard", "/admin"];

  if (hiddenRoutes.some((route) => pathname.startsWith(route))) {
    return null;
  }

  return (
    <footer className="text-white w-full p-10 transition-all duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About */}
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
              <ChevronRight size={16} />
              <Link href="/contact">ارتباط با ما</Link>
            </li>
            <li className="flex items-center space-x-2 rtl:space-x-reverse">
              <ChevronRight size={16} />
              <Link href="/about">درباره ما</Link>
            </li>
            <li className="flex items-center space-x-2 rtl:space-x-reverse">
              <ChevronRight size={16} />
              <Link href="/students">قبولی‌ها</Link>
            </li>
            <li className="flex items-center space-x-2 rtl:space-x-reverse">
              <ChevronRight size={16} />
              <Link href="/courses">دوره‌ها</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">تماس با ما</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>
              ایمیل:{" "}
              <a href="mailto:info@novawise.com" className="hover:text-white">
                info@novawise.com
              </a>
            </li>
            <li>
              تلفن:{" "}
              <a href="tel:+02433411840" className="hover:text-white">
                024-33411840
              </a>
            </li>
            <li>آدرس: زنجان، مجتمع تجاری اداری سهند</li>
          </ul>

          <div className="flex gap-3 mt-4">
            <a className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500 hover:scale-110 transition">
              <Instagram size={18} />
            </a>
            <a className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 hover:scale-110 transition">
              <Send size={18} />
            </a>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-50" />

      <div className="text-center text-gray-100 text-sm">
        © 2025 آکادمی نُوا. تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
};

export default Footer;
