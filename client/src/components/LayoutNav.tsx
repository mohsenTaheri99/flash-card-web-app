import { FaHome, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

function LayoutNav() {
  return (
    <nav className="w-full p-6 bg-gray-800 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl text-white font-bold">فلش کارت</h1>

        <div className="flex space-x-6 gap-x-3">
          <Link
            to="/settings"
            className="text-gray-300 hover:text-white   flex items-center"
          >
            <FaCog className="text-2xl" />
          </Link>
          <Link
            to="/"
            className="text-gray-300 hover:text-white   flex items-center"
          >
            <FaHome className="text-2xl" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default LayoutNav;
