import { coreHttp } from "@/lib";

// =====================
// Get Users
// =====================
export const getUsers = async () => {
  try {
    const response = await coreHttp.get("admin/user/");
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "❌ خطا در دریافت کاربران";
  }
};
