"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// داده‌های پیش‌فرض فارسی
const defaultAccordionData = [
  {
    id: "ac-1",
    title: "درباره ما",
    content:
      "ما یک تیم حرفه‌ای هستیم که به توسعه نرم‌افزارهای مدرن می‌پردازیم. هدف ما ارائه بهترین راهکارها و خدمات با کیفیت برای مشتریانمان است.",
  },
  {
    id: "ac-2",
    title: "نحوه کار ما",
    content:
      "ما ابتدا نیازهای مشتری را تحلیل کرده و سپس با استفاده از تکنولوژی‌های روز دنیا، راهکارهایی کارآمد و سفارشی ارائه می‌کنیم. همکاری، شفافیت و خلاقیت اصول اصلی ما هستند.",
  },
  {
    id: "ac-3",
    title: "نمونه کارها",
    content:
      "ما پروژه‌های متعددی در زمینه وب، موبایل و نرم‌افزارهای سازمانی انجام داده‌ایم. نمونه کارها شامل سیستم‌های مدیریت محتوا، اپلیکیشن‌های موبایل و داشبوردهای مدیریتی است.",
  },
  {
    id: "ac-4",
    title: "تماس با ما",
    content:
      "برای دریافت مشاوره و اطلاعات بیشتر می‌توانید با تیم پشتیبانی ما تماس بگیرید. شماره تماس: ۰۲۱-۱۲۳۴۵۶۷۸، ایمیل: info@example.com",
  },
];

export default function Accordion({ data = defaultAccordionData }) {
  const [activeId, setActiveId] = useState(data[0].id);
  const contentRefs = useRef({});

  // محاسبه ارتفاع خودکار هر آیتم
  const [heights, setHeights] = useState({});

  useEffect(() => {
    const newHeights = {};
    Object.keys(contentRefs.current).forEach((key) => {
      if (contentRefs.current[key]) {
        newHeights[key] = contentRefs.current[key].scrollHeight;
      }
    });
    setHeights(newHeights);
  }, [data]);

  return (
    <section
      className="ac-container max-w-2xl mx-auto my-8 px-4 sm:px-6 md:px-0 text-right"
      dir="rtl"
    >
      {data.map((item) => (
        <div key={item.id} className="mb-3">
          <input
            type="radio"
            name="accordion-1"
            id={item.id}
            className="hidden"
            checked={activeId === item.id}
            onChange={() => setActiveId(item.id)}
          />
          <label
            htmlFor={item.id}
            className="relative z-20 block cursor-pointer bg-white bg-gradient-to-b from-white to-gray-200 text-[var(--primary)] font-bold font-sans text-lg sm:text-base md:text-lg leading-7 sm:leading-6 md:leading-7 shadow-sm px-4 sm:px-5 py-2 sm:py-2 rounded-md"
          >
            {item.title}
          </label>

          <AnimatePresence initial={false}>
            {activeId === item.id && (
              <motion.article
                ref={(el) => (contentRefs.current[item.id] = el)}
                className="bg-white/50 overflow-hidden relative z-10 rounded-b-md"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: heights[item.id] || "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="p-4 sm:p-5 text-gray-700 text-sm sm:text-base leading-6 sm:leading-7">
                  {item.content}
                </div>
              </motion.article>
            )}
          </AnimatePresence>
        </div>
      ))}
    </section>
  );
}
