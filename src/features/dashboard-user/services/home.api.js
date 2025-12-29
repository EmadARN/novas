import { examHttp, packageHttp, paymentHttp } from "@/lib";

export const getCourses = async () => {
  try {
    const response = await packageHttp.get("private/course/");
    toast.success("✅ Courses fetched successfully");
    return response.data;
  } catch (error) {
    const message = error.response?.data?.error || "❌ Failed to fetch courses";
    toast.error(message);
    throw message;
  }
};

export const getUserExams = async () => {
  try {
    const response = await examHttp.get("user/exam");
    toast.success("✅ آزمون‌ها با موفقیت دریافت شدند");
    return response.data;
  } catch (error) {
    const message = error.response?.data?.error || "❌ Failed to fetch courses";
    toast.error(message);
    throw message;
  }
};

export const getSubscriptions = async () => {
  try {
    const response = await paymentHttp.get("user/subscription/");
    toast.success("✅ اشتراک‌ها با موفقیت دریافت شدند");
    return response.data;
  } catch (error) {
    const message = error.response?.data?.error || "❌ Failed to fetch courses";
    toast.error(message);
    throw message;
  }
};

export const getTransactions = async () => {
  try {
    const response = await paymentHttp.get("user/transaction/");
    toast.success("✅ تراکنش‌ها با موفقیت دریافت شدند");
    return response.data;
  } catch (error) {
    const message = error.response?.data?.error || "❌ Failed to fetch courses";
    toast.error(message);
    throw message;
  }
};

export const getTextBooks = async () => {
  try {
    const response = await API_TEXTBOOK_URL.get("user/");
    toast.success("✅ Textbooks fetched successfully");
    return response.data;
  } catch (error) {
    const message = error.response?.data?.error || "❌ Failed to fetch courses";
    toast.error(message);
    throw message;
  }
};
