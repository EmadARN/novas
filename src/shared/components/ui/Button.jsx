import Link from "next/link";

export default function GradientButton({ href, title, className = "" }) {
  return (
    <Link
      href={href}
      className={`
        inline-block
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
        ${className}
      `}
    >
      {title}
    </Link>
  );
}
