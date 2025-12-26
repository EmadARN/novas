"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import SectionTitle from "@/shared/components/ui/Tiltes";

export default function StudentsPage() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const students = Array.from({ length: 14 }, (_, i) => ({
    id: i + 1,
    name: "",
    img: `/images/stdn/${i + 1}.png`,
  }));

  return (
    <>
      <div
        className="w-full"
        style={{
          background:
            "linear-gradient(to bottom, #EBEAED, var(--primary), var(--accent))",
        }}
      >
        <div className="text-white py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">قبولی ها</h1>
          </div>
        </div>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-[var(--secondary)] to-[var(--secondary)] rounded-b-xl py-24">
        <SectionTitle title="بخشی از قبولی‌های نُوا" />

        <div className="max-w-6xl w-full mx-auto">
          {/* Swiper اصلی */}
          <Swiper
            loop
            spaceBetween={10}
            navigation
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="rounded-2xl overflow-hidden w-full h-[80%]"
            style={{
              "--swiper-navigation-color": "#c084fc",
              "--swiper-pagination-color": "#a855f7",
            }}
          >
            {students.map((student) => (
              <SwiperSlide key={student.id}>
                <div className="relative w-full h-[300px] sm:h-[500px] bg-white/10 rounded-2xl border border-white/20 overflow-hidden">
                  <Image
                    src={student.img}
                    alt={student.name || `Student ${student.id}`}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnails */}
          <Swiper
            onSwiper={setThumbsSwiper}
            loop
            spaceBetween={10}
            slidesPerView={5}
            freeMode
            watchSlidesProgress
            modules={[FreeMode, Navigation, Thumbs]}
            className="mt-2 sm:mt-4 h-[20%]"
            breakpoints={{
              1024: { slidesPerView: 5 },
              768: { slidesPerView: 4 },
              0: { slidesPerView: 3 },
            }}
          >
            {students.map((student) => (
              <SwiperSlide
                key={student.id}
                className="border border-white/20 rounded-xl overflow-hidden"
              >
                <div className="relative w-full h-24 sm:h-32 bg-white/5 overflow-hidden transition-all duration-300 cursor-pointer select-none">
                  <Image
                    src={student.img}
                    alt={student.name || `Student ${student.id}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Border و scale اسلاید فعال */}
        <style jsx global>{`
          .swiper-slide-thumb-active {
            border: 2px solid #a855f7 !important;
            border-radius: 0.75rem; /* همان rounded-xl */
            transform: scale(1.05);
          }
        `}</style>
      </div>
    </>
  );
}
