"use client";
import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import PackageCard from "@/features/dashboard-user/components/course/PackageCard";
// import { getCourses } from "@/src/api/public/courseAPI";
// import { getCategories } from "@/src/api/public/categories";
import { BookOpen, Filter } from "lucide-react";

function SafeRender({ children }) {
  try {
    return children;
  } catch (error) {
    console.error("Render error:", error);
    return <div className="text-red-500 p-2 text-sm">⚠️ خطا</div>;
  }
}

export default function AllCourses({ searchParams }) {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const selectedCategoryId = searchParams?.category
    ? parseInt(searchParams.category)
    : null;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const [coursesData, categoriesData] = await Promise.all([
  //         getCourses(),
  //         getCategories(),
  //       ]);
  //       setCourses(coursesData || []);
  //       setCategories(categoriesData || []);
  //     } catch (err) {
  //       setError("خطا در دریافت اطلاعات");
  //       toast.error("خطا در دریافت اطلاعات");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const filteredCourses = selectedCategoryId
    ? courses.filter((course) =>
        course.categories?.some((cat) => cat.id === selectedCategoryId)
      )
    : courses;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-6 h-6 border-2 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center ">
          <div className="w-6 h-6 border-2 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
        </div>
      }
    >
      <div className="min-h-screen ">
        <div className="container mx-auto py-6 px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-[var(--primary)] flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              همه‌ی دوره‌ها
            </h1>
            <span className="text-sm text-gray-500">
              {filteredCourses.length}
            </span>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-100 rounded-lg p-3 mb-4">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {/* Category Filters */}
          <div className="bg-white rounded-xl p-4 mb-6 border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-medium text-[var(--accent)] flex items-center gap-1">
                <Filter className="w-4 h-4" />
                دسته‌بندی
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/dashboard/courses/all"
                className={`
                                    px-3 py-2 rounded-lg text-xs font-medium transition-colors
                                    ${
                                      !selectedCategoryId
                                        ? "bg-[var(--primary)] text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }
                                `}
              >
                همه
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/dashboard/courses/all?category=${category.id}`}
                  className={`
                                        px-3 py-2 rounded-lg text-xs font-medium transition-colors
                                        ${
                                          selectedCategoryId === category.id
                                            ? "bg-purple-900 text-white"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                        }
                                    `}
                >
                  {category.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                  <SafeRender key={course.id}>
                    <PackageCard
                      course={course}
                      is_detail={false}
                      is_admin={false}
                    />
                  </SafeRender>
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <BookOpen className="w-8 h-8 text-[var(--accent)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--accent)] mb-1">
                    دوره ای وجود ندارد
                  </h3>
                  <p className="text-sm text-gray-500">
                    در حال حاضر هیچ دوره ای برای شما ثبت نشده است
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
