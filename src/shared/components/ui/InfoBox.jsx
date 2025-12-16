import React from "react";

const InfoBox = ({ color1, color2, titleColor, count, icon, title }) => {
  return (
    <div className="bg-white/60 rounded-2xl shadow-lg p-2 drop-shadow-2xl w-32 ">
      <div className="flex flex-col items-center gap-4">
        
        {/* Icon + Count */}
        <div className="flex items-center gap-3">
          
          {/* Icon wrapper */}
          <span
            className="flex items-center justify-center"
            style={{ color: color1 }}
          >
            {icon}
          </span>

          {/* Count */}
          <span
            className="text-lg font-semibold leading-none"
            style={{ color: color2 }}
          >
            {count}
          </span>
        </div>

        {/* Title */}
        <span
          className="text-sm text-center"
          style={{ color: titleColor }}
        >
          {title}
        </span>

      </div>
    </div>
  );
};

export default InfoBox;
