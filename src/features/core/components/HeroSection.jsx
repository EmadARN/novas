"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["0rem", "2rem"]
  );
  const boxShadow = useTransform(
    scrollYProgress,
    [0, 0.2],
    [
      "0 24px 43px rgba(0,0,0,0.2), 0 20px 17px rgba(0,0,0,0.2)",
      "0 0px 0px rgba(0,0,0,0.3), 0 0px 0px rgba(0,0,0,0.16)",
    ]
  );

  return (
    <motion.main
      className="w-full relative overflow-hidden px-4 sm:px-8 md:px-16 min-h-[90vh] md:min-h-[80vh] text-white"
      style={{
        background:
          "linear-gradient(to bottom right, var(--primary), var(--accent))",
        scale: scale,
        borderRadius: borderRadius,
        boxShadow: boxShadow,
      }}
    >
      {/* محتوای اصلی */}
      <div className="max-w-lg mt-12 md:mt-20 relative z-10">
        <h1 className="text-xl md:text-5xl mb-4 font-bold">
          نُوا روشنای راه موفقیت
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
          با برنامه‌ای هوشمند، کلاس‌های باکیفیت، اساتید مجرب و اهداف مشخص، مسیر
          رسیدن به موفقیت خود را روشن و هموار کنید.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#see-more"
            className="bg-white text-purple-800 px-8 py-3 rounded font-medium hover:bg-gray-100 text-center"
          >
            دوره ها{" "}
          </a>
          <a
            href="#try-now"
            className="border-2 border-white text-white px-8 py-3 rounded font-medium hover:bg-white hover:text-purple-800 text-center"
          >
            همین حالا ثبت نام کن{" "}
          </a>
        </div>
      </div>

      {/* موج‌ها */}
      <div
        className="absolute left-[30%] bottom-[-4%] md:left-[-5%] md:bottom-[-55%] w-[215px] h-[215px] md:w-[800px] md:h-[800px] border-[2px] border-violet-500 border-opacity-10 rounded-[40%]"
        style={{ animation: "spin 20s linear infinite" }}
      ></div>
      <div
        className="absolute left-[16%] bottom-[-6%] md:left-[-5%] md:bottom-[-55%] w-[250px] h-[250px] md:w-[700px] md:h-[700px] border-[2px] border-violet-500 border-opacity-20 rounded-[40%]"
        style={{ animation: "spin 17s linear infinite" }}
      ></div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </motion.main>
  );
}
