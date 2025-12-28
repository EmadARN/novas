"use client";

import React, {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  forwardRef,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// =====================
// Card Component (Image Only)
// =====================
export const Card = forwardRef(
  ({ imageSrc, alt = "", customClass, style, ...rest }, ref) => (
    <motion.div
      ref={ref}
      {...rest}
      className={`relative overflow-hidden rounded-xl   
      [transform-style:preserve-3d] [will-change:transform] 
      [backface-visibility:hidden] border-2 border-gray-50 ${
        customClass ?? ""
      } ${rest.className ?? ""}`}
      style={{ ...style, transformOrigin: "center center" }}
      layout
    >
      <Image
        src={imageSrc}
        alt={alt}
        fill
        priority
        className="object-cover select-none"
        draggable={false}
      />
    </motion.div>
  )
);
Card.displayName = "Card";

// =====================
// CardSwap / HeroAbout Component
// =====================
const makeSlot = (i, distX, distY, total) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const CardSwap = ({
  width = 400,
  height = 300,
  mobileWidth = 260,
  mobileHeight = 260,
  tabletWidth = 320,
  tabletHeight = 320,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 3000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  children,
}) => {
  const childArr = Children.toArray(children);
  const totalCards = childArr.length;

  const refs = useRef([]);
  refs.current = childArr.map((_, i) => refs.current[i] ?? React.createRef());

  const [order, setOrder] = useState(
    Array.from({ length: totalCards }, (_, i) => i)
  );
  const intervalRef = useRef(null);

  const swapCards = () => {
    setOrder((prev) => {
      if (prev.length < 2) return prev;
      const [front, ...rest] = prev;
      return [...rest, front];
    });
  };

  useEffect(() => {
    intervalRef.current = setInterval(swapCards, delay);
    return () => clearInterval(intervalRef.current);
  }, [delay]);

  // =====================
  // محاسبه سایز ریسپانسیو
  // =====================
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const calcWidth =
    windowWidth < 640 ? mobileWidth : windowWidth < 1024 ? tabletWidth : width;

  const calcHeight =
    windowWidth < 640
      ? mobileHeight
      : windowWidth < 1024
      ? tabletHeight
      : height;

  return (
    <section
      className="
        relative
        xl:pt-28
        px-4 sm:px-8 lg:px-16
        flex flex-col md:flex-row
        items-center lg:items-start
        justify-between
        gap-12
        w-full min-h-[90vh] md:min-h-[60vh] xl:min-h-[85vh]
        rounded-b-xl
      "
      style={{
        background:
          "linear-gradient(to bottom, #EBEAED, var(--primary))",
      }}
    >
      {/* کارت‌ها */}
      <div
        className="
          relative
          w-[270px] h-[240px]
          md:w-[320px] md:h-[320px]
          lg:w-[400px] lg:h-[400px]
          perspective-[400px]
          flex-shrink-0
          pt-24 sm:pt-20 lg:pt-56 xl:pt-32
        "
      >
        <AnimatePresence>
          {order.map((index, i) => {
            const child = childArr[index];
            if (!isValidElement(child)) return child;

            const slot = makeSlot(
              i,
              cardDistance,
              verticalDistance,
              totalCards
            );

            return cloneElement(child, {
              key: index,
              style: {
                width: calcWidth,
                height: calcHeight,
                position: "absolute",
                zIndex: slot.zIndex,
              },
              animate: {
                x: slot.x,
                y: slot.y,
                z: slot.z,
                skewY: skewAmount,
              },
              transition: {
                type: "spring",
                stiffness: 220,
                damping: 22,
              },
              whileHover: {
                scale: 1.03,
              },
              onClick: (e) => {
                child.props.onClick?.(e);
                onCardClick?.(index);
              },
            });
          })}
        </AnimatePresence>
      </div>

      {/* متن سمت راست */}
      <div
        className="
          flex flex-col flex-1
items-center lg:items-start
          justify-center 
          h-auto lg:h-[60vh]
          max-w-xl
          text-center lg:text-right
        "
      >
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug text-[#ffffff]">
          نُوا، روشنای مسیر موفقیت
          <br />
          آموزش هوشمند، برنامه‌ریزی دقیق،
          <br />
          آینده‌ای روشن
        </h1>

        <Link href="/auth" passHref>
          <button
            className="
        mt-4
        px-6 py-3
        bg-white text-[#261957] font-bold
        rounded-full
        shadow-lg
        hover:scale-105 hover:shadow-xl
        transition-all duration-300
        cursor-pointer
      "
          >
            همین حالا یادگیری رو شروع کن
          </button>
        </Link>
      </div>

      {/* فلش پایین */}

      {/* فلش پایین */}
      <div className="absolute bottom-22 left-1/2 transform -translate-x-1/2">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
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
    </section>
  );
};

export default CardSwap;
