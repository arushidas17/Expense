export const CATEGORIES = [
  { name: "Food",          icon: "🍜", pieColor: "#f472b6" },
  { name: "Shopping",      icon: "🛍️", pieColor: "#fb7185" },
  { name: "Health",        icon: "💊", pieColor: "#e879f9" },
  { name: "Transport",     icon: "🚗", pieColor: "#f9a8d4" },
  { name: "Entertainment", icon: "🎬", pieColor: "#fda4af" },
  { name: "Utilities",     icon: "💡", pieColor: "#d946ef" },
];

export const INCOME = 124560;

export const INITIAL_TRANSACTIONS = [
  { id: 1,  category: "Food",          description: "Domino's Pizza",     amount: 450,  date: "2025-06-10" },
  { id: 2,  category: "Food",          description: "Chai & Snacks",      amount: 80,   date: "2025-06-09" },
  { id: 3,  category: "Shopping",      description: "H&M Jacket",         amount: 2200, date: "2025-06-08" },
  { id: 4,  category: "Shopping",      description: "Amazon – earphones", amount: 1499, date: "2025-06-07" },
  { id: 5,  category: "Health",        description: "Gym subscription",   amount: 1200, date: "2025-06-01" },
  { id: 6,  category: "Health",        description: "Pharmacy",           amount: 340,  date: "2025-06-05" },
  { id: 7,  category: "Transport",     description: "Uber – office",      amount: 180,  date: "2025-06-10" },
  { id: 8,  category: "Entertainment", description: "Netflix renewal",    amount: 649,  date: "2025-06-03" },
  { id: 9,  category: "Utilities",     description: "Electricity bill",   amount: 900,  date: "2025-06-02" },
];

export function formatDate(d) {
  return new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

export function formatINR(n) {
  return "₹" + Number(n).toLocaleString("en-IN");
}

export function getTodayDate() {
  return new Date().toISOString().split("T")[0];
}