"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import GradientButton from "@/shared/components/ui/Button";
import { Home, Book, Info, Phone, CheckCircle } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const hiddenRoutes = ["/auth", "/dashboard", "/admin"];

  if (hiddenRoutes.some((route) => pathname.startsWith(route))) {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "خانه" },
    { href: "/courses", label: "دوره‌ها" },
    { href: "/about", label: "درباره ما" },
    { href: "/contact", label: "تماس با ما" },
    { href: "/students", label: "قبولی‌ها" },
  ];

  return (
    <nav
      className={`flex justify-center items-center w-full transition-all duration-300 z-50
        ${
          isScrolled
            ? "fixed top-0 shadow-xl bg-white/40 backdrop-blur-md"
            : pathname === "/"
            ? "relative py-2 bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)]"
            : "relative py-2 bg-[#EBEAED]"
        }
        px-4`}
    >
      {/* دکمه همبرگر موبایل */}
      <button
        className="flex justify-start md:hidden text-gray-900 cursor-pointer focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
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
            isScrolled ? "h-30 w-30" : "h-32 w-32"
          } transition-all duration-300`}
        />
      </div>

      {/* لینک‌ها دسکتاپ */}
      <div
        className={`hidden md:flex pr-6 gap-8 font-bold ${
          isScrolled
            ? "text-slate-700"
            : pathname === "/"
            ? "text-white"
            : "text-slate-700"
        }`}
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link key={link.href} href={link.href} className="relative group">
              {link.label}
              {/* خط انیمیشن */}
              <span
                className={`
                  absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
                  transition-all duration-300
                  ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                `}
              />
            </Link>
          );
        })}
      </div>

      <div className="flex flex-1 justify-end">
        <GradientButton
          title="ورود / ثبت نام"
          href="/auth"
          gradient="bg-gradient-to-r from-[var(--secondary)] to-[var(--secondary)]"
          textColor="text-[var(--primary)]"
        />
      </div>

      {/* منوی موبایل */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full h-[50vh] bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-white flex justify-center items-center md:hidden">
          <div className="flex flex-row gap-4">
            <div className="flex flex-col justify-center items-end gap-9">
              <Home className="w-4 h-4" />
              <Book className="w-4 h-4" />
              <Info className="w-4 h-4" />
              <Phone className="w-4 h-4" />
              <CheckCircle className="w-4 h-4" />
            </div>

            <div className="flex flex-col justify-center items-start gap-6">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
