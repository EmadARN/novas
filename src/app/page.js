import Advisors from "@/features/core/components/Advisors";
import ExpandableCards from "@/features/core/components/Faqs";
import WhyNovaBest from "@/features/core/components/WhyNovaBest";
import GradientButton from "@/shared/components/ui/Button";
import CardItem from "@/shared/components/ui/Cards";
import InfoBox from "@/shared/components/ui/InfoBox";
import SectionTitle from "@/shared/components/ui/Tiltes";
import React from "react";
import { BookOpen } from "lucide-react";
import ReadyToLearn from "@/features/core/components/StartLearnignCourses";
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
const cardsFromServer = [
  { title: "1. پاراگراف", color: "bg-[#1abc9c]" },
  { title: "2. پاراگراف", color: "bg-[#3498db]" },
  { title: "3. پاراگراف", color: "bg-[#e74c3c]" },
  { title: "4. پاراگراف", color: "bg-[#e67e22]" },
];

const paragraphFromServer = "متن نمونه پاراگراف که از سرور می‌آید.";
const page = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
        <GradientButton href="/about" title="Go to About Page" />
        <section className="flex flex-col sm:flex-row w-full max-w-[820px] justify-center gap-6">
          {cardsData.map((card, index) => (
            <CardItem key={index} {...card} />
          ))}
        </section>

        <WhyNovaBest />
        <div className="w-full">
          <SectionTitle title="مشاورین آکادمی نوا" />
          <Advisors />
        </div>

        <InfoBox
          count={2}
          icon={<BookOpen size={"20px"} />}
          color1={"red"}
          color2={"red"}
          title="دوره فعال"
          titleColor={"green"}
        />
        <InfoBox
          count={2}
          icon={<BookOpen size={"20px"} />}
          color1={"red"}
          color2={"red"}
          title="دوره فعال"
          titleColor={"green"}
        />
        <ExpandableCards
          cards={cardsFromServer}
          paragraphText={paragraphFromServer}
        />
      </div>
      <ReadyToLearn />
    </>
  );
};

export default page;
