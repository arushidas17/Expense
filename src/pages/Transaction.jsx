import { useState } from "react";

const CATEGORIES = [
  { name: "Food", icon: "🍜", color: "bg-pink-100 text-pink-700 border-pink-200" },
  { name: "Shopping", icon: "🛍️", color: "bg-rose-100 text-rose-700 border-rose-200" },
  { name: "Health", icon: "💊", color: "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200" },
  { name: "Transport", icon: "🚗", color: "bg-pink-50 text-pink-600 border-pink-200" },
  { name: "Entertainment", icon: "🎬", color: "bg-rose-50 text-rose-600 border-rose-200" },
  { name: "Utilities", icon: "💡", color: "bg-fuchsia-50 text-fuchsia-600 border-fuchsia-200" },
];

const INITIAL_TRANSACTIONS = [
  { id: 1, category: "Food", description: "Domino's Pizza", amount: 450, date: "2025-06-10" },
  { id: 2, category: "Food", description: "Chai & Snacks", amount: 80, date: "2025-06-09" },
  { id: 3, category: "Shopping", description: "H&M Jacket", amount: 2200, date: "2025-06-08" },
  { id: 4, category: "Shopping", description: "Amazon – earphones", amount: 1499, date: "2025-06-07" },
  { id: 5, category: "Health", description: "Gym subscription", amount: 1200, date: "2025-06-01" },
  { id: 6, category: "Health", description: "Pharmacy", amount: 340, date: "2025-06-05" },
  { id: 7, category: "Transport", description: "Uber – office", amount: 180, date: "2025-06-10" },
  { id: 8, category: "Entertainment", description: "Netflix renewal", amount: 649, date: "2025-06-03" },
  { id: 9, category: "Utilities", description: "Electricity bill", amount: 900, date: "2025-06-02" },
];

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

function formatINR(amount) {
  return "₹" + Number(amount).toLocaleString("en-IN");
}

function getTodayDate() {
  return new Date().toISOString().split("T")[0];
}

