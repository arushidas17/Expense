import Dashboardnavbar from "../components/Dashboardnavbar";
import { Wallet, PiggyBank, ShoppingCart } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-pink-50">

      {/* Navbar */}
      <Dashboardnavbar />

      {/* Cards Section */}
      <div className="flex justify-center gap-10 mt-24 flex-wrap px-10">

        {/* Income Card */}
        <div className="bg-pink-100 w-[300px] h-[350px] rounded-3xl shadow-lg flex flex-col items-center justify-center">

          <div className="bg-pink-200 p-7 rounded-full mb-7">
            <Wallet size={55} className="text-pink-700" />
          </div>

          <h2 className="text-4xl font-bold text-pink-700 mb-5">
            Income
          </h2>

          <p className="text-5xl font-bold text-pink-800">
            ₹1,24,560
          </p>
        </div>

        {/* Savings Card */}
        <div className="bg-pink-100 w-[300px] h-[350px] rounded-3xl shadow-lg flex flex-col items-center justify-center">

          <div className="bg-pink-200 p-7 rounded-full mb-7">
            <PiggyBank size={55} className="text-pink-700" />
          </div>

          <h2 className="text-4xl font-bold text-pink-700 mb-5">
            Savings
          </h2>

          <p className="text-5xl font-bold text-pink-800">
            ₹45,230
          </p>
        </div>

        {/* Expenditure Card */}
        <div className="bg-pink-100 w-[300px] h-[350px] rounded-3xl shadow-lg flex flex-col items-center justify-center">

          <div className="bg-pink-200 p-7 rounded-full mb-7">
            <ShoppingCart size={55} className="text-pink-700" />
          </div>

          <h2 className="text-4xl font-bold text-pink-700 mb-5">
            Expenditure
          </h2>

          <p className="text-5xl font-bold text-pink-800">
            ₹78,890
          </p>
        </div>

      </div>
    </div>
  );
}