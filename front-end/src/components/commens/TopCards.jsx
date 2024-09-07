import React from "react";

function TopCards({ bg, icon, title, val }) {
  return (
    <div
      className="bg-[#1a1c23] rounded text-center p-4"
      style={{ backgroundColor: bg }}
    >
      <span className="text-[35px] flex items-center justify-center">
        {icon}
      </span>
      <h3 className="font-medium text-[14px] mt-2">{title}</h3>
      <span className="font-bold text-2xl block mt-2">{val}</span>
    </div>
  );
}

export default TopCards;
