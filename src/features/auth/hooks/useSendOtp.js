import { useState } from "react";
import { sendOtp } from "../services/auth.api";
import { useAtom } from "jotai";
import { phoneAtom } from "../atoms/phoneAtom";

export default function useSendOtp() {
  const [phoneNumber, setPhoneNumber] = useAtom(phoneAtom);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message, isError = false) => {
    setToast({ message, isError });
    setTimeout(() => setToast(null), 3000);
  };

  const handlePhoneSubmit = async (e, onNextStep) => {
    e.preventDefault();
    const phone = e.target.phone.value.trim();
    if (phone.length !== 11 || !phone.startsWith("09")) {
      showToast("لطفاً شماره موبایل معتبر وارد کنید", true);
      return;
    }

    try {
      setLoading(true);
      await sendOtp(phone);
      setPhoneNumber(phone); // اینجا Atom هم آپدیت میشه
      localStorage.setItem("signUpPhone", phone); // ذخیره در localStorage
      onNextStep();
    } catch (err) {
      showToast(err || "ارسال کد با خطا مواجه شد", true);
    } finally {
      setLoading(false);
    }
  };

  return { phoneNumber, handlePhoneSubmit, toast, loading };
}
