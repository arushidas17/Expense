import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center px-4">

      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md">

        <button
          onClick={() => navigate("/")}
          className="mb-4 text-pink-600 hover:underline"
        >
          ← Back to Home
        </button>

        <h1 className="text-4xl font-bold text-pink-700 text-center">
          Welcome Back
        </h1>

        <p className="text-pink-500 text-center mt-3">
          Log in to continue your financial journey
        </p>

        <form className="mt-8 space-y-5">

          <div>
            <label className="block text-pink-700 font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block text-pink-700 font-medium mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-3 rounded-xl text-lg font-semibold hover:bg-pink-600 transition"
          >
            Log In
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;