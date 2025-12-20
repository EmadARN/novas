"use client"
import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
const MapSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center theme-text-primary mb-4">
          موقعیت ما
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-12 rounded-full" />

        <div className="relative rounded-2xl overflow-hidden shadow-lg h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3199.1101548948277!2d48.50375248471308!3d36.69589077997024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzbCsDQxJzQ1LjIiTiA0OMKwMzAnMDUuNiJF!5e0!3m2!1sfa!2suk!4v1759911609888!5m2!1sfa!2suk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-4 py-2 rounded-lg shadow text-sm font-medium text-gray-700 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-indigo-600" />
            زنجان، بلوار کوهنورد، مجتمع سهند
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MapSection;
