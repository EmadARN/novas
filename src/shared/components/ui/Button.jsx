"use client";

import React from "react";
import Link from "next/link";
import BtnLoader from "./BtnLoader";

const GradientButton = ({
  href,
  title,
  className = "",
  type = "button",
  loading = false,
}) => {
  const baseClasses = `
    inline-flex
    items-center
    justify-center
    rounded-xl
    px-4 md:px-8
    py-2 md:py-4
    font-bold
    text-white
    text-sm md:text-md
    shadow-lg
    transition-transform
    hover:scale-105
    bg-gradient-to-r
    from-[var(--primary)]
    to-[var(--accent)]
    cursor-pointer
    ${className}
  `;

  const content = loading ? <BtnLoader /> : title;

  return href ? (
    <Link href={href} className={baseClasses}>
      {content}
    </Link>
  ) : (
    <button type={type} className={baseClasses} disabled={loading}>
      {content}
    </button>
  );
};

export default GradientButton;
