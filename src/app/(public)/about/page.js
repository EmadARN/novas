import SkewedInfiniteScroll from "@/features/core/components/aboutPage/SkewedInfiniteScroll";
import Advisors from "@/features/core/components/Advisors";
import HeroAbout, { Card } from "@/features/core/components/HeroAbout";

import { cardsData } from "@/features/core/constants";
import CardItem from "@/shared/components/ui/Cards";
import SectionTitle from "@/shared/components/ui/Tiltes";
import ScrollShrinkWrapper from "@/shared/provider/ScrollShrinkWrapper";
import React from "react";

const page = () => {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center 
        bg-gradient-to-r from-[var(--secondary)] to-[var(--secondary)] rounded-b-xl"
    >
      <div className="w-full relative min-h-[700px]">
        <ScrollShrinkWrapper>
          <HeroAbout
            cardDistance={60}
            verticalDistance={70}
            delay={3000}
            pauseOnHover={false}
          >
            <Card imageSrc="/images/home/thumb/thumb1-1.jpg" alt="Card 1" />
            <Card imageSrc="/images/home/thumb/thumb1-2.jpg" alt="Card 2" />
            <Card imageSrc="/images/home/thumb/thumb1-3.jpg" alt="Card 3" />
            <Card imageSrc="/images/home/thumb/thumb1-4.jpg" alt="Card 4" />
            <Card imageSrc="/images/home/thumb/thumb2-1.jpg" alt="Card 5" />
            <Card imageSrc="/images/home/thumb/thumb2-2.jpg" alt="Card 6" />
            <Card imageSrc="/images/home/thumb/thumb2-3.jpg" alt="Card 7" />
            <Card imageSrc="/images/home/thumb/thumb2-4.jpg" alt="Card 8" />
            <Card imageSrc="/images/home/thumb/thumb3-1.jpg" alt="Card 9" />
            <Card imageSrc="/images/home/thumb/thumb3-2.jpg" alt="Card 10" />
            <Card imageSrc="/images/home/thumb/thumb3-3.jpg" alt="Card 11" />
            <Card imageSrc="/images/home/thumb/thumb3-4.jpg" alt="Card 12" />
          </HeroAbout>
        </ScrollShrinkWrapper>
      </div>

      <div className="w-full my-12 xl:my-0">
        <SectionTitle title="درباره ما" />
        <SkewedInfiniteScroll />
      </div>

      {/* اساتید */}
      <div className="container w-full my-12">
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
