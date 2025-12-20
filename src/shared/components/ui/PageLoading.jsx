"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const rectangleVariants = {
  initial: { x: "0%" },
  animate: (i) => ({
    x: "100%",
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: "easeIn",
    },
  }),
};

const PageLoading = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999]"
      initial="initial"
      animate="animate"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-1/5 bg-gradient-to-r
        from-[var(--primary)]
        to-[var(--accent)] flex items-center justify-center"
          custom={i}
          variants={rectangleVariants}
          style={{ top: `${i * 20}%` }}
        >
          {i === 2 && (
            <Image
              src="/logo.webp"
              width={200}
              height={200}
              alt="Logo"
              className="h-62 w-62"
            />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PageLoading;
