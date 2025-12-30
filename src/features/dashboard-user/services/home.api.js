import { examHttp, packageHttp, paymentHttp, textbookHttp } from "@/lib";
import { toast } from "react-toastify";
export const getCourses = async () => {
  try {
    const response = await packageHttp.get("private/course/", {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.log("ERROR OBJECT:", error);
    console.log("ERROR RESPONSE:", error.response);
    throw error;
  }
};

export const getUserExams = async () => {
  try {
    const response = await examHttp.get("user/exam/", {
      withCredentials: true,
    });
    toast.success("✅ آزمون‌ها با موفقیت دریافت شدند");
    console.log("Exams Data:", response.data);
    return response.data;
  } catch (error) {
    const message = error.response?.data?.error || "❌ Failed to fetch exams";
    console.error("Error fetching exams:", message);
    toast.error(message);

    throw message;
  }
};

export const getSubscriptions = async () => {
  try {
    const response = await paymentHttp.get("user/subscription/", {
      withCredentials: true,
    });
    toast.success("✅ اشتراک‌ها با موفقیت دریافت شدند");
    console.log("Subscriptions Data:", response.data);
    return response.data;
  } catch (error) {
    const message = error.response?.data?.error || "❌ Failed to fetch exams";
    console.error("Error fetching subscriptions:", message);
    toast.error(message);
    throw message;
  }
};

export const getTransactions = async () => {
  try {
    const response = await paymentHttp.get("user/transaction/", {
      withCredentials: true,
    });
    toast.success("✅ تراکنش‌ها با موفقیت دریافت شدند");
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.error || "❌ Failed to fetch transactions";
    toast.error(message);
    throw message;
  }
};

export const getTextBooks = async () => {
  try {
    const response = await textbookHttp.get("user/", {
      withCredentials: true,
    });
    toast.success("✅ Textbooks fetched successfully");
     console.log("FULL RESPONSE:", response);
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.error || "❌ Failed to fetch textbooks";
    toast.error(message);
    throw message;
  }
};
