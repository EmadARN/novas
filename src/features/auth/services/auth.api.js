import { coreHttp } from "@/lib";

// =====================
// Send OTP
// =====================
export const sendOtp = async (phone_number) => {
  try {
    const response = await coreHttp.post("auth/send-otp/", { phone_number });
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Failed to send OTP";
  }
};

// =====================
// Verify OTP
// =====================
export const verifyOtp = async (phone_number, code) => {
  try {
    const response = await coreHttp.post("auth/verify-otp/", {
      phone_number,
      code,
    });
    console.log(response.data, "response");

    return response.data; // فقط موفقیت یا پیام backend
  } catch (err) {
    throw err.response?.data?.error || "Failed to verify OTP";
  }
};

// =====================
// Logout
// =====================
export const logout = async () => {
  try {
    await coreHttp.post("auth/logout/");
    return { message: "Successfully logged out" };
  } catch (error) {
    throw error.response?.data?.error || "Failed to logout";
  }
};

// =====================
// Register / Signup
// =====================
export const register = async (formData) => {
  try {
    const response = await coreHttp.post("auth/signup/", formData);
    const { user, student_information } = response.data;
    console.log(response, "response");

    return { user, student_information };
  } catch (error) {
    console.log(error, "registerErr");

    throw error.response?.data?.error || "Failed to register";
  }
};

export const getProfile = async () => {
  try {
    const response = await coreHttp.get("auth/profile/");
    return response.data.user;
  } catch (err) {
    throw err?.response?.data?.error || "خطا در دریافت اطلاعات کاربر";
  }
};
