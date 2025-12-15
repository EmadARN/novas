export const menuItemsList = [
  {
    name: "میزکار",
    url: "/admin-dashboard",
    icon: <FaHome />,
    have_child: false,
  },
  {
    name: "مدیریت کاربران",
    url: "#",
    icon: <FaUsers />,
    have_child: true,
    children: [
      {
        name: "کاربران",
        url: "/admin-dashboard/users",
        icon: <FaUsers />,
        have_child: false,
      },
      {
        name: "اطلاعات دانش آموزان",
        url: "/admin-dashboard/student-information",
        icon: <FaUsers />,
        have_child: false,
      },
      {
        name: "اساتید",
        url: "/admin-dashboard/teacher",
        icon: <FaChalkboardTeacher />,
        have_child: false,
      },
    ],
  },
  {
    name: "مدیریت محتوا",
    url: "#",
    icon: <FaBook />,
    have_child: true,
    children: [
      {
        name: "دوره ها",
        url: "/admin-dashboard/course",
        icon: <FaBook />,
        have_child: false,
      },
      {
        name: "دسته بندی دوره ها",
        url: "/admin-dashboard/category",
        icon: <FaBook />,
        have_child: false,
      },
      {
        name: "جزوه ها",
        url: "/admin-dashboard/textbook",
        icon: <FaFileAlt />,
        have_child: false,
      },
    ],
  },
  {
    name: "مدیریت آزمون",
    url: "#",
    icon: <FaClipboardList />,
    have_child: true,
    children: [
      {
        name: "آزمون",
        url: "/admin-dashboard/exam",
        icon: <FaClipboardList />,
        have_child: false,
      },
      {
        name: "نتایج آزمون",
        url: "/admin-dashboard/exam-session",
        icon: <FaClipboardList />,
        have_child: false,
      },
    ],
  },
  {
    name: "اشتراک کاربران",
    url: "/admin-dashboard/subscription",
    icon: <FaMoneyBillWave />,
    have_child: false,
  },
  {
    name: "تراکنش های مالی",
    url: "/admin-dashboard/transaction",
    icon: <FaMoneyBillWave />,
    have_child: false,
  },
  {
    name: "سوالات متداول",
    url: "/admin-dashboard/faq",
    icon: <FaQuestionCircle />,
    have_child: false,
  },
  {
    name: "نظرات",
    url: "/admin-dashboard/comment",
    icon: <FaComments />,
    have_child: false,
  },
];
