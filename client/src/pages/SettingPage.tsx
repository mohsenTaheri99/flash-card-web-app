import { useState } from "react";
import ToggleInput from "../components/ui/ToggelInput";

const SettingPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("fa"); // تنظیم زبان پیش‌فرض به فارسی

  const handleDarkModeToggle = (value: boolean) => {
    setDarkMode(value);
    console.log("Dark mode toggled:", !darkMode);
  };

  const handleNotificationsToggle = (value: boolean) => {
    setNotifications(value);
    console.log("Notifications toggled:", !notifications);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    console.log("Language changed to:", e.target.value);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      {/* هدر صفحه تنظیمات */}
      <header className="w-full max-w-4xl mb-12 p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-4xl text-white font-bold text-center">تنظیمات</h1>
      </header>

      {/* تنظیمات */}
      <div className="w-full max-w-3xl space-y-8">
        {/* تنظیمات حالت تاریک */}
        <div className="flex items-center justify-between bg-gray-700 p-5 rounded-lg shadow-md hover:bg-gray-600 transition duration-300">
          <span className="text-xl text-gray-300">حالت تاریک</span>
          <ToggleInput
            label=""
            initialValue={darkMode}
            onChange={handleDarkModeToggle}
          />
        </div>

        {/* تنظیمات اعلان‌ها */}
        <div className="flex items-center justify-between bg-gray-700 p-5 rounded-lg shadow-md hover:bg-gray-600 transition duration-300">
          <span className="text-xl text-gray-300">اعلان‌ها</span>
          <ToggleInput label="" onChange={handleNotificationsToggle} />
        </div>

        {/* تنظیمات زبان */}
        <div className="flex items-center justify-between bg-gray-700 p-5 rounded-lg shadow-md hover:bg-gray-600 transition duration-300">
          <span className="text-xl text-gray-300">زبان</span>
          <div className="relative">
            <select
              value={language}
              onChange={handleLanguageChange}
              className="text-gray-300 bg-gray-800 border border-gray-600 rounded-lg px-8 py-1 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300"
            >
              <option value="fa">فارسی</option>
              <option value="en">انگلیسی</option>
              <option value="ar">عربی</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
