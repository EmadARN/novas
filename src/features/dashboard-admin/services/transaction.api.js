import { paymentHttp } from "@/lib";

// =====================
// Get Transactions
// =====================
export const getTransactions = async () => {
  try {
    const response = await paymentHttp.get("admin/transaction/");
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "❌ خطا در دریافت تراکنش‌ها";
  }
};
