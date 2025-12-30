import { examHttp } from "@/lib";

// =====================
// Get Exams
// =====================
export const getExams = async () => {
  try {
    const response = await examHttp.get("admin/exam/");
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "❌ خطا در دریافت آزمون‌ها";
  }
};
