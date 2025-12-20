"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import PageLoading from "../components/ui/PageLoading";

export default function LoaderWrapper({ children }) {
  const pathname = usePathname();
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => setShow(false), 1000);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <AnimatePresence>{show && <PageLoading />}</AnimatePresence>

      {/* محتوا همیشه رندر میشه، فقط opacity کنترل میشه */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: show ? 1 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
}
