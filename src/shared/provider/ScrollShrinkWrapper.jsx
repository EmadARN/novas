"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const ScrollShrinkWrapper = ({
  children,
  minScale = 0.95,
  start = 0,
  end = 0.1,
  radiusEnd = "2rem",
  className = "",
  style = {},
}) => {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [start, end], [1, minScale]);
  const borderRadius = useTransform(
    scrollYProgress,
    [start, end * 2],
    ["0rem", radiusEnd]
  );
  const boxShadow = useTransform(
    scrollYProgress,
    [start, end * 2],
    [
      "0 24px 43px rgba(0,0,0,0.25), 0 20px 17px rgba(0,0,0,0.2)",
      "0 0px 0 rgba(0,0,0,0)",
    ]
  );

  return (
    <motion.div
      className={className}
      style={{
        scale,
        borderRadius,
        boxShadow,
        willChange: "transform",
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollShrinkWrapper;
