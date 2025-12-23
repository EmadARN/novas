"use client"
import React from "react";
import { motion } from "framer-motion";
import { fakeTeachers } from "../../constants";
import CardItem from "@/shared/components/ui/Cards";
import SectionTitle from "@/shared/components/ui/Tiltes";
const TeamSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <SectionTitle title="تیم ما" />
    

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {fakeTeachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <CardItem
                image={teacher.image}
                title={teacher.full_name}
                subtitle={teacher.about}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TeamSection;
