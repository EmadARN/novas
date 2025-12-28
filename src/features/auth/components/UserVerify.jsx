"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Home, Headphones } from "lucide-react";

export default function UserVerify() {
  const router = useRouter();
  const [fullName, setFullName] = useState("کاربر");
  const timerRef = useRef(null);
  const pushIntervalRef = useRef(null);

  // پاک کردن توکن‌ها و کوکی‌ها
  const clearAuthData = () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem("signUpStep");
    localStorage.removeItem("signUpPhone");
  };

  const clearAllLocalStorage = () => {
    if (typeof window === "undefined") return;
    localStorage.clear();
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    // دریافت نام کاربر
    const firstName = localStorage.getItem("first_name") || "کاربر";
    const lastName = localStorage.getItem("last_name") || "";
    setFullName(firstName + (lastName ? ` ${lastName}` : ""));

    // حذف توکن‌ها بلافاصله بعد از لود
    clearAuthData();

    // ریدایرکت خودکار بعد از ۵ دقیقه
    timerRef.current = setTimeout(() => {
      clearAllLocalStorage();
      router.push("/");
    }, 300000);

    // نوتیفیکیشن هر ۵ دقیقه
    pushIntervalRef.current = setInterval(() => {
      if (Notification.permission === "granted") {
        new Notification("Nova Wise", {
          body: "درخواست ثبت‌نام شما در حال بررسی است...",
          icon: "/logo.png",
          tag: "pending-approval",
        });
      }
    }, 300000);

    return () => {
      clearTimeout(timerRef.current);
      clearInterval(pushIntervalRef.current);
    };
  }, [router]);

  const handleButtonClick = (action) => {
    clearAllLocalStorage();
    if (action === "home") {
      router.push("/");
    } else if (action === "support") {
      router.push("/contactus"); // تغییر مسیر به contactus
    }
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* آیکون موفقیت */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-green-200 rounded-full blur-xl opacity-60 animate-ping"></div>
            <CheckCircle className="w-20 h-20 text-green-600 relative z-10" />
          </div>
        </motion.div>

        {/* عنوان */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-2xl font-bold text-center text-gray-800 mb-2"
        >
          {fullName} عزیز
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-600 text-lg leading-relaxed mb-8"
        >
          درخواست ثبت‌نام شما با موفقیت دریافت شد.
          <br />
          <span className="text-indigo-600 font-medium">
            لطفاً منتظر تأیید ادمین باشید.
          </span>
        </motion.p>

        {/* دکمه‌ها */}
        <div className="flex gap-3 justify-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleButtonClick("home")}
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            صفحه اصلی
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleButtonClick("support")}
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-indigo-600 border-2 border-indigo-200 rounded-xl font-medium text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <Headphones className="w-4 h-4" />
            پشتیبانی
          </motion.button>
        </div>

        {/* نکته کوچک */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center text-xs text-gray-400 mt-6"
        >
          بعد از ۵ دقیقه به صورت خودکار به صفحه اصلی هدایت می‌شوید.
        </motion.p>
      </motion.div>
    </div>
  );
}
