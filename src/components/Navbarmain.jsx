import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbarmain() {
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Transactions", path: "/transactions" },
  ];

  return (
    <header className="sticky top-0 z-10 bg-gradient-to-r from-pink-600 to-rose-500 px-6 py-4 shadow-md">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h1 className="text-xl font-bold text-white tracking-tight">Expense Tracker</h1>
          <p className="text-xs text-pink-200 font-medium">Track every rupee</p>
        </div>

        {/* Profile — clicking navigates to /userprofile */}
        <button
          onClick={() => navigate("/userprofile")}
          className="flex items-center gap-2 bg-white/15 hover:bg-white/25 transition-colors rounded-full px-3 py-1.5 cursor-pointer"
          aria-label="Go to profile"
        >
          <div className="w-7 h-7 rounded-full bg-white/30 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <span className="text-sm font-semibold text-white hidden sm:block">Arushi Das</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-pink-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div className="inline-flex bg-white/15 rounded-full p-1 gap-1">
        {tabs.map(tab => (
          <Link
            key={tab.path}
            to={tab.path}
            className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all ${
              location.pathname === tab.path
                ? "bg-white text-pink-600 shadow-sm"
                : "text-white/80 hover:text-white"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </header>
  );
}