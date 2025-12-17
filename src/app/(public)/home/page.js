import React from "react";
import ExpandableCards from "@/features/core/components/Faqs";
import WhyNovaBest from "@/features/core/components/WhyNovaBest";
import CardItem from "@/shared/components/ui/Cards";
import SectionTitle from "@/shared/components/ui/Tiltes";
import HeroSection from "@/features/core/components/HeroSection";
import { cardsData } from "@/features/core/constants";

const cardsFromServer = [
  { title: "1. پاراگراف", color: "bg-[#1abc9c]" },
  { title: "2. پاراگراف", color: "bg-[#3498db]" },
  { title: "3. پاراگراف", color: "bg-[#e74c3c]" },
  { title: "4. پاراگراف", color: "bg-[#e67e22]" },
];

const paragraphFromServer = "متن نمونه پاراگراف که از سرور می‌آید.";

const Page = async () => {
  await new Promise((res) => setTimeout(res, 2000));

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center 
        bg-gradient-to-r from-[var(--secondary)] to-[var(--secondary)] rounded-b-xl"
    >
      <HeroSection />

      {/* چرا نُوا بهترین است */}
      <div className="w-full mt-16">
        <SectionTitle title="چرا نُوا بهترین انتخاب است؟" />
        <WhyNovaBest />{" "}
      </div>

      {/* دوره ها */}
      <div className="w-full my-12">
        <SectionTitle title=" دوره های آموزشی" />
        <section className="flex flex-col sm:flex-row w-full max-w-[820px] justify-center gap-6 my-6">
          {cardsData.map((card, index) => (
            <CardItem key={index} {...card} />
          ))}
        </section>{" "}
      </div>

      {/* اساتید */}
      <div className="w-full my-12">
        <SectionTitle title="اساتید ما" />
        <section className="flex flex-col sm:flex-row w-full max-w-[820px] justify-center gap-6 my-6">
          {cardsData.map((card, index) => (
            <CardItem key={index} {...card} />
          ))}
        </section>{" "}
      </div>

      {/* FAQ یا کارت‌های قابل گسترش */}
      <div className="w-full my-16">
        <SectionTitle title="سوالات پرتکرار" />
        <ExpandableCards
          cards={cardsFromServer}
          paragraphText={paragraphFromServer}
        />
      </div>
    </div>
  );
};

export default Page;
