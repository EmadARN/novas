"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import GradientButton from "@/shared/components/ui/Button";

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      desktop: "/images/home/banner/bannerD3.jpg",
      mobile: "/images/home/banner/bannerM3.jpg",
    },
    {
      desktop: "/images/home/banner/bannerD2.jpg",
      mobile: "/images/home/banner/bannerM2.jpg",
    },
    {
      desktop: "/images/home/banner/bannerD1.jpg",
      mobile: "/images/home/banner/bannerM1.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-[calc(100vh-4rem)] overflow-hidden rounded-b-2xl">
      {/* اسلایدهای پس‌زمینه */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.desktop}
            alt={`اسلاید ${i + 1}`}
            fill
            priority
            className="hidden md:block object-cover blur-sm"
          />
          <Image
            src={slide.mobile}
            alt={`اسلاید موبایل ${i + 1}`}
            fill
            priority
            className="md:hidden object-cover blur-sm"
          />
        </div>
      ))}

      {/* overlay تیره */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 z-0" />

      {/* محتوا */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            نُوا روشنای راه موفقیت
          </h1>

          <p className="text-base md:text-lg text-white/90 leading-relaxed mb-10">
            با برنامه‌ای هوشمند، کلاس‌های باکیفیت، اساتید مجرب و اهداف مشخص،
            مسیر رسیدن به موفقیت خود را روشن و هموار کنید.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <GradientButton href="/auth" title="شروع یادگیری" />

            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white" />
                <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white" />
                <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white" />
              </div>
              <span className="text-sm text-white/90">+3 هزار دانشجو</span>
            </div>
          </div>
        </div>
      </div>

      {/* اندیکاتورها */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              i === currentSlide ? "w-8 bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
