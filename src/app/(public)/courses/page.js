import InfoBox from "@/shared/components/ui/InfoBox";
import SectionTitle from "@/shared/components/ui/Tiltes";
import React from "react";
import { BookOpen, Star } from "lucide-react";
import SearchBox from "@/shared/components/ui/SearchField";
import GradientButton from "@/shared/components/ui/Button";
import CardItem from "@/shared/components/ui/Cards";
import ReadyToLearn from "@/features/core/components/StartLearnignCourses";
const page = () => {
  return (
    <div className="bg-gradient-to-r from-[var(--secondary)] to-[var(--secondary)] rounded-b-xl ">
      <div className="pt-16">
        <SectionTitle title={"دوره های ما"} />
      </div>

      {/* info boxes */}
      <div className="flex items-center justify-center gap-10">
        <InfoBox
          count={2}
          icon={<Star size="23px" />}
          color1={"#b9bf11"}
          color2="#b9bf11"
          title={"محبوب"}
          titleColor="#111"
        />
        <InfoBox
          count={1}
          icon={<BookOpen size="20px" />}
          color1="blue"
          color2="blue"
          title="دوره فعال"
          titleColor="#111"
        />
      </div>

      {/* search courses */}
      <div className="flex my-20 justify-center items-center w-full">
        <SearchBox />
      </div>

      <section className="py-12 p-5">
        <div className="grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CardItem
            image="/images/home/about_us/about_us.jpg"
            badge="قسطی"
            description="هوش مصنوعی معلمی و  تعلیم تربیت اسلامی"
            title="دوره تخصصی فرهنگیان"
            subtitle="ویژه فرهنگیان"
          />
          <CardItem
            image="/images/home/about_us/about_us.jpg"
            badge="قسطی"
            description="هوش مصنوعی معلمی و  تعلیم تربیت اسلامی"
            title="دوره تخصصی فرهنگیان"
            subtitle="ویژه فرهنگیان"
          />
          <CardItem
            image="/images/home/about_us/about_us.jpg"
            badge="قسطی"
            description="هوش مصنوعی معلمی و  تعلیم تربیت اسلامی"
            title="دوره تخصصی فرهنگیان"
            subtitle="ویژه فرهنگیان"
          />
          <CardItem
            image="/images/home/about_us/about_us.jpg"
            badge="قسطی"
            description="هوش مصنوعی معلمی و  تعلیم تربیت اسلامی"
            title="دوره تخصصی فرهنگیان"
            subtitle="ویژه فرهنگیان"
          />
          <CardItem
            image="/images/home/about_us/about_us.jpg"
            badge="قسطی"
            description="هوش مصنوعی معلمی و  تعلیم تربیت اسلامی"
            title="دوره تخصصی فرهنگیان"
            subtitle="ویژه فرهنگیان"
          />
          <CardItem
            image="/images/home/about_us/about_us.jpg"
            badge="قسطی"
            description="هوش مصنوعی معلمی و  تعلیم تربیت اسلامی"
            title="دوره تخصصی فرهنگیان"
            subtitle="ویژه فرهنگیان"
          />
        </div>
      </section>

      {/* CTA */}
    </div>
  );
};

export default page;
