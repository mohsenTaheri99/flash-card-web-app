import { Outlet } from "react-router-dom";
import LayoutNav from "../components/LayoutNav";

function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <LayoutNav />
      <main className="max-w-6xl mx-auto ">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
