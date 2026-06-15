import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white">

      <h1 className="text-2xl font-bold text-pink-600">
        ExpenseTracker
      </h1>

      <div className="flex gap-4">

        <button
          onClick={() => navigate("/login")}
          className="px-5 py-2 border border-pink-500 text-pink-500 rounded-lg hover:bg-pink-50"
        >
          Log In
        </button>

        <button
          onClick={() => navigate("/signup")}
          className="px-5 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
        >
          Sign Up
        </button>

      </div>

    </nav>
  );
}

export default Navbar;