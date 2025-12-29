"use client";

import Image from "next/image";
import Link from "next/link";
import { FileX } from "lucide-react";

const ExamList = ({ exams, is_admin }) => {
  if (!exams || exams.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
          <FileX className="w-8 h-8 text-[var(--accent)]" />
        </div>
        <h3 className="text-lg font-semibold text-[var(--accent)] mb-1">
          آزمونی وجود ندارد
        </h3>
        <p className="text-sm text-gray-500">
          در حال حاضر هیچ آزمونی برای شما ثبت نشده است
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
      {exams.map((exam) => (
        <Link
          href={
            is_admin
              ? `/admin-dashboard/exam/${exam.id}`
              : `/exams/detail/${exam.id}`
          }
          key={exam.id}
        >
          <div className="theme-card-light rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 w-full h-full flex flex-col">
            {/* تصویر بنر */}
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={exam.cover_image}
                alt={exam.title}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            {/* محتوا */}
            <div className="p-4 flex flex-col gap-3 flex-1">
              <h3 className="text-lg font-bold theme-text-primary">
                {exam.title}
              </h3>

              <p className="text-sm theme-text-primary">
                {exam.description.length > 50
                  ? exam.description.slice(0, 50) + "..."
                  : exam.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2 border-t theme-border-light text-sm theme-text-primary">
                {exam.start_time && (
                  <span className="theme-glass-accent px-3 py-1 rounded-lg">
                    شروع: {new Date(exam.start_time).toLocaleString("fa-IR")}
                  </span>
                )}
                {exam.deadline && (
                  <span className="theme-glass-accent px-3 py-1 rounded-lg">
                    مهلت: {new Date(exam.deadline).toLocaleString("fa-IR")}
                  </span>
                )}
                {exam.duration_minutes && (
                  <span className="theme-glass-accent px-3 py-1 rounded-lg">
                    مدت: {exam.duration_minutes} دقیقه
                  </span>
                )}
              </div>

              <Link
                href={
                  is_admin
                    ? `/admin-dashboard/exam/${exam.id}`
                    : `/exams/${exam.id}`
                }
                className="theme-btn-primary w-full text-center mt-auto"
              >
                مشاهده جزئیات
              </Link>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ExamList;
