import { useNavigate } from "react-router-dom";
import {
  User,
  LogOut,
  Lock,
  CircleHelp,
  ArrowLeft,
} from "lucide-react";

export default function Userprofile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">

      {/* Navbar */}
      <div className="bg-white border-b border-pink-100 px-10 py-8 flex items-center gap-5">
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center justify-center w-10 h-10 rounded-full transition hover:bg-pink-50"
          aria-label="Back to dashboard"
        >
          <ArrowLeft className="text-pink-500" size={22} />
        </button>
        <h1 className="text-2xl font-bold">
          <span className="text-pink-500">Expense Tracker</span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="p-10">

        {/* Top */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold">Profile</h2>
          <p className="text-gray-400 mt-2">Manage your account and preferences</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white border border-pink-100 rounded-3xl p-10 flex items-center gap-10 shadow-sm">
          <div className="w-32 h-32 rounded-full bg-pink-100 flex items-center justify-center">
            <User size={60} className="text-pink-400" />
          </div>
          <div>
            <h3 className="text-3xl font-semibold">Arushi Das</h3>
            <p className="text-gray-400 text-lg mt-2">arushi@gmail.com</p>
          </div>
        </div>

        {/* Personal Information */}
        <div className="mt-10">
          <h4 className="text-2xl font-semibold mb-5">Personal Information</h4>
          <div className="bg-white border border-pink-100 rounded-3xl p-10 shadow-sm">
            <div className="flex gap-6 mb-6">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600 mb-2">First name</label>
                <input
                  type="text"
                  defaultValue="Arushi"
                  className="w-full px-4 py-3 rounded-2xl border border-pink-100 text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-300 bg-white"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600 mb-2">Last name</label>
                <input
                  type="text"
                  defaultValue="Das"
                  className="w-full px-4 py-3 rounded-2xl border border-pink-100 text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-300 bg-white"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-600 mb-2">Username</label>
              <input
                type="text"
                defaultValue="arushidas"
                className="w-full px-4 py-3 rounded-2xl border border-pink-100 text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-300 bg-white"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-600 mb-2">Email address</label>
              <input
                type="email"
                defaultValue="arushi@gmail.com"
                className="w-full px-4 py-3 rounded-2xl border border-pink-100 text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-300 bg-white"
              />
              <p className="text-sm text-gray-400 mt-2">Used to sign in and for account notifications.</p>
            </div>
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-600 mb-2">Phone number</label>
              <input
                type="tel"
                placeholder="Not added"
                className="w-full px-4 py-3 rounded-2xl border border-pink-100 text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-300 bg-white"
              />
            </div>
            <div className="flex justify-end gap-3">
              <button className="px-6 py-3 rounded-2xl border border-pink-100 text-gray-600 hover:bg-pink-50 transition">
                Cancel
              </button>
              <button className="px-6 py-3 rounded-2xl bg-pink-500 text-white hover:bg-pink-600 transition">
                Save changes
              </button>
            </div>
          </div>
        </div>

        {/* Account Section */}
        <div className="mt-10">
          <h4 className="text-2xl font-semibold mb-5">Account</h4>
          <div className="bg-white border border-pink-100 rounded-3xl overflow-hidden shadow-sm">
            <div className="flex justify-between items-center p-7">
              <div className="flex items-center gap-5">
                <div className="p-4 rounded-2xl bg-pink-50">
                  <Lock className="text-pink-500" />
                </div>
                <div>
                  <h5 className="text-lg font-medium">Change Password</h5>
                  <p className="text-gray-400">Update your password</p>
                </div>
              </div>
              <span className="text-3xl text-gray-300">›</span>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="mt-10">
          <h4 className="text-2xl font-semibold mb-5">Support</h4>
          <div className="bg-white border border-pink-100 rounded-3xl overflow-hidden shadow-sm">
            <div className="flex justify-between items-center p-7 border-b border-pink-50">
              <div className="flex items-center gap-5">
                <div className="p-4 rounded-2xl bg-pink-50">
                  <CircleHelp className="text-pink-500" />
                </div>
                <div>
                  <h5 className="text-lg font-medium">Help & Support</h5>
                  <p className="text-gray-400">Contact support team</p>
                </div>
              </div>
              <span className="text-3xl text-gray-300">›</span>
            </div>
            <div className="flex justify-between items-center p-7">
              <div className="flex items-center gap-5">
                <div className="p-4 rounded-2xl bg-pink-50">
                  <LogOut className="text-pink-500" />
                </div>
                <div>
                  <h5 className="text-lg font-medium text-pink-500">Logout</h5>
                  <p className="text-gray-400">Sign out of your account</p>
                </div>
              </div>
              <span className="text-3xl text-gray-300">›</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}