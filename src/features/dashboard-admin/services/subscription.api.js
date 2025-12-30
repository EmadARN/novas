import { paymentHttp } from "@/lib";

// =====================
// Get Subscriptions
// =====================
export const getSubscriptions = async () => {
  try {
    const response = await paymentHttp.get("admin/subscription/");
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "❌ خطا در دریافت اشتراک‌ها";
  }
};
