import { coreHttp } from "@/lib";

export const getProfile = async () => {
  try {
    const response = await coreHttp.get("auth/profile/", {
      withCredentials: true,
    });
    console.log("res",response)
    return response.data.user;
  } catch (err) {
    throw err?.response?.data?.error || "خطا در دریافت اطلاعات کاربر";
  }
};
