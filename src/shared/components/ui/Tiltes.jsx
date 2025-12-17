"use client";

import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle, align = "center" }) {
  return (
    <div
      className={`w-full flex flex-col items-${
        align === "center" ? "center" : "start"
      } mb-12`}
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="
          font-extrabold text-[#8a6aed]
          text-2xl
          sm:text-3xl
          md:text-4xl
          leading-tight
          text-center
        "
      >
        {title}
      </motion.h2>

      {/* Subtitle (optional) */}
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-500 text-center max-w-2xl">
          {subtitle}
        </p>
      )}

      {/* Gradient Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="
          mt-5 h-[4px] w-16 sm:w-20 md:w-24
          rounded-full
          bg-gradient-to-r
          from-fuchsia-500
          via-purple-500
          to-indigo-500
        "
        style={{ transformOrigin: "center" }}
      />
    </div>
  );
}
