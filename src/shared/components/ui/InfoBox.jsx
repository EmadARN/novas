import React from "react";

const InfoBox = ({ color1, color2, titleColor, count, icon, title }) => {
  return (
    <div className="bg-white/60 rounded-2xl shadow-lg p-2 drop-shadow-2xl">
      <div className="flex justify-center items-center  flex-col gap-4">
        <div className="flex gap-4 items-center">
          <span style={{ color:  color1  }} className="text-sm">
            {icon}
          </span>
          <span style={{ color:  color2  }} className="text-md">
            {count}
          </span>
        </div>
        <span style={{ color:  titleColor  }} className="text-sm">
          {title}
        </span>
      </div>
    </div>
  );
};

export default InfoBox;
