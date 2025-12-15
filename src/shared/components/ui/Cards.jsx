import Link from "next/link";
import Image from "next/image";

export default function CardItem({
  image,
  href = "#",
  badge,
  subtitle,
  title,
  description,
  author,
}) {
  return (
    <article className="group relative flex w-1/3 flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl">
      {/* badge */}
      {badge && (
        <span className="absolute right-3 top-3 z-[3] rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
          {badge}
        </span>
      )}

      {/* image wrapper (height ثابت) */}
      <div className="relative h-[235px] w-full shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-0"
          priority
        />
      </div>

      {/* hover image */}
      <Link href={href} className="absolute inset-0 z-[1]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-opacity duration-300 group-hover:opacity-30"
        />
      </Link>

      {/* content (ارتفاع یکسان) */}
      <div className="relative z-[2] flex flex-1 flex-col rounded-b-xl bg-white p-6 transition-colors duration-300 group-hover:bg-transparent">
        {subtitle && (
          <span className="text-xs font-medium uppercase tracking-widest text-gray-500">
            {subtitle}
          </span>
        )}

        <h3 className="my-2 text-lg font-semibold">{title}</h3>

        {description && (
          <p className="mb-4 line-clamp-3 text-sm text-gray-600 group-hover:text-gray-700">
            {description}
          </p>
        )}

        {/* author همیشه ته کارت */}
        {author && (
          <span className="mt-auto text-xs">
            by <span className="font-semibold text-[#AD7D52]">{author}</span>
          </span>
        )}
      </div>
    </article>
  );
}
