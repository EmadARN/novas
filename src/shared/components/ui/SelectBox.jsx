"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SelectBox({
  options = [],
  value = null,
  onChange,
  placeholder = "انتخاب کنید",
  disabled = false,
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const selectedOption = options.find((opt) => {
    if (!value) return false;
    return typeof value === "string"
      ? opt.value === value
      : opt.value === value.value;
  });

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      ref={ref}
      className={`
        relative cursor-pointer
        w-full
        sm:max-w-[320px]
        ${className}
      `}
    >
      {/* Header */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((prev) => !prev)}
        className={`
          w-full
          h-12
          flex items-center justify-between
          rounded-xl border px-4
          text-sm transition cursor-pointer
          ${
            disabled
              ? "bg-gray-100 cursor-not-allowed"
              : "bg-white hover:border-gray-400"
          }
        `}
      >
        {/* متن با عرض ثابت */}
        <span
          className={`
            block
            flex-1
            text-right
            truncate
            ${selectedOption ? "text-gray-900" : "text-gray-400"}
          `}
        >
          {selectedOption?.label || placeholder}
        </span>

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          className="ml-2 text-gray-500 shrink-0"
        >
          ▼
        </motion.span>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && !disabled && (
          <motion.ul
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="
              absolute z-50 mt-2
              w-full
              rounded-xl border bg-white
              shadow-lg max-h-60 overflow-auto
            "
          >
            {options.length === 0 && (
              <li className="px-4 py-3 text-sm text-gray-400">
                گزینه‌ای وجود ندارد
              </li>
            )}

            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => {
                  onChange?.(option);
                  setOpen(false);
                }}
                className={`
                  px-4 py-3 text-sm cursor-pointer
                  hover:bg-gray-100
                  truncate
                  ${
                    selectedOption?.value === option.value
                      ? "bg-gray-50 font-medium"
                      : ""
                  }
                `}
              >
                {option.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