export default function TransactionPage() {
  const [transactions, setTransactions] = useState(INITIAL_TRANSACTIONS);
  const [form, setForm] = useState({
    category: "Food",
    description: "",
    amount: "",
  });
  const [error, setError] = useState("");
  const [added, setAdded] = useState(false);
  const [activeTab, setActiveTab] = useState("Transactions");

  function handleDelete(id) {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  }

  const totalSpent = transactions.reduce((sum, t) => sum + Number(t.amount), 0);

  const categoryTotals = CATEGORIES.map((cat) => {
    const total = transactions
      .filter((t) => t.category === cat.name)
      .reduce((s, t) => s + Number(t.amount), 0);
    return { ...cat, total };
  }).sort((a, b) => b.total - a.total);

  const maxTotal = Math.max(...categoryTotals.map((c) => c.total), 1);

  function handleAdd() {
    if (!form.description.trim()) return setError("Add a description.");
    if (!form.amount || isNaN(form.amount) || Number(form.amount) <= 0)
      return setError("Enter a valid amount.");

    setTransactions([
      {
        id: Date.now(),
        category: form.category,
        description: form.description.trim(),
        amount: Number(form.amount),
        date: getTodayDate(),
      },
      ...transactions,
    ]);
    setForm({ category: "Food", description: "", amount: "" });
    setError("");
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b border-pink-100 px-6 py-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-2xl font-bold text-pink-600 tracking-tight">Expense Tracker</h1>
            <p className="text-xs text-pink-400 font-medium mt-0.5">Track every rupee</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Total spent</p>
            <p className="text-2xl font-bold text-pink-500">{formatINR(totalSpent)}</p>
          </div>
        </div>
        <div className="inline-flex bg-pink-50 rounded-full p-1 gap-1">
          {["Dashboard", "Transactions"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${activeTab === tab ? "bg-pink-500 text-white shadow-sm" : "text-gray-400 hover:text-pink-500"}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-73px)]">
        {/* LEFT: Main content */}
        <main className="flex-1 px-6 py-6 overflow-y-auto">

          {/* Spend Distribution */}
          <section className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-pink-400 mb-4">
              Spend Distribution
            </h2>
            <div className="bg-pink-50 rounded-2xl p-5 space-y-4">
              {categoryTotals.map((cat) => {
                const pct = totalSpent > 0 ? Math.round((cat.total / totalSpent) * 100) : 0;
                const barWidth = maxTotal > 0 ? (cat.total / maxTotal) * 100 : 0;
                return (
                  <div key={cat.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                        <span>{cat.icon}</span>
                        {cat.name}
                      </span>
                      <span className="text-sm font-bold text-pink-600">
                        {formatINR(cat.total)}
                        <span className="text-xs text-pink-300 font-normal ml-1">({pct}%)</span>
                      </span>
                    </div>
                    <div className="h-2.5 bg-pink-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-pink-400 to-rose-400 transition-all duration-700"
                        style={{ width: `${barWidth}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Category Sections */}
          {CATEGORIES.map((cat) => {
            const catTransactions = transactions
              .filter((t) => t.category === cat.name)
              .sort((a, b) => new Date(b.date) - new Date(a.date));

            if (catTransactions.length === 0) return null;

            const catTotal = catTransactions.reduce((s, t) => s + Number(t.amount), 0);

            return (
              <section key={cat.name} className="mb-7">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{cat.icon}</span>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-600">
                      {cat.name}
                    </h2>
                  </div>
                  <span className="text-sm font-bold text-pink-500">
                    {formatINR(catTotal)}
                  </span>
                </div>

                <div className="space-y-2">
                  {catTransactions.map((t) => (
                    <div
                      key={t.id}
                      className="flex items-center justify-between bg-white border border-pink-100 rounded-xl px-4 py-3 hover:shadow-sm hover:border-pink-200 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-base flex-shrink-0">
                          {cat.icon}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">{t.description}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{formatDate(t.date)}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-rose-500">{formatINR(t.amount)}</span>
                        <button
                          onClick={() => handleDelete(t.id)}
                          className="text-pink-300 hover:text-rose-500 transition-colors"
                          aria-label="Delete transaction"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </main>

        {/* RIGHT / BOTTOM: Entry Panel */}
        <aside className="lg:w-80 w-full border-t lg:border-t-0 lg:border-l border-pink-100 bg-pink-50/60 p-6 flex flex-col">
          <h2 className="text-xs font-bold uppercase tracking-widest text-pink-400 mb-5">
            Add Transaction
          </h2>

          <div className="space-y-4 flex-1">
            {/* Category */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5">Category</label>
              <div className="grid grid-cols-3 gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setForm({ ...form, category: cat.name })}
                    className={`flex flex-col items-center gap-1 py-2 rounded-xl border text-xs font-semibold transition-all
                      ${form.category === cat.name
                        ? "bg-pink-500 border-pink-500 text-white shadow-md scale-105"
                        : "bg-white border-pink-100 text-gray-600 hover:border-pink-300"
                      }`}
                  >
                    <span className="text-base">{cat.icon}</span>
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                Description
              </label>
              <input
                type="text"
                placeholder="e.g. Zomato order, Gym fee…"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                className="w-full bg-white border border-pink-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

            {/* Amount */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                Amount (₹)
              </label>
              <input
                type="number"
                placeholder="0"
                min="1"
                value={form.amount}
                onChange={(e) => setForm({ ...form, amount: e.target.value })}
                onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                className="w-full bg-white border border-pink-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

            {/* Date (read-only) */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5">Date</label>
              <div className="w-full bg-white border border-pink-100 rounded-xl px-4 py-2.5 text-sm text-gray-400">
                {formatDate(getTodayDate())} — today
              </div>
            </div>

            {error && (
              <p className="text-xs text-rose-500 font-medium">{error}</p>
            )}

            {added && (
              <p className="text-xs text-pink-500 font-semibold animate-pulse">
                ✓ Transaction added!
              </p>
            )}

            <button
              onClick={handleAdd}
              className="w-full bg-pink-500 hover:bg-pink-600 active:scale-95 text-white font-bold py-3 rounded-xl text-sm transition-all shadow-md shadow-pink-200 mt-2"
            >
              Add Transaction
            </button>
          </div>

          {/* Mini summary */}
          <div className="mt-6 pt-5 border-t border-pink-200">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
              Top category
            </p>
            {categoryTotals[0]?.total > 0 && (
              <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-pink-100">
                <span className="text-2xl">{categoryTotals[0].icon}</span>
                <div>
                  <p className="text-sm font-bold text-gray-700">{categoryTotals[0].name}</p>
                  <p className="text-xs text-pink-500 font-semibold">
                    {formatINR(categoryTotals[0].total)}
                  </p>
                </div>
                <span className="ml-auto text-xs text-white font-bold bg-pink-400 rounded-full px-2.5 py-1">
                  #{1}
                </span>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}