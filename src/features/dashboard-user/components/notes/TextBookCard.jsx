"use client";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function TextBookCard({ textbook }) {
  // محدود کردن توضیحات به 50 کاراکتر با افزودن ...
  const truncatedDescription =
    textbook.description.length > 50
      ? textbook.description.slice(0, 50) + "..."
      : textbook.description;

  return (
    <Link href={textbook.pdf_file} target="_blank" download>
      <div className="theme-card-light rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 w-full h-full flex flex-col">
        {/* تصویر کاور */}
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={textbook.cover_image}
            alt={textbook.title}
            fill
            className="object-cover"
          />
          {/* آیکون دانلود */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/30 backdrop-blur-sm p-3 rounded-full">
              <Download className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
        {/* محتوا */}
        <div className="p-4 flex flex-col gap-3 flex-1">
          {/* عنوان */}
          <h3 className="text-lg font-bold theme-text-primary">
            {textbook.title}
          </h3>
          {/* توضیحات */}
          <p className="text-sm theme-text-primary">{truncatedDescription}</p>
          {/* دوره مرتبط (در صورت وجود) */}
          {textbook.is_attach_course && textbook.course && (
            <div className="flex flex-wrap gap-2 pt-2 border-t theme-border-light">
              <span className="theme-glass-accent text-xs px-3 py-1 rounded-lg">
                دوره: {textbook.course.title}
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
