"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { FaChevronDown, FaTimes, FaSignOutAlt } from "react-icons/fa";

export default function Sidebar({
  is_menu_open,
  onToggleSidebar,
  menu_items_list,
}) {
  const [openChild, setOpenChild] = useState(null);
  const pathname = usePathname();
  const router = useRouter();

  const toggleChild = (idx) => {
    setOpenChild((prev) => (prev === idx ? null : idx));
  };

  const handleLogout = () => {
    localStorage.clear();
    router.push("/");
  };

  const isActive = (item) =>
    pathname === item.url ||
    item.children?.some((child) => pathname === child.url);

  const renderMenuItems = () =>
    menu_items_list.map((item, idx) => (
      <li key={idx}>
        <Link href={item.url}>
          <button
            onClick={() => toggleChild(idx)}
            className={`flex items-center w-full px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer ${
              isActive(item)
                ? "bg-indigo-500 text-white shadow-md"
                : "text-gray-200 hover:bg-gray-600 hover:text-white"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="mr-2 flex-grow text-right font-medium capitalize">
              {item.name}
            </span>
            {item.have_child && (
              <FaChevronDown
                className={`text-sm transition-transform ${
                  openChild === idx ? "rotate-180" : ""
                }`}
              />
            )}
          </button>
        </Link>

        {item.have_child && openChild === idx && (
          <ul className="mr-6 mt-2 space-y-1">
            {item.children.map((child, childIdx) => (
              <li key={childIdx}>
                <Link href={child.url}>
                  <button
                    className={`flex items-center w-full px-4 py-2 rounded-xl transition-all cursor-pointer ${
                      pathname === child.url
                        ? "bg-indigo-400 text-white"
                        : "text-gray-300 hover:bg-gray-500 hover:text-white"
                    }`}
                  >
                    <span className="text-lg">{child.icon}</span>
                    <span className="mr-2 flex-grow text-right text-sm font-medium">
                      {child.name}
                    </span>
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    ));

  const SidebarContent = ({ isMobile = false }) => (
    <>
      {isMobile && (
        <button
          onClick={onToggleSidebar}
          className="fixed top-4 left-3 text-gray-300 text-lg"
        >
          <FaTimes />
        </button>
      )}

      <div
        className={`flex items-center justify-center ${
          isMobile ? "h-24 mt-12" : "h-28"
        } border-b border-gray-600`}
      >
        <Link href="/">
          <img src="/logo.webp" alt="Nova Wise Logo" className="h-44 w-auto" />
        </Link>
      </div>

      <ul className="mt-4 flex flex-col space-y-1 px-2 flex-grow">
        {renderMenuItems()}
      </ul>

      <div
        className={`p-4 border-t border-gray-600 ${
          isMobile ? "absolute bottom-0 w-full" : ""
        }`}
      >
        <button
          onClick={handleLogout}
          className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-red-800 hover:bg-red-700 text-white font-bold transition cursor-pointer"
        >
          <FaSignOutAlt />
          خروج
        </button>
      </div>
    </>
  );

  return (
    <>
      {is_menu_open && (
        <div className="inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"></div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex absolute top-0 right-0 h-full w-full z-50 flex-col bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 shadow-xl">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full z-50 lg:hidden transition-transform duration-300 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 shadow-xl ${
          is_menu_open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <SidebarContent isMobile />
      </div>
    </>
  );
}
