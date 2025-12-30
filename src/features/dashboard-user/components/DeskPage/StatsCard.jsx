import React from "react";

const ACCENT_MAP = {
  green: {
    bgSoft: "bg-green-50",
    text: "text-green-600",
    iconBg: "bg-green-100",
    bar: "bg-green-500",
  },
  purple: {
    bgSoft: "bg-purple-50",
    text: "text-purple-600",
    iconBg: "bg-purple-100",
    bar: "bg-purple-500",
  },
  blue: {
    bgSoft: "bg-blue-50",
    text: "text-blue-600",
    iconBg: "bg-blue-100",
    bar: "bg-blue-500",
  },
  amber: {
    bgSoft: "bg-amber-50",
    text: "text-amber-600",
    iconBg: "bg-amber-100",
    bar: "bg-amber-500",
  },
};

const StatsCard = ({
  title,
  count,
  icon: Icon,
  accent = "red",

}) => {
  const c = ACCENT_MAP[accent] ?? ACCENT_MAP.blue;

  return (
    <div

      className={"group cursor-pointer rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="mt-1 text-3xl font-semibold text-gray-900">
            {count}
          </p>
        </div>

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${c.iconBg} ${c.text} transition group-hover:scale-105`}
        >
          <Icon size={22} />
        </div>
      </div>

   
    </div>
  );
};

export default StatsCard;
