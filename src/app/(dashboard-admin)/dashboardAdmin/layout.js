"use client";
import Sidebar from "@/shared/components/dashboardLayout/Sidebar";
import DashboardHeader from "@/shared/components/dashboardLayout/DashboardHeader";
import { useState } from "react";
import { menuItemsList } from "@/features/dashboard-admin/constants";

export default function Dashboardlayout({ children }) {
  const [sideBarStatus, setSideBarStatus] = useState(false);

  return (
    <div className="flex h-screen w-full bg-gray-100 ">
      {sideBarStatus && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSideBarStatus(false)}
        />
      )}

      {/*  Sidebar */}
      <aside
        className={`
          
    fixed lg:static top-0 right-0
    h-full w-64 bg-white z-50
    transform transition-transform duration-300
    lg:translate-x-0
    ${sideBarStatus ? "translate-x-0" : "translate-x-full"}
  `}
      >
        <Sidebar
          is_menu_open={sideBarStatus}
          onToggleSidebar={() => setSideBarStatus(!sideBarStatus)}
          menu_items_list={menuItemsList}
        />
      </aside>

      <div className="flex-1  flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-30">
          <DashboardHeader
            is_side_bar_open={sideBarStatus}
            onToggleSidebar={() => setSideBarStatus(!sideBarStatus)}
          />
        </div>

        <main className="flex-1  overflow-y-auto px-4 py-6 mt-24 ">
          {children}
        </main>
      </div>
    </div>
  );
}
