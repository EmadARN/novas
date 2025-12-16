"use client";

import { useState } from "react";

export default function ExpandableCards({ cards, paragraphText }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section className="w-full max-w-2xl mx-auto mt-24 px-4">
      {/* دسکتاپ: افقی */}
      <ul className="hidden md:flex justify-center gap-2 list-none p-0">
        {cards.map((card, index) => (
          <li
            key={index}
            className={`cursor-pointer relative flex-shrink-0 overflow-hidden p-4 text-white rounded-lg transition-all duration-300 hover:w-[45%] flex flex-col bg-gradient-to-r
        from-[var(--primary)]
        to-[var(--accent)]
 ${index === 0 ? "rounded-l-xl" : ""} ${
              index === cards.length - 1 ? "rounded-r-xl" : ""
            } w-1/4 h-56`}
          >
            <b className="text-lg mb-2">{card.title}</b>
            <p className="text-sm leading-relaxed">{paragraphText}</p>
          </li>
        ))}
      </ul>

      {/* موبایل: عمودی */}
      <div className="block md:hidden">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => setExpandedIndex(index)}
            className={`cursor-pointer mb-2 rounded-lg overflow-hidden transition-all duration-500 ease-in-out bg-gradient-to-r
        from-[var(--primary)]
        to-[var(--accent)]`}
          >
            <div className="flex items-center justify-between p-5 text-white">
              <b className="text-lg">{card.title}</b>
              <span className="text-3xl font-light">
                {expandedIndex === index ? "−" : "+"}
              </span>
            </div>

            <div
              className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                expandedIndex === index
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-5 pb-6 text-white">
                <p className="text-sm leading-relaxed text-justify">
                  {paragraphText}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
