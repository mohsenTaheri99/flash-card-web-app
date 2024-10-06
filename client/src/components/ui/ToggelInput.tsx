import React, { useState } from "react";

interface ToggleInputProps {
  label: string;
  initialValue?: boolean;
  onChange?: (value: boolean) => void;
}

const ToggleInput: React.FC<ToggleInputProps> = ({
  label,
  initialValue = false,
  onChange,
}) => {
  const [toggled, setToggled] = useState(initialValue);

  const handleToggle = () => {
    setToggled(!toggled);
    if (onChange) {
      onChange(!toggled);
    }
  };

  return (
    <div className="flex items-center space-x-3">
      <span className="text-white">{label}</span>
      <div
        className={`relative inline-block w-12 h-6 cursor-pointer transition-all duration-300`}
        onClick={handleToggle}
      >
        <div
          className={`absolute inset-0 rounded-full ${
            !toggled ? "bg-green-500" : "bg-gray-400"
          } transition-colors duration-300`}
        />
        <div
          className={`absolute w-6 h-6 top-0 left-0  bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            !toggled ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </div>
    </div>
  );
};

export default ToggleInput;
