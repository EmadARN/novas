import { packageHttp } from "@/lib";

// =====================
// Get Courses
// =====================
export const getCourses = async () => {
  try {
    const response = await packageHttp.get("admin/course/");
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "❌ خطا در دریافت دوره‌ها";
  }
};
