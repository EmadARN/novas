"use client";
import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
// import { toast } from 'react-toastify';
import TextBookCard from "./TextBookCard"; 
// import { getTextBooks } from "@/src/api/dashboard/textbook";
import { BookOpen, Filter } from "lucide-react";

function SafeRender({ children }) {
  try {
    return children;
  } catch (error) {
    console.error("Render error:", error);
    return <div className="text-red-500 p-2 text-sm">⚠️ خطا</div>;
  }
}

function TextBooksContent() {
  const searchParams = useSearchParams();
  const selectedCourseId = searchParams?.get("course")
    ? parseInt(searchParams?.get("course"))
    : null;

  const [textbooks, setTextbooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //     const fetchTextBooks = async () => {
  //         try {
  //             setLoading(true);
  //             const textbooksData = await getTextBooks();
  //             setTextbooks(textbooksData || []);
  //         } catch (error) {
  //             console.error('Error fetching textbooks:', error);
  //             setError('خطا در دریافت اطلاعات جزوه‌ها');
  //             toast.error('خطا در دریافت اطلاعات جزوه‌ها');
  //         } finally {
  //             setLoading(false);
  //         }
  //     };
  //     fetchTextBooks();
  // }, []);

  const allCourses = Array.from(
    new Set(
      textbooks
        .filter((tb) => tb.is_attach_course && tb.course)
        .map((tb) => JSON.stringify(tb.course))
    )
  ).map((str) => JSON.parse(str));

  const filteredTextBooks = selectedCourseId
    ? textbooks.filter(
        (tb) => tb.is_attach_course && tb.course?.id === selectedCourseId
      )
    : textbooks;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-6 h-6 border-2 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-6 px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-purple-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            لیست جزوه‌ها
          </h1>
          <span className="text-sm text-gray-500">
            {filteredTextBooks.length}
          </span>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-100 rounded-lg p-3 mb-4">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        {/* Course Filters */}
        {allCourses.length > 0 && (
          <div className="bg-white rounded-xl p-4 mb-6 border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-medium text-purple-900 flex items-center gap-1">
                <Filter className="w-4 h-4" />
                دوره
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/dashboard/notes"
                className={`
                                    px-3 py-2 rounded-lg text-xs font-medium transition-colors
                                    ${
                                      !selectedCourseId
                                        ? "bg-purple-900 text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }
                                `}
              >
                همه
              </Link>
              {allCourses.map((course) => (
                <Link
                  key={course.id}
                  href={`/dashboard/notes?course=${course.id}`}
                  className={`
                                        px-3 py-2 rounded-lg text-xs font-medium transition-colors
                                        ${
                                          selectedCourseId === course.id
                                            ? "bg-purple-900 text-white"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                        }
                                    `}
                >
                  {course.title}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Textbooks Grid */}
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredTextBooks.length > 0 ? (
              filteredTextBooks.map((textbook) => (
                <SafeRender key={textbook.id}>
                  <TextBookCard textbook={textbook} />
                </SafeRender>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-purple-900 mb-1">
                  هیچ جزوه ای یافت نشد
                </h3>
                <p className="text-sm text-gray-500">
                  در حال حاضر هیچ جزوه ای برای شما ثبت نشده است
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextBooksContent;
