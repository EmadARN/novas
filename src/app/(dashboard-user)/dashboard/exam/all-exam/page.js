"use client";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import ExamList from "@/features/dashboard-user/components/exam/ExamList"; 
// import { getUserExams } from "@/src/api/dashboard/exam";
import { FileText, AlertCircle } from "lucide-react";

export default function AllExam() {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //     const fetchExams = async () => {
  //         try {
  //             setLoading(true);
  //             const examsData = await getUserExams();
  //             setExams(examsData || []);
  //         } catch (error) {
  //             console.error('Error fetching exams:', error);
  //             setError('خطا در دریافت آزمون‌ها');
  //             toast.error('خطا در دریافت آزمون‌ها');
  //         } finally {
  //             setLoading(false);
  //         }
  //     };
  //     fetchExams();
  // }, []);

  // if (loading) {
  //     return (
  //         <div className="min-h-screen flex items-center justify-center ">
  //             <div className="w-6 h-6 border-2 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
  //         </div>
  //     );
  // }

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto py-6 px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-[var(--primary)] flex items-center gap-2">
            <FileText className="w-5 h-5" />
            لیست آزمون‌ها
          </h1>
          <span className="text-sm text-gray-500">{exams.length}</span>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-100 rounded-lg p-3 mb-4">
            <p className="text-red-600 text-sm flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {error}
            </p>
          </div>
        )}

        {/* Exams List */}
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <ExamList exams={exams} is_admin={false} />
        </div>
      </div>
    </div>
  );
}
