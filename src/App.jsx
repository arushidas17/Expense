import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // ✅ added Link
import axios from "axios";
import { BASE_URL } from "../constants";

function Signup() {
  const navigate = useNavigate();

  const [name, setName]               = useState("");
  const [email, setEmail]             = useState("");
  const [password, setPassword]       = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError]             = useState("");
  const [loading, setLoading]         = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim())             return setError("Please enter your name.");
    if (!email.trim())            return setError("Please enter your email.");
    if (password.length < 6)      return setError("Password must be at least 6 characters.");
    if (password !== confirmPass) return setError("Passwords do not match.");

    try {
      setLoading(true);
      const res = await axios.post(`${BASE_URL}/auth/signup`, {
        name,
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md">
        <h1 className="text-4xl font-bold text-pink-700 text-center">
          Create Account
        </h1>
        <p className="text-pink-500 text-center mt-3">
          Start managing your expenses beautifully
        </p>

        {error && (
          <p className="text-center text-red-500 text-sm font-medium mt-4 bg-red-50 py-2 px-4 rounded-xl">
            {error}
          </p>
        )}

        <form className="mt-8 space-y-5" onSubmit={handleSignup}>
          <div>
            <label className="block text-pink-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block text-pink-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block text-pink-700 font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block text-pink-700 font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-500 text-white py-3 rounded-xl text-lg font-semibold hover:bg-pink-600 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-pink-500 mt-6">
          Already have an account?{" "}
          <Link  // ✅ changed from span to Link
            to="/login"
            className="text-pink-700 font-semibold hover:underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;