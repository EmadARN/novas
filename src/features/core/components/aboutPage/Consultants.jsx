"use client";

import SectionTitle from "@/shared/components/ui/Tiltes";
import { motion } from "framer-motion";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const TOTAL_ITEMS = 22;

const Consultants = ({
  title = "مشاورین آکادمی نوا",
  imagePath = "/images/team",
}) => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1.3,
      spacing: 16,
    },
  });

  return (
    <section className="py-20 px-6 bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <SectionTitle title={title} />

        {/*  Desktop / Tablet */}
        <div className="hidden md:grid grid-cols-4 gap-8">
          {Array.from({ length: 9 }, (_, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-lg h-80">
              <Image
                src={`${imagePath}/${i + 1}.JPG`}
                alt={`مشاور ${i + 1}`}
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/*  Mobile ONLY */}
        <div className="block md:hidden mt-8">
          <div ref={sliderRef} className="keen-slider">
            {Array.from({ length: TOTAL_ITEMS }, (_, i) => (
              <div
                key={i}
                className="keen-slider__slide rounded-2xl overflow-hidden shadow-lg h-80"
              >
                <Image
                  src={`${imagePath}/${i + 1}.JPG`}
                  alt={`مشاور ${i + 1}`}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Consultants;
