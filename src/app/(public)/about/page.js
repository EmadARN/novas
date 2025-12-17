import Advisors from "@/features/core/components/Advisors";
import SkewedInfiniteScroll from "@/features/core/components/SkewedInfiniteScroll";
import { cardsData } from "@/features/core/constants";
import CardItem from "@/shared/components/ui/Cards";
import SectionTitle from "@/shared/components/ui/Tiltes";
import React from "react";

const page = () => {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center 
        bg-gradient-to-r from-[var(--secondary)] to-[var(--secondary)] rounded-b-xl"
    >
      <div className="w-full my-12">
        <SectionTitle title="درباره ما" />
        <SkewedInfiniteScroll />
      </div>

      {/* اساتید */}
      <div className="w-full my-12">
        <SectionTitle title="استاید ما" />
        <section className="flex flex-col sm:flex-row w-full max-w-[820px] justify-center gap-6 my-6">
          {cardsData.map((card, index) => (
            <CardItem key={index} {...card} />
          ))}
        </section>{" "}
      </div>

      {/* مشاورین */}
      <div className="w-full my-16">
        <SectionTitle title="مشاورین آکادمی نوا" />
        <Advisors />
      </div>
    </div>
  );
};

export default page;
