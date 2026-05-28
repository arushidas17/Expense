import Navbar from "../components/Navbar";

function Homepg() {
  return (
    <>
      <Navbar />

      <div className="flex items-center px-16 py-24 bg-pink-100 min-h-screen">

        {/* Left Side Content */}
        <div className="max-w-3xl">

          <h1 className="text-5xl font-bold text-pink-700 leading-tight">
            Money isn’t just about numbers — it’s about the life you want to build,
            the dreams you want to achieve, and the peace of mind you deserve every single day.
          </h1>

          <p className="mt-8 text-xl text-pink-600 leading-relaxed">
            ExpenseTracker helps you understand your spending, take control of your finances,
            and turn small savings into big possibilities.
          </p>

          <button className="mt-10 px-8 py-4 bg-pink-500 text-white rounded-xl text-lg font-semibold hover:bg-pink-600 transition">
            Get Started
          </button>

        </div>
      </div>
    </>
  );
}

export default Homepg;