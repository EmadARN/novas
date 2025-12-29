"use client";

import React from "react";
import { DollarSign, CreditCard, Receipt } from "lucide-react";

const TABS = [
  {
    key: "transactions",
    label: "تراکنش‌ها",
    icon: <DollarSign className="w-4 h-4" />,
  },
  {
    key: "subscriptions",
    label: "اشتراک‌ها",
    icon: <CreditCard className="w-4 h-4" />,
  },
  {
    key: "installments",
    label: "اقساط",
    icon: <Receipt className="w-4 h-4" />,
  },
];

const FinancialTabs = ({ activeTab, setActiveTab }) => (
  <div className="bg-white rounded-xl p-4 mb-6 border border-gray-100">
    <div className="flex border-b border-gray-200">
      {TABS.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          className={`
            flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-t-lg transition-colors cursor-pointer
            ${
              activeTab === tab.key
                ? "bg-[var(--primary)] text-white "
                : "text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
            }
          `}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </div>
  </div>
);

export default FinancialTabs;
