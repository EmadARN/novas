"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { API_CORE_URL } from "@/lib/api";
import { getProfile } from "@/shared/service";

// --------------------
// تابع خوش‌آمدگویی بر اساس ساعت
// --------------------
const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) return "صبح بخیر ";
  if (hour >= 12 && hour < 18) return "ظهر بخیر ";
  return "شب بخیر ";
};

export default function DashboardHeader({ is_side_bar_open, onToggleSidebar }) {
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState("Dashboard");
  const [breadcrumbs, setBreadcrumbs] = useState(["Home", "Dashboard"]);

  const greeting = getGreeting();

  // --------------------
  // بررسی احراز هویت
  // --------------------
  useEffect(() => {
    const checkAuth = async () => {
      setIsLoading(true);

      const accessToken = localStorage.getItem("access_token");

      try {
        const response = await getProfile()

        setUser(response.data);
      } catch (error) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        // router.push("/");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [pathname]);

  // --------------------
  // Breadcrumb و عنوان صفحه
  // --------------------
  useEffect(() => {
    const parts = pathname.split("/").filter(Boolean);

    setBreadcrumbs([
      "Home",
      ...parts.map((p) => p.charAt(0).toUpperCase() + p.slice(1)),
    ]);

    const pageName = parts.length > 0 ? parts[parts.length - 1] : "Dashboard";
    setCurrentPage(pageName.charAt(0).toUpperCase() + pageName.slice(1));
  }, [pathname]);

  if (isLoading) return null;

  return (
    <header className="fixed top-2 z-40 h-20 w-full bg-white text-gray-500 shadow-md flex items-center justify-between px-4">
      {/* سمت چپ: دکمه منو */}
      <div className="flex items-center gap-3">
        {!is_side_bar_open && (
          <button
            onClick={onToggleSidebar}
            className="lg:hidden text-2xl p-2 rounded-lg hover:bg-gray-200 transition"
          >
            <FaBars />
          </button>
        )}
      </div>

      {/* وسط: خوش‌آمدگویی + breadcrumb */}
      <div className="flex flex-col justify-center items-start flex-1 px-4">
        <span className="block text-md font-bold text-[var(--primary)]">
          خوش آمدی، {greeting}
          {user?.first_name ? ` ${user.first_name}` : ""}
        </span>

        <div className="text-xs sm:text-sm text-gray-300 pt-3 md:pt-6">
          {breadcrumbs.join(" / ")}
        </div>
      </div>

      {/* سمت راست: اطلاعات کاربر */}
      <div className="flex items-center gap-2 sm:gap-4">
        {user && (
          <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 px-2 py-1 rounded-full transition">
            <span className="text-xs sm:text-sm font-medium">
              {user.first_name || ""} {user.last_name || ""}
            </span>
            <FaUserCircle className="text-xl sm:text-2xl text-purple-700" />
          </div>
        )}
      </div>
    </header>
  );
}
