"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { toast } from "react-toastify";
import { DollarSign } from "lucide-react";
import {
  getSubscriptions,
  getTransactions,
  payInstallment,
} from "../../services/finance.api";

import FinancialTabs from "./FinancialTabs";
import FinancialTable from "./FinancialTable";
import FinancialDialog from "./FinancialDialog";
import {
  TABS,
  transactionTableHead,
  subscriptionTableHead,
  installmentTableHead,
} from "../../constats";

const Financial = () => {
  const [activeTab, setActiveTab] = useState("transactions");
  const [transactions, setTransactions] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [installmentPayments, setInstallmentPayments] = useState([]);

  const [dialogType, setDialogType] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* -------------------- data fetching -------------------- */
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [transactionsData, subscriptionsData] = await Promise.all([
          getTransactions(),
          getSubscriptions(),
        ]);
        setTransactions(transactionsData || []);
        setSubscriptions(subscriptionsData || []);

        const allInstallments =
          subscriptionsData
            ?.filter((sub) => sub.payment_type === "installment")
            .flatMap((sub) => sub.installment_payments || []) || [];

        setInstallmentPayments(allInstallments);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("خطا در دریافت اطلاعات");
        toast.error("خطا در دریافت اطلاعات");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  /* -------------------- handlers -------------------- */
  const openDialog = useCallback((type, item) => {
    setDialogType(type);
    setSelectedItem(item);
  }, []);

  const handlePayInstallment = async (installment) => {
    try {
      await payInstallment(installment.id);
      setInstallmentPayments((prev) =>
        prev.map((i) => (i.id === installment.id ? { ...i, is_paid: true } : i))
      );
      toast.success("قسط با موفقیت پرداخت شد");
      setDialogType("");
      setSelectedItem(null);
    } catch (err) {
      console.error("Error paying installment:", err);
      toast.error("خطا در پرداخت قسط");
    }
  };

  /* -------------------- derived data -------------------- */
  const tableConfig = useMemo(() => {
    switch (activeTab) {
      case "transactions":
        return {
          data: transactions,
          head: transactionTableHead,
          title: "تراکنش‌های مالی",
          description: "لیست تراکنش‌های کاربران",
          filterField: "description",
        };
      case "subscriptions":
        return {
          data: subscriptions,
          head: subscriptionTableHead(openDialog),
          title: "اشتراک‌ها",
          description: "لیست اشتراک‌های کاربران در دوره‌ها",
          filterField: "course_detail.title",
        };
      case "installments":
        return {
          data: installmentPayments,
          head: installmentTableHead(openDialog),
          title: "اقساط پرداختی",
          description: "لیست اقساط مربوط به اشتراک‌های قسطی",
          filterField: "subscription.course_detail.title",
        };
      default:
        return {};
    }
  }, [activeTab, transactions, subscriptions, installmentPayments, openDialog]);

  /* -------------------- loading -------------------- */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-6 h-6 border-2 border-purple-200 border-t-purple-600 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-6 px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-[var(--primary)] flex items-center gap-2">
            <DollarSign className="w-5 h-5" />
            امور مالی
          </h1>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-100 rounded-lg p-3 mb-4">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        <FinancialTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={TABS}
        />
        <FinancialTable tableConfig={tableConfig} />
        <FinancialDialog
          dialogType={dialogType}
          selectedItem={selectedItem}
          setDialogOpen={setDialogType}
          handlePayInstallment={handlePayInstallment}
        />
      </div>
    </div>
  );
};

export default Financial;
