import {
  Home,
  BookOpen,
  Book,
  List,
  ClipboardList,
  Clipboard,
  PenTool,
  Wallet,
} from "lucide-react";
import { DollarSign, CreditCard, Receipt } from "lucide-react";

export const examInit = [
  {
    id: "1",
    exam: { title: "آزمون ریاضی" },
    score: 85.5,
    started_at: "2025-09-26T10:00:00",
    finished_at: "2025-09-26T11:00:00",
    is_finished: true,
    answered_data: {
      answered_list: {
        1: { selected_option: "A", correct_option: "A", is_correct: true },
        2: { selected_option: "B", correct_option: "C", is_correct: false },
      },
    },
  },
  {
    id: "2",
    exam: { title: "آزمون فیزیک" },
    score: 60.0,
    started_at: "2025-09-27T12:00:00",
    finished_at: null,
    is_finished: false,
    answered_data: {
      answered_list: {
        1: { selected_option: "C", correct_option: "C", is_correct: true },
      },
    },
  },
];

export const menuItemsList = [
  {
    name: "میزکار",
    url: "/dashboard",
    icon: <Home size={20} />,
    have_child: false,
  },
  {
    name: "دوره‌ها",
    url: "#",
    icon: <BookOpen size={20} />,
    have_child: true,
    children: [
      {
        name: "دوره‌های من",
        url: "/dashboard/courses/my",
        icon: <Book size={18} />,
        have_child: false,
      },
      {
        name: "همه‌ی دوره‌ها",
        url: "/dashboard/courses/all",
        icon: <List size={18} />,
        have_child: false,
      },
    ],
  },
  {
    name: "آزمون‌ها",
    url: "/dashboard/exam/all-exam",
    icon: <ClipboardList size={20} />,
    have_child: false,
    children: [
      {
        name: "همه‌ی آزمون‌ها",
        url: "/dashboard/exam/all-exam",
        icon: <Clipboard size={18} />,
        have_child: false,
      },
    ],
  },
  {
    name: "جزوه‌ها و دست‌نویس‌ها",
    url: "/dashboard/notes",
    icon: <PenTool size={20} />,
    have_child: false,
  },
  {
    name: "امور مالی",
    url: "/dashboard/finance",
    icon: <Wallet size={20} />,
    have_child: false,
  },
];

export const cards = [
  {
    title: "دوره‌ها",
    count: 4,
    icon: "📚",
    color: "from-green-500 to-green-600",
  },
  {
    title: "آزمون‌ها",
    count: 2,
    icon: "📝",
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "اشتراک‌ها",
    count: 1,
    icon: "🎟️",
    color: "from-yellow-400 to-yellow-500",
  },
  {
    title: "جزوه ها",
    count: 3,
    icon: "📖",
    color: "from-blue-500 to-blue-600",
  },
];

//Finance:

export const TABS = [
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

export const transactionTableHead = [
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
];

export const subscriptionTableHead = (openDialog) => [
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
];

export const installmentTableHead = (openDialog) => [
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
];
