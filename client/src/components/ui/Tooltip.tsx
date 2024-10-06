import React, { ReactNode } from "react";

type TooltipProps = {
  text: string;
  children: ReactNode;
  className: string;
};

const Tooltip: React.FC<TooltipProps> = ({ text, children, className }) => {
  return (
    <div className={"relative group" + " " + className}>
      {/* The element that triggers the tooltip */}
      {children}

      {/* Tooltip content with a delay */}
      <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-center bg-gray-700 text-white text-xs px-3 py-1 rounded-md opacity-0 transition-opacity duration-300 delay-1000 group-hover:opacity-100">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
