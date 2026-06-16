import { User, ChevronDown, LayoutGrid } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboardnavbar() {
  const navigate = useNavigate();

  return (
    <div className="bg-pink-700 text-white px-10 py-5 flex items-center justify-between shadow-md">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        <LayoutGrid size={36} />
        <h1 className="text-4xl font-bold">Dashboard</h1>
      </div>

      {/* Right Side — clicking navigates to profile */}
      <button
        onClick={() => navigate("/userprofile")}
        className="flex items-center gap-3 rounded-full px-3 py-2 hover:bg-pink-600 transition-colors cursor-pointer"
        aria-label="Go to profile"
      >
        <div className="bg-pink-500 p-3 rounded-full">
          <User size={26} />
        </div>
        <p className="text-xl font-semibold">Arushi Das</p>
        <ChevronDown size={24} />
      </button>
    </div>
  );
}
