"use client";
import React, { useEffect, useState } from "react";
import CoursesTable from "@/features/dashboard-user/components/DeskPage/CoursesTable";
import DashboardCards from "@/features/dashboard-user/components/DeskPage/DashboardCards";
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
import { toast } from "react-toastify";
import { BookOpen, ClipboardList, CreditCard, Book } from "lucide-react";
import { coursesColumns } from "@/features/dashboard-user/constats";

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
        setCourses(coursesData ?? []);
        setExams(examsData ?? []);
        setSubscriptions(subscriptionsData ?? []);
        setTransactions(transactionsData ?? []);
        setTextBooks(textbooksData ?? []);
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
      icon: BookOpen,
      accent: "green",
    },
    {
      title: "آزمون‌ها",
      count: exams?.length ?? 0,
      icon: ClipboardList,
      accent: "purple",
    },
    {
      title: "اشتراک‌ها",
      count: subscriptions.length,
      icon: CreditCard,
      accent: "amber",
    },
    {
      title: "کتاب‌ها",
      count: textbooks.length,
      icon: Book,
      accent: "blue",
    },
  ];

  const spendingData = transactions.reduce((acc, t) => {
    const date = new Date(t.create_at).toLocaleDateString("fa-IR");
    acc[date] = (acc[date] || 0) + t.amount;
    return acc;
  }, {});

  const spendingChartData = {
    labels: Object.keys(spendingData),
    datasets: [
      {
        label: "هزینه (ریال)",
        data: Object.values(spendingData),
        borderColor: "#4ade80",
        backgroundColor: "rgba(74, 222, 128, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const subscriptionStatus = subscriptions.reduce(
    (acc, sub) => {
      const status = sub.is_active ? "فعال" : "منقضی";
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    },
    { فعال: 0, منقضی: 0 }
  );
  const subscriptionChartData = {
    labels: ["فعال", "منقضی"],
    datasets: [
      {
        data: [subscriptionStatus.فعال, subscriptionStatus.منقضی],
        backgroundColor: ["#10B981", "#EF4444"],
      },
    ],
  };

  return (
    <div className="container mx-autospace-y-8 p-6">
      <DashboardCards cards={cardData} />

      <DashboardCharts
        spendingData={spendingChartData}
        subscriptionData={subscriptionChartData}
      />

      <CoursesTable columns={coursesColumns} data={courses} />
    </div>
  );
};

export default Dashboard;
