"use client"
import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/shared/components/ui/Tiltes";
const AboutUs = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <SectionTitle title="درباره ما" />
   
        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
          نُوا دنیایی گسترده از آموزش و یادگیری را ارائه می‌دهد؛ از کلاس‌های
          آنلاین و آفلاین گرفته تا برنامه‌ریزی تحصیلی دقیق و هدفمند. با مسیرها و
          محتوای اختصاصی، راه موفقیت دانش‌آموزان، به ویژه علاقه‌مندان به کنکور
          فرهنگیان، روشن و هموار می‌شود. تیم اساتید مجرب و پرشور، با سال‌ها
          تجربه در آموزش و مشاوره کنکور، همراه دانش‌آموزان است تا بالاترین
          توانایی‌ها شکوفا شود.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutUs;
