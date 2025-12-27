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
      title: "کتاب‌ها",
      count: 3,
      icon: "📖",
      color: "from-blue-500 to-blue-600",
   
    },
  ];
