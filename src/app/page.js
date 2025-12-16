import Advisors from "@/features/core/components/Advisors";
import WhyNovaBest from "@/features/core/components/WhyNovaBest";
import GradientButton from "@/shared/components/ui/Button";
import CardItem from "@/shared/components/ui/Cards";
import React from "react";

const cardsData = [
  {
    image: "/images/team/sina.jpg",
    badge: "New",
    subtitle: "Recipe",
    title: "Crisp Spanish tortilla Matzo brei",
    description: "A modern twist on a classic Spanish dish.",
    author: "Celeste Mills",
    href: "#",
  },
  {
    image: "/images/team/sina.jpg",
    badge: "Popular",
    subtitle: "Travel",
    title: "Discover the sea",
    description: "Explore the most beautiful coasts in the world.",
    author: "John Doe",
    href: "#",
  },
];
const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <GradientButton href="/about" title="Go to About Page" />
      <section className="flex w-full max-w-[820px] justify-center gap-6">
        {cardsData.map((card, index) => (
          <CardItem key={index} {...card} />
        ))}
      </section>
      <WhyNovaBest />
      <Advisors/>
    </div>
  );
};

export default page;
