"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import GradientButton from "@/shared/components/ui/Button";
import { Home, Book, Info, Phone, CheckCircle } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex justify-center items-center w-full transition-all duration-300 z-50
      ${
        isScrolled
          ? "fixed top-0 shadow-xl bg-white/20 backdrop-blur-md"
          : "relative py-2 bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)]"
      }
      px-4`}
    >
      {/* دکمه همبرگر موبایل */}
      <button
        className="flex justify-start md:hidden text-gray-900 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* لوگو */}
      <div className="flex justify-start gap-2 text-white font-bold text-lg">
        <Image
          src="/logo.webp"
          width={100}
          height={100}
          alt="Logo"
          className={`${
            isScrolled ? "h-20 w-20" : "h-32 w-32"
          } transition-all duration-300`}
        />
      </div>

      {/* لینک‌ها دسکتاپ */}
      <div
        className={`hidden md:flex pr-6 gap-8 font-bold ${
          isScrolled ? "text-gray-700" : "text-white"
        }`}
      >
        <Link href="/home" className="hover:underline">
          خانه
        </Link>
        <Link href="#portfolio" className="hover:underline">
          دوره ها
        </Link>
        <Link href="/about" className="hover:underline">
          درباره ما
        </Link>
        <Link href="#contact" className="hover:underline">
          تماس با ما
        </Link>
        <Link href="#success" className="hover:underline">
          قبولی ها
        </Link>
      </div>

      <div className="flex flex-1 justify-end">
        <GradientButton title="ورود / ثبت نام" href="/signup" />
      </div>

      {/* منوی موبایل */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full h-[50vh] bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-white flex justify-center items-center md:hidden">
          {/* container دو ستونه */}
          <div className="flex flex-row gap-4">
            {/* ستون آیکون‌ها */}
            <div className="flex flex-col justify-center items-end gap-9">
              <Home className="w-4 h-4" />
              <Book className="w-4 h-4" />
              <Info className="w-4 h-4" />
              <Phone className="w-4 h-4" />
              <CheckCircle className="w-4 h-4" />
            </div>

            {/* ستون متن‌ها */}
            <div className="flex flex-col justify-center items-start gap-6">
              <Link href="#home" className="hover:underline text-lg">
                خانه
              </Link>
              <Link href="#portfolio" className="hover:underline text-lg">
                دوره ها
              </Link>
              <Link href="#about" className="hover:underline text-lg">
                درباره ما
              </Link>
              <Link href="#contact" className="hover:underline text-lg">
                تماس با ما
              </Link>
              <Link href="#success" className="hover:underline text-lg">
                قبولی ها
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
