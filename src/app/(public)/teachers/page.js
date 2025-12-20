import AboutUs from "@/features/core/components/aboutPage/AboutUs";
import Consultants from "@/features/core/components/aboutPage/Consultants";
import { ContactButton } from "@/features/core/components/aboutPage/ContactBtn";
import ContactSection from "@/features/core/components/aboutPage/ContactSection";
import HeroSection from "@/features/core/components/aboutPage/HeroSection";
import MapSection from "@/features/core/components/aboutPage/MapSection";
import TeamSection from "@/features/core/components/aboutPage/TeamSection";
import { Instagram, MessageCircle, Phone } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <TeamSection />
      <Consultants  cardWidth={140} cardHeight={200} spacing={100} />

      <ContactSection  />

      <MapSection />
    </div>
  );
};

export default page;
