import React from "react";

const consultants = Array.from({ length: 22 }, (_, i) => ({
  id: i + 1,
  image: `/images/team/${i + 1}.JPG`,
}));

export default function Advisors() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] w-full p-8 mx-auto">
      {consultants.map((item) => (
        <div
          key={item.id}
          className="relative w-full pb-[150%] perspective-[1000px] group"
        >
          {/* Shadow */}
          <div
            className="absolute top-[5%] left-[5%] w-[90%] h-[90%] bg-black/50
            shadow-[0_6px_12px_12px_rgba(0,0,0,0.4)]
            transform skew-x-[0.001deg] transition-transform duration-300 ease-in-out
            group-hover:rotate-x-[7deg] group-hover:-translate-y-[6px] group-hover:scale-[1.05] group-hover:opacity-60"
          />

          {/* Cover */}
          <div
            className="absolute top-0 left-0 w-full h-full overflow-hidden
            bg-gradient-to-r from-[#f6d365] to-[#fda085]
            transform-style-preserve-3d transform origin-top-center
            skew-x-[0.001deg] transition-transform duration-350 ease-in-out
            group-hover:rotate-x-[7deg] group-hover:-translate-y-[6px]"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Gloss */}
            <div
              className="absolute top-0 left-0 w-full h-[120%]
              bg-[linear-gradient(226deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.4)_35%,rgba(255,255,255,0.2)_42%,rgba(255,255,255,0)_60%)]
              transform translate-y-[-20%] will-change-transform
              transition-transform duration-[650ms] ease-[cubic-bezier(0.18,0.9,0.58,1)]
              group-hover:translate-y-0"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
