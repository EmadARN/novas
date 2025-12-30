"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { toast } from "react-toastify";
import UserTable from "@/shared/components/UserTable";

import { getUsers } from "../services/user.api";
import { getCourses } from "../services/course.api";
import { getExams } from "../services/exam.api";
import { getTransactions } from "../services/transaction.api";
import { getSubscriptions } from "../services/subscription.api";

import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

const Desk = () => {
  // =======================
  // State
  // =======================
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [exams, setExams] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewData, setPreviewData] = useState(null);

  // =======================
  // Fetch Data
  // =======================
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          usersData,
          coursesData,
          examsData,
          subscriptionsData,
          transactionsData,
        ] = await Promise.all([
          getUsers(),
          getCourses(),
          getExams(),
          getSubscriptions(),
          getTransactions(),
        ]);

        setUsers(usersData);
        setCourses(coursesData);
        setExams(examsData);
        setSubscriptions(subscriptionsData);
        setTransactions(transactionsData);
      } catch (error) {
        console.error(error);
        toast.error("خطا در دریافت اطلاعات");
      }
    };

    fetchData();
  }, []);

  // =======================
  // Preview handlers
  // =======================
  const openPreview = useCallback((data) => {
    setPreviewData(data);
    setPreviewOpen(true);
  }, []);

  const closePreview = useCallback(() => {
    setPreviewOpen(false);
    setPreviewData(null);
  }, []);

  // =======================
  // Cards
  // =======================
  const cardData = useMemo(
    () => [
      {
        title: "کاربران",
        count: users.length,
        icon: "👥",
        color: "from-blue-500 to-blue-600",
        onClick: () =>
          openPreview({
            type: "users",
            count: users.length,
            details: "کل کاربران ثبت‌شده",
          }),
      },
      {
        title: "دوره‌ها",
        count: courses.length,
        icon: "📚",
        color: "from-green-500 to-green-600",
        onClick: () =>
          openPreview({
            type: "courses",
            count: courses.length,
            details: "کل دوره‌های آموزشی",
          }),
      },
      {
        title: "اشتراک‌ها",
        count: subscriptions.length,
        icon: "🎟️",
        color: "from-yellow-400 to-yellow-500",
        onClick: () =>
          openPreview({
            type: "subscriptions",
            count: subscriptions.length,
            details: "اشتراک‌های فعال",
          }),
      },
      {
        title: "آزمون‌ها",
        count: exams.length,
        icon: "📝",
        color: "from-purple-500 to-purple-600",
        onClick: () =>
          openPreview({
            type: "exams",
            count: exams.length,
            details: "کل آزمون‌ها",
          }),
      },
    ],
    [users, courses, exams, subscriptions, openPreview]
  );

  // =======================
  // Charts data
  // =======================
  const incomeChartData = useMemo(() => {
    const incomeData = transactions.reduce((acc, t) => {
      const date = new Date(t.create_at).toLocaleDateString("fa-IR");
      acc[date] = (acc[date] || 0) + t.amount;
      return acc;
    }, {});

    return {
      labels: Object.keys(incomeData),
      datasets: [
        {
          label: "درآمد (ریال)",
          data: Object.values(incomeData),
          borderColor: "#4ade80",
          backgroundColor: "rgba(74, 222, 128, 0.2)",
          tension: 0.4,
          fill: true,
        },
      ],
    };
  }, [transactions]);

  const userTypeChartData = useMemo(() => {
    const userTypes = users.reduce(
      (acc, user) => {
        acc[user.role] = (acc[user.role] || 0) + 1;
        return acc;
      },
      { admin: 0, student: 0, customer: 0 }
    );

    return {
      labels: ["ادمین", "دانشجو", "مشتری"],
      datasets: [
        {
          data: [userTypes.admin, userTypes.student, userTypes.customer],
          backgroundColor: ["#F87171", "#60A5FA", "#FACC15"],
        },
      ],
    };
  }, [users]);

  // =======================
  // User table config
  // =======================
  const userTableHead = useMemo(
    () => [
      {
        columnName: "نام کاربری",
        type: "string",
        name: "username",
        render: (v) => v || "ناشناس",
      },
      {
        columnName: "ایمیل",
        type: "string",
        name: "email",
      },
      {
        columnName: "نقش",
        type: "string",
        name: "role",
        render: (v, u) =>
          u.is_staff ? "ادمین" : u.is_student ? "دانشجو" : "مشتری",
      },
      {
        columnName: "تاریخ ثبت‌نام",
        type: "string",
        name: "date_joined",
        render: (v) => new Date(v).toLocaleString("fa-IR"),
      },
      {
        columnName: "جزئیات",
        type: "iconButton",
        buttonIcon: <span>👁️</span>,
        onClick: (u) =>
          openPreview({
            type: "user",
            data: u,
            details: `کاربر: ${u.username}`,
          }),
      },
    ],
    [openPreview]
  );

  // =======================
  // Render
  // =======================
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-r ${card.color} p-6 rounded-xl shadow-xl transform hover:scale-105 transition-transform cursor-pointer text-white`}
            onClick={card.onClick}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold opacity-80">{card.title}</p>
                <p className="text-3xl font-bold">{card.count}</p>
              </div>
              <span className="text-4xl">{card.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4">درآمد روزانه</h2>
          <Line
            data={incomeChartData}
            options={{
              responsive: true,
              plugins: { legend: { position: "top" } },
              scales: { y: { beginAtZero: true }, x: {} },
            }}
          />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4">انواع کاربران</h2>
          <Pie
            data={userTypeChartData}
            options={{
              responsive: true,
              plugins: { legend: { position: "top" } },
            }}
          />
        </div>
      </div>

      {/* User Table */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
        <UserTable
          tableHead={userTableHead}
          tableData={users}
          title="لیست کاربران"
          description="تمام کاربران ثبت‌شده"
          filterField="username"
        />
      </div>

      {/* Preview Dialog */}
      {previewOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-2xl max-w-lg w-full animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4">
              {previewData.type === "user" ? "جزئیات کاربر" : previewData.type}
            </h2>

            {previewData.type !== "user" ? (
              <div className="space-y-2 text-gray-700">
                <p>تعداد: {previewData.count}</p>
                <p>{previewData.details}</p>
              </div>
            ) : (
              <div className="space-y-2 text-gray-700">
                <p>نام کاربری: {previewData.data.username}</p>
                <p>ایمیل: {previewData.data.email}</p>
                <p>
                  نقش:{" "}
                  {previewData.data.is_staff
                    ? "ادمین"
                    : previewData.data.is_student
                    ? "دانشجو"
                    : "مشتری"}
                </p>
                <p>
                  تاریخ ثبت‌نام:{" "}
                  {new Date(previewData.data.date_joined).toLocaleString(
                    "fa-IR"
                  )}
                </p>
              </div>
            )}

            <div className="flex justify-end mt-4">
              <button
                onClick={closePreview}
                className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition"
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Desk;
