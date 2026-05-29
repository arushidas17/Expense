
import {
  LayoutDashboard,
  ReceiptText,
  User,
  Settings,
  LogOut,
  Pencil,
  Lock,
  Moon,
  CircleHelp,
} from "lucide-react";

export default function Userprofile() {
  return (
    <div className="flex min-h-screen bg-[#fff8fb] text-gray-800">
      
      {/* Sidebar */}
      <div className="w-72 border-r border-pink-100 bg-white p-7 flex flex-col justify-between">
        
        <div>
          {/* Logo */}
          <div className="mb-14">
            <h1 className="text-3xl font-bold">
              Expense{" "}
              <span className="text-pink-500">Tracker</span>
            </h1>

            <p className="text-gray-400 mt-1">
              Track every rupee
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            
            <button className="flex items-center gap-4 w-full px-5 py-4 rounded-2xl hover:bg-pink-50 transition">
              <LayoutDashboard size={22} />
              <span className="text-lg">Dashboard</span>
            </button>

            <button className="flex items-center gap-4 w-full px-5 py-4 rounded-2xl hover:bg-pink-50 transition">
              <ReceiptText size={22} />
              <span className="text-lg">Transactions</span>
            </button>

            <button className="flex items-center gap-4 w-full px-5 py-4 rounded-2xl bg-pink-50 text-pink-500">
              <User size={22} />
              <span className="text-lg font-medium">Profile</span>
            </button>

            <button className="flex items-center gap-4 w-full px-5 py-4 rounded-2xl hover:bg-pink-50 transition">
              <Settings size={22} />
              <span className="text-lg">Settings</span>
            </button>
          </div>
        </div>

        {/* Logout */}
        <button className="flex items-center gap-4 px-5 py-4 rounded-2xl text-pink-500 hover:bg-pink-50 transition">
          <LogOut size={22} />
          <span className="text-lg">Logout</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        
        {/* Top */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-4xl font-bold">
              Profile
            </h2>

            <p className="text-gray-400 mt-2">
              Manage your account and preferences
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-pink-300 flex items-center justify-center text-white font-semibold">
              A
            </div>

            <span className="font-medium text-lg">
              Arushi Das
            </span>
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-white border border-pink-100 rounded-3xl p-10 flex items-center gap-10 shadow-sm">
          
          <div className="w-32 h-32 rounded-full bg-pink-100 flex items-center justify-center">
            <User
              size={60}
              className="text-pink-400"
            />
          </div>

          <div>
            <h3 className="text-3xl font-semibold">
              Arushi Das
            </h3>

            <p className="text-gray-400 text-lg mt-2">
              arushi@gmail.com
            </p>

            <button className="mt-6 flex items-center gap-2 border border-pink-300 text-pink-500 px-6 py-3 rounded-2xl hover:bg-pink-50 transition">
              <Pencil size={18} />
              Edit Profile
            </button>
          </div>
        </div>

        {/* Account Section */}
        <div className="mt-10">
          <h4 className="text-2xl font-semibold mb-5">
            Account
          </h4>

          <div className="bg-white border border-pink-100 rounded-3xl overflow-hidden shadow-sm">
            
            <div className="flex justify-between items-center p-7 border-b border-pink-50">
              <div className="flex items-center gap-5">
                <div className="p-4 rounded-2xl bg-pink-50">
                  <Pencil className="text-pink-500" />
                </div>

                <div>
                  <h5 className="text-lg font-medium">
                    Edit Profile
                  </h5>

                  <p className="text-gray-400">
                    Update your details
                  </p>
                </div>
              </div>

              <span className="text-3xl text-gray-300">
                ›
              </span>
            </div>

            <div className="flex justify-between items-center p-7">
              <div className="flex items-center gap-5">
                <div className="p-4 rounded-2xl bg-pink-50">
                  <Lock className="text-pink-500" />
                </div>

                <div>
                  <h5 className="text-lg font-medium">
                    Change Password
                  </h5>

                  <p className="text-gray-400">
                    Update your password
                  </p>
                </div>
              </div>

              <span className="text-3xl text-gray-300">
                ›
              </span>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="mt-10">
          <h4 className="text-2xl font-semibold mb-5">
            Preferences
          </h4>

          <div className="bg-white border border-pink-100 rounded-3xl p-7 flex justify-between items-center shadow-sm">
            
            <div className="flex items-center gap-5">
              <div className="p-4 rounded-2xl bg-pink-50">
                <Moon className="text-pink-500" />
              </div>

              <div>
                <h5 className="text-lg font-medium">
                  Theme
                </h5>

                <p className="text-gray-400">
                  Choose light or dark mode
                </p>
              </div>
            </div>

            {/* Toggle */}
            <div className="w-16 h-9 bg-pink-500 rounded-full flex items-center px-1">
              <div className="w-7 h-7 bg-white rounded-full ml-auto"></div>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="mt-10">
          <h4 className="text-2xl font-semibold mb-5">
            Support
          </h4>

          <div className="bg-white border border-pink-100 rounded-3xl overflow-hidden shadow-sm">
            
            <div className="flex justify-between items-center p-7 border-b border-pink-50">
              <div className="flex items-center gap-5">
                <div className="p-4 rounded-2xl bg-pink-50">
                  <CircleHelp className="text-pink-500" />
                </div>

                <div>
                  <h5 className="text-lg font-medium">
                    Help & Support
                  </h5>

                  <p className="text-gray-400">
                    Contact support team
                  </p>
                </div>
              </div>

              <span className="text-3xl text-gray-300">
                ›
              </span>
            </div>

            <div className="flex justify-between items-center p-7">
              <div className="flex items-center gap-5">
                <div className="p-4 rounded-2xl bg-pink-50">
                  <LogOut className="text-pink-500" />
                </div>

                <div>
                  <h5 className="text-lg font-medium text-pink-500">
                    Logout
                  </h5>

                  <p className="text-gray-400">
                    Sign out of your account
                  </p>
                </div>
              </div>

              <span className="text-3xl text-gray-300">
                ›
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

