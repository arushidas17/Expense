// ✅ Keep categories for dropdown menus
export const CATEGORIES = [
  { name: "Food",          icon: "🍜", pieColor: "#f472b6" },
  { name: "Shopping",      icon: "🛍️", pieColor: "#fb7185" },
  { name: "Health",        icon: "💊", pieColor: "#e879f9" },
  { name: "Transport",     icon: "🚗", pieColor: "#f9a8d4" },
  { name: "Entertainment", icon: "🎬", pieColor: "#fda4af" },
  { name: "Utilities",     icon: "💡", pieColor: "#d946ef" },
];

// ✅ Add this — your backend URL
export const BASE_URL = "http://localhost:8000/api";

// ❌ REMOVE INCOME — will come from real transactions in MongoDB
// ❌ REMOVE INITIAL_TRANSACTIONS — will come from MongoDB

// ✅ Keep all these helper functions
export function formatDate(d) {
  return new Date(d).toLocaleDateString("en-IN", { 
    day: "numeric", 
    month: "short", 
    year: "numeric" 
  });
}

export function formatINR(n) {
  return "₹" + Number(n).toLocaleString("en-IN");
}

export function getTodayDate() {
  return new Date().toISOString().split("T")[0];
}