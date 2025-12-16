import React from "react";
import { Award, GraduationCap } from "lucide-react";

const ReadyToLearn = () => {
  return (
    <section className="w-full flex justify-center py-16 ">
      <div className="flex flex-col items-center gap-6 text-center max-w-xl px-4">
        {/* Title */}
        <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-blue-600">
           <Award className="w-8 h-8 text-yellow-500" />
          آماده یادگیری هستی؟
         
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
          با بهترین اساتید و محتوای بروز، مهارت‌هاتو ارتقا بده!
        </p>

        {/* Button */}
        <button
          className="
            flex items-center gap-2
            rounded-2xl px-8 py-3
            text-white font-medium
            bg-gradient-to-r from-yellow-400 to-orange-500
            shadow-lg hover:shadow-xl
            transition-all duration-300
            hover:scale-105
          "
        >
          شروع یادگیری
          <GraduationCap size={18} />
        </button>
      </div>
    </section>
  );
};

export default ReadyToLearn;
