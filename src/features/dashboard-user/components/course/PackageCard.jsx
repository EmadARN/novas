"use client";
import Image from "next/image";
import Link from "next/link";
import { Play, Star, Award } from "lucide-react";

export default function PackageCard({
  course,
  is_detail = false,
  is_admin = false,
}) {
  /* -------------------- helpers -------------------- */

  const truncatedDescription =
    course.description.length > 50
      ? course.description.slice(0, 50) + "..."
      : course.description;

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i + 1 <= Math.floor(rating)
            ? "text-yellow-400 fill-yellow-400"
            : "text-gray-300"
        }`}
      />
    ));

  const href = is_admin
    ? `/admin-dashboard/course/${course.id}`
    : `/courses/detail/${course.id}`;

  /* -------------------- render -------------------- */

  return (
    <Link href={href}>
      <div className="group bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 w-full h-full flex flex-col overflow-hidden">
        {/* Banner */}
        <div className="relative w-full h-36 sm:h-40 md:h-44 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
          <Image
            src={course.banner}
            alt={course.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.src = "/api/placeholder/400/300";
            }}
          />

          {/* Badges */}
          <div className="absolute top-2 right-2 flex flex-col gap-1.5">
            {course.has_installment_payment && (
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-md flex items-center gap-1">
                <Award className="w-3 h-3" />
                قسطی
              </span>
            )}

            {course.rating >= 4 && (
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-md flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" />
                {course.rating}
              </span>
            )}
          </div>

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Play className="w-5 h-5 text-purple-600 ml-0.5" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4 flex flex-col gap-2 flex-1">
          {/* Title */}
          <h3 className="text-sm sm:text-base font-bold text-gray-800 line-clamp-2 leading-tight">
            {course.title}
          </h3>

          {/* Description */}
          {!is_detail && (
            <p className="text-xs text-gray-600 line-clamp-2 leading-tight">
              {truncatedDescription}
            </p>
          )}

          {/* Categories */}
          <div className="flex flex-wrap gap-1.5">
            {course.categories?.slice(0, 2).map((cat) => (
              <span
                key={cat.id}
                className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-[10px] font-semibold px-2 py-1 rounded-full"
              >
                {cat.title}
              </span>
            ))}
          </div>

          {/* Price & Rating */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <div className="flex items-center gap-1">
              <span className="text-sm sm:text-base font-bold text-purple-600">
                {course.current_price.toLocaleString("fa-IR")}
              </span>
              <span className="text-[10px] text-gray-500">ریال</span>
            </div>

            {course.rating && (
              <div className="flex items-center gap-1">
                {renderStars(course.rating)}
                <span className="text-[10px] text-gray-600">
                  ({course.rating})
                </span>
              </div>
            )}
          </div>

          {/* Teachers */}
          {course.teachers?.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1 text-[10px] text-gray-600">
              {course.teachers.slice(0, 2).map((teacher) => (
                <span
                  key={teacher.id}
                  className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
                >
                  {teacher.full_name.split(" ")[0]}
                </span>
              ))}

              {course.teachers.length > 2 && (
                <span className="text-gray-500">
                  +{course.teachers.length - 2}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
