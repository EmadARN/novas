"use client";
import { useEffect, useState } from "react";

export default function FooterWrapper({ children }) {
  const [tight, setTight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;

      if (scrollTop + windowHeight > docHeight - 50) setTight(true);
      else setTight(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`transition-all duration-500 shadow-xl ${
        tight ? "scale-[0.98]" : "scale-100"
      }`}
      style={{ transformOrigin: "top center" }}
    >
      {children}
    </div>
  );
}
