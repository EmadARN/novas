"use client";

import React from "react";
import Dialog from "../../Dialog";

const FinancialDialog = ({
  dialogType,
  selectedItem,
  setDialogOpen,
  handlePayInstallment,
}) => (
  <Dialog
    dialogId="financial-dialog"
    isOpen={!!dialogType}
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
);

export default FinancialDialog;
