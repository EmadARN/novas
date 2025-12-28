"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { API_CORE_URL } from "@/lib/api"; 

export default function DashboardHeader({ is_side_bar_open, onToggleSidebar }) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState("Dashboard");
  const [breadcrumbs, setBreadcrumbs] = useState(["Home", "Dashboard"]);

  const persianDate = new Intl.DateTimeFormat("fa-IR", {
    dateStyle: "full",
  }).format(new Date());

  useEffect(() => {
    const checkAuth = async () => {
      setIsLoading(true);

      const accessToken = localStorage.getItem("access_token");
      const role = localStorage.getItem("role");

      //   if (!accessToken) {
      //     router.push("/");
      //     return;
      //   }

      try {
        const response = await axios.get(`${API_CORE_URL}auth/profile/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          timeout: 5000,
        });

        setUser(response.data);

        // if (pathname.includes("admin-dashboard") && role === "admin") {
        //   return;
        // } else if (pathname.includes("dashboard") && role === "student") {
        //   return;
        // } else {
        //   router.push("/");
        // }
      } catch (error) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        // router.push("/");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [pathname, router]);

  useEffect(() => {
    const parts = pathname.split("/").filter(Boolean);

    const crumbs = [
      "Home",
      ...parts.map((p) => p.charAt(0).toUpperCase() + p.slice(1)),
    ];
    setBreadcrumbs(crumbs);

    const pageName = parts.length > 0 ? parts[parts.length - 1] : "Dashboard";

    setCurrentPage(pageName.charAt(0).toUpperCase() + pageName.slice(1));
  }, [pathname]);

  if (isLoading) return null;

  return (
    <header className="fixed top-2  z-40 h-20 w-full bg-white text-gray-800 shadow-md flex items-center justify-between px-4">
      <div className="flex items-center">
        {!is_side_bar_open && (
          <button
            onClick={onToggleSidebar}
            className="lg:hidden text-2xl p-2 rounded-lg hover:bg-gray-200 transition"
          >
            <FaBars />
          </button>
        )}
      </div>

      <div className="flex flex-col justify-center items-start flex-1 px-4">
        <div className="text-base sm:text-lg font-semibold text-gray-800">
          {currentPage}
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-600">
          <span>{breadcrumbs.join(" / ")}</span>
          <span className="hidden sm:inline">•</span>
          <span className="text-gray-500">{persianDate}</span>
        </div>
      </div>

      {/* سمت راست - اطلاعات کاربر */}
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
