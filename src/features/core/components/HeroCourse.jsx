"use client";

import { motion } from "framer-motion";

export default function HeroCourse({
  bars = 20,
  colors = ["transparent", "#bfc0fb", "#f2d2ff", "#EBEAED"], // بالا شفاف، وسط بنفش، پایین سفید
}) {
  const gradientStyle = `linear-gradient(to bottom, ${colors.join(", ")})`;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="flex h-full w-full">
        {Array.from({ length: bars }).map((_, index) => {
          const position = index / (bars - 1);
          const center = 0.5;
          const distance = Math.abs(position - center);
          const scale = 0.3 + 0.7 * Math.pow(distance * 2, 1.2);

          return (
            <motion.div
              key={`bg-bar-${index}`}
              className="flex-1 origin-bottom"
              style={{ background: gradientStyle }}
              animate={{
                scaleY: [scale, scale + 0.1, scale],
                opacity: [1, 0.95, 1],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
                delay: index * 0.2,
              }}
            />
          );
        })}
      </div>

      {/* فلش پایین وسط */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        >
          <polyline points="6 9 12 15 18 9" />
        </motion.svg>
      </div>
    </div>
  );
}
