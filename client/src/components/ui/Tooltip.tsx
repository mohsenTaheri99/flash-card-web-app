import React, { ReactNode } from "react";

type TooltipProps = {
  text: string;
  children: ReactNode;
  className: string;
};

const Tooltip: React.FC<TooltipProps> = ({ text, children, className }) => {
  return (
    <div className={"relative group" + " " + className}>
      {children}
      <div className="absolute bottom-full mb-2 hidden opacity-0  group-hover:flex bg-gray-700 text-white text-xs px-3 py-1 rounded-md animate-fadeIn w-52 ">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
