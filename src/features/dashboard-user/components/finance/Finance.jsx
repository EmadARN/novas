"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { toast } from "react-toastify";
import { DollarSign, CreditCard, Receipt } from "lucide-react";
import Dialog from "@/shared/components/Dialog";
import {
  getSubscriptions,
  getTransactions,
  payInstallment,
} from "../../services/finance.api";
import UserTable from "../DeskPage/UserTable";

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

const Financial = () => {
  const [activeTab, setActiveTab] = useState("transactions");
  const [transactions, setTransactions] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [installmentPayments, setInstallmentPayments] = useState([]);

  const [dialogOpen, setDialogOpen] = useState(false);
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
    setDialogOpen(true);
  }, []);

  const handlePayInstallment = async (installment) => {
    try {
      await payInstallment(installment.id);

      setInstallmentPayments((prev) =>
        prev.map((i) => (i.id === installment.id ? { ...i, is_paid: true } : i))
      );

      toast.success("قسط با موفقیت پرداخت شد");
      setDialogOpen(false);
      setSelectedItem(null);
    } catch (err) {
      console.error("Error paying installment:", err);
      toast.error("خطا در پرداخت قسط");
    }
  };

  /* -------------------- table heads -------------------- */
  const transactionTableHead = useMemo(
    () => [
      {
        columnName: "کاربر",
        type: "string",
        name: "user__username",
        format: (v) => v || "ناشناس",
      },
      {
        columnName: "مبلغ (ریال)",
        type: "float",
        name: "amount",
        format: (v) => v.toLocaleString("fa-IR"),
      },
      { columnName: "توضیحات", type: "string", name: "description" },
      { columnName: "کد تراکنش", type: "string", name: "transaction_code" },
      {
        columnName: "تاریخ",
        type: "string",
        name: "created_at",
        format: (v) => new Date(v).toLocaleString("fa-IR"),
      },
    ],
    []
  );

  const subscriptionTableHead = useMemo(
    () => [
      {
        columnName: "کاربر",
        type: "string",
        name: "user_detail__username",
        format: (v) => v || "ناشناس",
      },
      { columnName: "دوره", type: "string", name: "course_detail__title" },
      {
        columnName: "نوع پرداخت",
        type: "string",
        name: "payment_type_display",
      },
      {
        columnName: "تاریخ",
        type: "string",
        name: "create_at",
        format: (v) => new Date(v).toLocaleString("fa-IR"),
      },
      {
        columnName: "جزئیات",
        type: "button",
        buttonName: "مشاهده",
        onClick: (sub) => openDialog("view_subscription", sub),
      },
    ],
    [openDialog]
  );

  const installmentTableHead = useMemo(
    () => [
      {
        columnName: "کاربر",
        type: "string",
        name: "subscription__user__username",
        format: (v) => v || "ناشناس",
      },
      {
        columnName: "دوره",
        type: "string",
        name: "subscription__course__title",
      },
      {
        columnName: "مبلغ (ریال)",
        type: "float",
        name: "amount",
        format: (v) => v.toLocaleString("fa-IR"),
      },
      { columnName: "سررسید", type: "string", name: "payment_due_date" },
      {
        columnName: "وضعیت",
        type: "string",
        name: "is_paid",
        format: (v) => (v ? "✓" : "✗"),
      },
      {
        columnName: "پرداخت",
        type: "button",
        buttonName: "پرداخت",
        onClick: (ins) => !ins.is_paid && openDialog("pay_installment", ins),
      },
    ],
    [openDialog]
  );

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
          head: subscriptionTableHead,
          title: "اشتراک‌ها",
          description: "لیست اشتراک‌های کاربران در دوره‌ها",
          filterField: "course_detail.title",
        };
      case "installments":
        return {
          data: installmentPayments,
          head: installmentTableHead,
          title: "اقساط پرداختی",
          description: "لیست اقساط مربوط به اشتراک‌های قسطی",
          filterField: "subscription.course_detail.title",
        };
      default:
        return {};
    }
  }, [
    activeTab,
    transactions,
    subscriptions,
    installmentPayments,
    transactionTableHead,
    subscriptionTableHead,
    installmentTableHead,
  ]);

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
          <h1 className="text-2xl font-semibold text-purple-900 flex items-center gap-2">
            <DollarSign className="w-5 h-5" />
            امور مالی
          </h1>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-100 rounded-lg p-3 mb-4">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        {/* Tabs */}
        <div className="bg-white rounded-xl p-4 mb-6 border border-gray-100">
          <div className="flex border-b border-gray-200">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`
                  flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-t-lg transition-colors
                  ${
                    activeTab === tab.key
                      ? "bg-purple-900 text-white"
                      : "text-gray-600 hover:text-purple-600 hover:bg-gray-50"
                  }
                `}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <UserTable
            tableHead={tableConfig.head}
            tableData={tableConfig.data}
            title={tableConfig.title}
            description={tableConfig.description}
            filterField={tableConfig.filterField}
          />
        </div>

        {/* Dialog */}
        <Dialog
          dialogId="financial-dialog"
          isOpen={dialogOpen}
          setIsOpen={() => setDialogOpen(false)}
          title={
            dialogType === "view_subscription"
              ? "جزئیات اشتراک"
              : dialogType === "pay_installment"
              ? "تأیید پرداخت قسط"
              : ""
          }
        >
          {dialogType === "view_subscription" && selectedItem && (
            <div className="p-4 space-y-3 text-sm">
              <p>
                <span className="font-medium">کاربر:</span>{" "}
                {selectedItem.user_detail?.username || "ناشناس"}
              </p>
              <p>
                <span className="font-medium">دوره:</span>{" "}
                {selectedItem.course_detail?.title}
              </p>
              <p>
                <span className="font-medium">نوع پرداخت:</span>{" "}
                {selectedItem.payment_type_display}
              </p>
              <p>
                <span className="font-medium">تاریخ:</span>{" "}
                {selectedItem.create_at &&
                  new Date(selectedItem.create_at).toLocaleString("fa-IR")}
              </p>
            </div>
          )}

          {dialogType === "pay_installment" && selectedItem && (
            <div className="p-4 text-sm">
              <p className="mb-4">
                آیا از پرداخت قسط
                <span className="font-bold mx-1">
                  {selectedItem.amount.toLocaleString("fa-IR")}
                </span>
                ریالی برای دوره
                <span className="font-bold mx-1">
                  {selectedItem.subscription.course_detail?.title}
                </span>
                مطمئن هستید؟
              </p>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setDialogOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  خیر
                </button>
                <button
                  onClick={() => handlePayInstallment(selectedItem)}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  بله
                </button>
              </div>
            </div>
          )}
        </Dialog>
      </div>
    </div>
  );
};

export default Financial;
