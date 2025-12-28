"use client";
import { BookOpen, Filter, Link } from "lucide-react";
import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import PackageCard from "@/features/dashboard-user/components/course/PackageCard";
function SafeRender({ children }) {
  try {
    return children;
  } catch (error) {
    console.error("Render error:", error);
    return <div className="text-red-500 p-2 text-sm">⚠️ خطا</div>;
  }
}
export default function CoursesPage() {
  const searchParams = useSearchParams();
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const selectedCategoryId = searchParams.get("category")
    ? parseInt(searchParams.get("category"))
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
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="w-6 h-6 border-2 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
        </div>
      }
    >
      <div className="min-h-screen bg-background">
        <div className="container mx-auto py-6 px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-purple-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              دوره‌های من
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
              <h2 className="text-sm font-medium text-purple-900 flex items-center gap-1">
                <Filter className="w-4 h-4" />
                دسته‌بندی
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/dashboard/courses/my"
                className={`
                                    px-3 py-2 rounded-lg text-xs font-medium
                                    ${
                                      !selectedCategoryId
                                        ? "bg-purple-900 text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }
                                `}
              >
                همه
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/dashboard/courses/my?category=${category.id}`}
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
                <div className="col-span-full text-center py-8">
                  <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">هیچ دوره‌ای یافت نشد</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
