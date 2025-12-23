"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = ({
  title = "نُوا، روشنای مسیر موفقیت",
  subtitle = "آموزش هوشمند، برنامه‌ریزی دقیق، آینده‌ای روشن",
  desktopImage = "/images/home/about_us/about_us.jpg",
  mobileImage = "/home/about_us/about_us2.jpg",
}) => {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <picture>
        <source media="(max-width: 768px)" srcSet={mobileImage} />
        <Image
          src={desktopImage}
          alt="آکادمی نوا"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </picture>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60  backdrop-blur-sm" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          {title}
        </h1>

        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </motion.div>
    </header>
  );
};

export default HeroSection;
