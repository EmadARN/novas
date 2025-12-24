import {
  Home,
  Users,
  GraduationCap,
  BookOpen,
  FileText,
  ClipboardList,
  Wallet,
  HelpCircle,
  MessageCircle,
} from "lucide-react";

export const menuItemsList = [
  {
    name: "میزکار",
    url: "/admin-dashboard",
    icon: <Home size={20} />,
    have_child: false,
  },
  {
    name: "مدیریت کاربران",
    url: "#",
    icon: <Users size={20} />,
    have_child: true,
    children: [
      {
        name: "کاربران",
        url: "/admin-dashboard/users",
        icon: <Users size={18} />,
        have_child: false,
      },
      {
        name: "اطلاعات دانش آموزان",
        url: "/admin-dashboard/student-information",
        icon: <Users size={18} />,
        have_child: false,
      },
      {
        name: "اساتید",
        url: "/admin-dashboard/teacher",
        icon: <GraduationCap size={18} />,
        have_child: false,
      },
    ],
  },
  {
    name: "مدیریت محتوا",
    url: "#",
    icon: <BookOpen size={20} />,
    have_child: true,
    children: [
      {
        name: "دوره ها",
        url: "/admin-dashboard/course",
        icon: <BookOpen size={18} />,
        have_child: false,
      },
      {
        name: "دسته بندی دوره ها",
        url: "/admin-dashboard/category",
        icon: <BookOpen size={18} />,
        have_child: false,
      },
      {
        name: "جزوه ها",
        url: "/admin-dashboard/textbook",
        icon: <FileText size={18} />,
        have_child: false,
      },
    ],
  },
  {
    name: "مدیریت آزمون",
    url: "#",
    icon: <ClipboardList size={20} />,
    have_child: true,
    children: [
      {
        name: "آزمون",
        url: "/admin-dashboard/exam",
        icon: <ClipboardList size={18} />,
        have_child: false,
      },
      {
        name: "نتایج آزمون",
        url: "/admin-dashboard/exam-session",
        icon: <ClipboardList size={18} />,
        have_child: false,
      },
    ],
  },
  {
    name: "اشتراک کاربران",
    url: "/admin-dashboard/subscription",
    icon: <Wallet size={20} />,
    have_child: false,
  },
  {
    name: "تراکنش های مالی",
    url: "/admin-dashboard/transaction",
    icon: <Wallet size={20} />,
    have_child: false,
  },
  {
    name: "سوالات متداول",
    url: "/admin-dashboard/faq",
    icon: <HelpCircle size={20} />,
    have_child: false,
  },
  {
    name: "نظرات",
    url: "/admin-dashboard/comment",
    icon: <MessageCircle size={20} />,
    have_child: false,
  },
];
