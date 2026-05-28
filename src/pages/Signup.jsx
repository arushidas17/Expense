function Signup() {
  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center px-4">

      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md">

        <h1 className="text-4xl font-bold text-pink-700 text-center">
          Create Account
        </h1>

        <p className="text-pink-500 text-center mt-3">
          Start managing your expenses beautifully
        </p>

        <form className="mt-8 space-y-5">

          <div>
            <label className="block text-pink-700 font-medium mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

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
              placeholder="Create a password"
              className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block text-pink-700 font-medium mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-3 rounded-xl text-lg font-semibold hover:bg-pink-600 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-pink-500 mt-6">
          Already have an account?{" "}
          <span className="text-pink-700 font-semibold cursor-pointer hover:underline">
            Log In
          </span>
        </p>

      </div>
    </div>
  );
}

export default Signup;