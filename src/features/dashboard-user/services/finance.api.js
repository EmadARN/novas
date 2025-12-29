import {  paymentHttp } from "@/lib";

// =====================
// Get Transactions
// =====================
export const getTransactions = async () => {
  try {
    const response = await paymentHttp.get("user/transaction/");
    return response.data;
  } catch (error) {
    throw (
      error.response?.data?.error ||
      "❌ خطا در دریافت تراکنش‌ها"
    );
  }
};

// =====================
// Get Subscriptions
// =====================
export const getSubscriptions = async () => {
  try {
    const response = await paymentHttp.get("user/subscription/");
    return response.data;
  } catch (error) {
    throw (
      error.response?.data?.error ||
      "❌ خطا در دریافت اشتراک‌ها"
    );
  }
};

// =====================
// Get Course Subscription
// =====================
export const getCourseSubscription = async (courseId) => {
  try {
    const response = await paymentHttp.get(
      `user/subscription/course-subscription/?course=${courseId}`
    );
    return response.data;
  } catch (error) {
    throw (
      error.response?.data?.error ||
      "❌ خطا در دریافت اطلاعات اشتراک دوره"
    );
  }
};

// =====================
// Pay Installment
// =====================
export const payInstallment = async (installmentId) => {
  try {
    const response = await paymentHttp.patch(
      `user/installment-payment/${installmentId}/`,
      { is_paid: true }
    );
    return response.data;
  } catch (error) {
    throw (
      error.response?.data?.error ||
      "❌ خطا در پرداخت قسط"
    );
  }
};
