"use client";
import React from "react";
import Link from "next/link";
import BtnLoader from "./BtnLoader";

const GradientButton = ({
  href,
  title,
  onClick,
  type = "button",
  loading = false,
  textColor = "text-white",
  gradient = "bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]",
  className = "",
}) => {
  const baseClasses = `
    inline-flex
    items-center
    justify-center
    rounded-xl
    px-4 md:px-8
    py-2 md:py-4
    font-bold
    text-sm md:text-md
    shadow-lg
    transition-transform
    hover:scale-105
    ${textColor}
    ${gradient}
    cursor-pointer
    ${className}
  `;

  const content = loading ? <BtnLoader /> : title;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={baseClasses}
      disabled={loading}
    >
      {content}
    </button>
  );
};

export default GradientButton;
