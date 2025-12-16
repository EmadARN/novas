"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { useEffect, useRef, useState } from "react";

const consultants = Array.from({ length: 22 }, (_, i) => ({
  id: i + 1,
  image: `/images/team/${i + 1}.JPG`,
}));

export default function Advisors() {
  const sectionRef = useRef(null);
  const swiperRefs = useRef([]); // ذخیره تمام swiperها
  const [startAutoplay, setStartAutoplay] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStartAutoplay(true);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (startAutoplay) {
      swiperRefs.current.forEach((swiper, idx) => {
        if (swiper) {
          setTimeout(() => swiper.autoplay.start(), idx * 1500); // دومی 1.5 ثانیه دیرتر
        }
      });
    }
  }, [startAutoplay]);

  const half = Math.ceil(consultants.length / 2);
  const firstHalf = consultants.slice(0, half);
  const secondHalf = consultants.slice(half);

  return (
    <div ref={sectionRef} className="max-w-[1200px] w-full mx-auto p-8">
      {/* دسکتاپ / تبلت */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
        {consultants.map((item) => (
          <Card key={item.id} image={item.image} />
        ))}
      </div>

      {/* موبایل */}
      <div className="md:hidden space-y-8">
        {[firstHalf, secondHalf].map((group, idx) => {
          const prevRef = useRef(null);
          const nextRef = useRef(null);

          return (
            <div key={idx} className="relative">
              <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={16}
                slidesPerView={2}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                loop
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                onSwiper={(swiper) => {
                  swiperRefs.current[idx] = swiper;

                  setTimeout(() => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                  });
                }}
              >
                {group.map((item) => (
                  <SwiperSlide key={item.id}>
                    <Card image={item.image} />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* دکمه‌ها */}
              <div
                ref={prevRef}
                className="absolute top-1/2 -left-4 z-10 cursor-pointer bg-white p-2 rounded-full text-purple-500 shadow-md"
              >
                &#10095;
              </div>
              <div
                ref={nextRef}
                className="absolute top-1/2 -right-4 z-10 cursor-pointer bg-white text-purple-500 p-2 rounded-full shadow-md"
              >
                &#10094;
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ================= Card Component =================
function Card({ image }) {
  return (
    <div className="relative w-full pb-[150%] perspective-[1000px] group">
      {/* Shadow */}
      <div
        className="absolute top-[5%] left-[5%] w-[90%] h-[90%] bg-black/50
      shadow-sm transform skew-x-[0.001deg] transition-transform duration-300 ease-in-out group-hover:rotate-x-[7deg] group-hover:-translate-y-[6px] group-hover:scale-[1.05] group-hover:opacity-60"
      />

      {/* Cover */}
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden
        bg-gradient-to-r from-[#f6d365] to-[#fda085]
        transform-style-preserve-3d transform origin-top-center
        skew-x-[0.001deg] transition-transform duration-350 ease-in-out
        group-hover:rotate-x-[7deg] group-hover:-translate-y-[6px]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gloss */}
        <div
          className="absolute top-0 left-0 w-full h-[120%]
          bg-[linear-gradient(226deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.4)_35%,rgba(255,255,255,0.2)_42%,rgba(255,255,255,0)_60%)]
          transform translate-y-[-20%] will-change-transform
          transition-transform duration-[650ms] ease-[cubic-bezier(0.18,0.9,0.58,1)]
          group-hover:translate-y-0"
        />
      </div>
    </div>
  );
}
