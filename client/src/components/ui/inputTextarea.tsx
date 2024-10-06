import { ChangeEventHandler, useEffect, useRef } from "react";

type InputProps = {
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
};

const InputTextarea = ({ label, value, onChange }: InputProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight + 2}px`;
    }
  }, [value]);
  return (
    <div className="flex gap-4 justify-center ">
      <label className="text-gray-300 w-12 ">{label + " "}:</label>
      <textarea
        ref={textareaRef}
        dir="auto"
        value={value}
        onChange={onChange}
        className={` resize-none text-white bg-gray-800 border border-gray-600 rounded-md px-2 py-1 focus:outline-none focus:border-blue-400 focus:bg-gray-700 transition-colors duration-300 w-full `}
      />
    </div>
  );
};

export default InputTextarea;
