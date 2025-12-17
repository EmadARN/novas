import React from "react";
import Advisors from "@/features/core/components/Advisors";
import ExpandableCards from "@/features/core/components/Faqs";
import WhyNovaBest from "@/features/core/components/WhyNovaBest";
import CardItem from "@/shared/components/ui/Cards";
import InfoBox from "@/shared/components/ui/InfoBox";
import SectionTitle from "@/shared/components/ui/Tiltes";
import ReadyToLearn from "@/features/core/components/StartLearnignCourses";
import { BookOpen } from "lucide-react";
import SkewedInfiniteScroll from "@/features/core/components/SkewedInfiniteScroll";

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

const Page = async () => {
  await new Promise((res) => setTimeout(res, 2000));

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center 
        bg-gradient-to-r from-[var(--secondary)] to-[var(--secondary)]"
    >
      {/* کارت‌ها */}
      <section className="flex flex-col sm:flex-row w-full max-w-[820px] justify-center gap-6 my-6">
        {cardsData.map((card, index) => (
          <CardItem key={index} {...card} />
        ))}
      </section>

      {/* چرا نُوا بهترین است */}
      <WhyNovaBest />

      {/* مشاورین */}
      <div className="w-full my-6">
        <SectionTitle title="مشاورین آکادمی نوا" />
        <Advisors />
      </div>

      {/* InfoBox ها */}
      <div className="flex flex-wrap gap-4 my-6">
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
      </div>

      {/* FAQ یا کارت‌های قابل گسترش */}
      <ExpandableCards
        cards={cardsFromServer}
        paragraphText={paragraphFromServer}
      />

      {/* شروع یادگیری */}
      <div className="w-full my-6">
        <ReadyToLearn />
      </div>
      <SkewedInfiniteScroll />
    </div>
  );
};

export default Page;
