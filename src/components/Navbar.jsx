import { useState } from "react";
import { Moon, Sun } from "lucide-react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav
      className={`h-16 flex items-center justify-between px-6 shadow-sm ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Logo */}
      <h1 className="text-2xl font-bold text-pink-500">
        ExpenseTracker
      </h1>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {/* Theme Toggle Icon */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-xl"
        >
          {darkMode ? <Sun /> : <Moon />}
        </button>

        {/* Buttons */}
        <button className="px-5 py-2 border border-pink-500 text-pink-500 rounded-lg hover:bg-pink-50">
          Log In
        </button>

        <button className="px-5 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;