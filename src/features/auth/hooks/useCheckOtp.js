"use client";
import { useState, useRef, useEffect, use } from "react";
import { verifyOtp, sendOtp } from "../services/auth.api";
import { useRouter } from "next/navigation";

export default function useCheckOtp(phoneNumber, otpLength = 6) {
  const [otpError, setOtpError] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [showResend, setShowResend] = useState(false);
  const [toast, setToast] = useState(null);
  const otpRefs = useRef([]);
  const router = useRouter();
  useEffect(() => {
    if (otpRefs.current.length === 0)
      otpRefs.current = Array(otpLength).fill(null);
  }, []);

  useEffect(() => {
    let timer;
    if (!showResend) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setShowResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [showResend]);

  const showToast = (message, isError = false) => {
    setToast({ message, isError });
    setTimeout(() => setToast(null), 3000);
  };

  const handleOtpInput = (e, idx) => {
    const value = e.target.value.replace(/\D/g, "");
    e.target.value = value;
    if (value && idx < otpLength - 1) otpRefs.current[idx + 1]?.focus();
    setOtpError("");
  };

  const handleOtpKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !e.target.value && idx > 0) {
      otpRefs.current[idx - 1].focus();
      otpRefs.current[idx - 1].value = "";
    }
  };

  const handleOtpSubmit = async (e, onNextStep) => {
    e.preventDefault();
    const otp = otpRefs.current.map((i) => (i ? i.value : "")).join("");
    if (otp.length !== otpLength) {
      setOtpError("لطفاً همه ارقام را وارد کنید");
      return;
    }

    try {
      const response = await verifyOtp(phoneNumber, otp);
      console.log(response, "user");

      if (!response) {
        setOtpError("خطا در دریافت اطلاعات کاربر");
        return;
      }

      // هدایت کاربر بسته به نقش و اطلاعات
      if (response.user.role === "admin") {
        router.push("/dashboardAdmin");
      } else if (response.student_information) {
        if (response.user.role === "student") router.push("/dashboard");
        else if (response.user.role === "customer") router.push("/");
      } else {
        router.push("/auth");
      }
    } catch (err) {
      setOtpError(
        err?.response?.data?.error ||
          err?.message ||
          "کد اشتباه است. دوباره امتحان کنید."
      );
      otpRefs.current.forEach((i) => i && (i.value = ""));
      otpRefs.current[0]?.focus();
    }
  };

  const handleResend = async () => {
    try {
      await sendOtp(phoneNumber);
      otpRefs.current.forEach((i) => i && (i.value = ""));
      otpRefs.current[0]?.focus();
      setTimeLeft(60);
      setShowResend(false);
      showToast("Code resent successfully!");
    } catch (err) {
      showToast(err || "Failed to resend code", true);
    }
  };

  return {
    otpRefs,
    otpError,
    timeLeft,
    showResend,
    toast,
    handleOtpInput,
    handleOtpKeyDown,
    handleOtpSubmit,
    handleResend,
  };
}
