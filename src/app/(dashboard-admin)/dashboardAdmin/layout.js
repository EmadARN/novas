"use client";
import Sidebar from "@/shared/components/dashboardLayout/Sidebar";
import DashboardHeader from "@/shared/components/dashboardLayout/DashboardHeader";
import { useState } from "react";
import { menuItemsList } from "@/features/dashboard-admin/constants";

export default function AdminDashboardLayout({ children }) {
  const [sideBarStatus, setSideBarStatus] = useState(false);

  return (
    <div className="flex h-screen w-full bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        is_menu_open={sideBarStatus}
        onToggleSidebar={() => setSideBarStatus(!sideBarStatus)}
        menu_items_list={menuItemsList}
      />

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col relative ${
          sideBarStatus ? "lg:mr-64" : ""
        } transition-all duration-300`}
      >
        <DashboardHeader
          is_side_bar_open={sideBarStatus}
          onToggleSidebar={() => setSideBarStatus(!sideBarStatus)}
        />
        <main
          className={`shadow-2xl fixed left-0 flex-1 overflow-y-auto mx-0 lg:mx-5 mt-24 p-6 lg:p-8 bg-white w-full lg:w-[81%] ${
            sideBarStatus ? "z-40" : "z-80"
          } transition-all duration-300`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
