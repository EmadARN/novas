"use client"
import React from "react";
import { motion } from "framer-motion";
import { ContactButton } from "./ContactBtn";
import { Instagram, Phone, MessageCircle } from "lucide-react";
import SectionTitle from "@/shared/components/ui/Tiltes";
const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <SectionTitle title="ارتباط با ما" />

      

        <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
          <ContactButton
            href="tel:02433411840"
            icon={<Phone className="w-5 h-5" />}
            label="۰۲۴-۳۳۴۱۱۸۴۰"
            gradient="from-red-500 to-rose-600"
          />
          <ContactButton
            href="https://instagram.com/novawise1"
            icon={<Instagram className="w-5 h-5" />}
            label="اینستاگرام"
            gradient="from-pink-500 via-purple-500 to-indigo-500"
          />
          <ContactButton
            href="https://t.me/novawise"
            icon={<MessageCircle className="w-5 h-5" />}
            label="تلگرام"
            gradient="from-cyan-500 to-blue-600"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
