"use client";
import React, { useState } from "react";
import DashboardCharts from "@/features/dashboard-user/components/DeskPage/container/DashboardCharts";
import CoursesTable from "@/features/dashboard-user/components/DeskPage/CoursesTable";
import DashboardCards from "@/features/dashboard-user/components/DeskPage/DashboardCards";
import { cards } from "@/features/dashboard-user/constats";

const Dashboard = () => {
  return (
    <div className="container mx-autospace-y-8 p-6">
      <DashboardCards cards={cards} />

      <DashboardCharts
        spendingData={{ labels: [], datasets: [] }}
        subscriptionData={{ labels: [], datasets: [] }}
      />

      <CoursesTable columns={[]} data={[]} />
    </div>
  );
};

export default Dashboard;
