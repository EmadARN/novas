"use client";
import React, { useEffect, useState } from "react";
import CoursesTable from "@/features/dashboard-user/components/DeskPage/CoursesTable";
import DashboardCards from "@/features/dashboard-user/components/DeskPage/DashboardCards";
import { cards } from "@/features/dashboard-user/constats";
import DashboardCharts from "@/features/dashboard-user/components/DeskPage/DashboardCharts";
import {
  getCourses,
  getTextBooks,
  getUserExams,
} from "@/features/dashboard-user/services/home.api";
import {
  getSubscriptions,
  getTransactions,
} from "@/features/dashboard-user/services/finance.api";

const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  const [exams, setExams] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [textbooks, setTextBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [
          coursesData,
          examsData,
          subscriptionsData,
          transactionsData,
          textbooksData,
        ] = await Promise.all([
          getCourses(),
          getUserExams(),
          getSubscriptions(),
          getTransactions(),
          getTextBooks(),
        ]);
        setCourses(coursesData);
        setExams(examsData);
        setSubscriptions(subscriptionsData);
        setTransactions(transactionsData);
        setTextBooks(textbooksData);
      } catch (error) {
        console.error(error);
        toast.error("خطا در دریافت اطلاعات");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const cardData = [
    {
      title: "دوره‌ها",
      count: courses.length,
      icon: "📚",
      color: "from-green-500 to-green-600",
      onClick: () =>
        openPreview({
          type: "courses",
          count: courses.length,
          details: "کل دوره‌های شما",
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
          details: "کل آزمون‌های شما",
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
          details: "اشتراک‌های فعال شما",
        }),
    },
    {
      title: "کتاب‌ها",
      count: textbooks.length,
      icon: "📖",
      color: "from-blue-500 to-blue-600",
      onClick: () =>
        openPreview({
          type: "textbooks",
          count: textbooks.length,
          details: "کتاب‌های شما",
        }),
    },
  ];

  return (
    <div className="container mx-autospace-y-8 p-6">
      <DashboardCards cards={cardData} />

      <DashboardCharts
        spendingData={{ labels: [], datasets: [] }}
        subscriptionData={{ labels: [], datasets: [] }}
      />

      <CoursesTable columns={[]} data={[]} />
    </div>
  );
};

export default Dashboard;
