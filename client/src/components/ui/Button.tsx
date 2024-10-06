type ButtonProps = {
  children: React.ReactNode;
  onClick?: (e: React.FormEvent) => void;
  className?: string;
  type?: "submit" | "button";
};

const Button = ({ children, onClick, className, type }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type ? type : "button"}
      className={`px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-md hover:bg-gray-700 hover:border-gray-500 transition-colors duration-300 shadow-lg ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
