"use client";
import { motion } from "framer-motion";

export function ContactButton({ href, icon, label, gradient }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r ${gradient}`}
    >
      {icon}
      <span>{label}</span>
    </motion.a>
  );
}
