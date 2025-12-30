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
    url: "/dashboardAdmin",
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
        url: "/dashboardAdmin/users",
        icon: <Users size={18} />,
        have_child: false,
      },
      {
        name: "اطلاعات دانش آموزان",
        url: "/dashboardAdmin/student-information",
        icon: <Users size={18} />,
        have_child: false,
      },
      {
        name: "اساتید",
        url: "/dashboardAdmin/teacher",
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
        url: "/dashboardAdmin/course",
        icon: <BookOpen size={18} />,
        have_child: false,
      },
      {
        name: "دسته بندی دوره ها",
        url: "/dashboardAdmin/category",
        icon: <BookOpen size={18} />,
        have_child: false,
      },
      {
        name: "جزوه ها",
        url: "/dashboardAdmin/textbook",
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
        url: "/dashboardAdmin/exam",
        icon: <ClipboardList size={18} />,
        have_child: false,
      },
      {
        name: "نتایج آزمون",
        url: "/dashboardAdmin/exam-session",
        icon: <ClipboardList size={18} />,
        have_child: false,
      },
    ],
  },
  {
    name: "اشتراک کاربران",
    url: "/dashboardAdmin/subscription",
    icon: <Wallet size={20} />,
    have_child: false,
  },
  {
    name: "تراکنش های مالی",
    url: "/dashboardAdmin/transaction",
    icon: <Wallet size={20} />,
    have_child: false,
  },
  {
    name: "سوالات متداول",
    url: "/dashboardAdmin/faq",
    icon: <HelpCircle size={20} />,
    have_child: false,
  },
  {
    name: "نظرات",
    url: "/dashboardAdmin/comment",
    icon: <MessageCircle size={20} />,
    have_child: false,
  },
];
