import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbarmain from "../components/Navbarmain";
import { CATEGORIES, formatDate, formatINR } from "../constants"; // ✅ removed INCOME, INITIAL_TRANSACTIONS
import axiosInstance from "../utils/axiosInstance";

function DonutChart({ data, total }) {
  const [hovered, setHovered] = useState(null);
  const R = 80, cx = 110, cy = 110, sw = 30;
  const circ = 2 * Math.PI * R;
  let cum = 0;
  const slices = data.filter(d => d.total > 0).map(d => {
    const pct = d.total / total;
    const s = { ...d, dash: circ * pct, gap: circ * (1 - pct), offset: -cum * circ };
    cum += pct;
    return s;
  });
  const active = hovered ? data.find(d => d.name === hovered) : null;
  return (
    <div className="flex flex-col items-center">
      <svg width="220" height="220" viewBox="0 0 220 220">
        <circle cx={cx} cy={cy} r={R} fill="none" stroke="#fce7f3" strokeWidth={sw} />
        {slices.map(s => (
          <circle
            key={s.name} cx={cx} cy={cy} r={R} fill="none"
            stroke={s.pieColor}
            strokeWidth={hovered === s.name ? sw + 6 : sw}
            strokeDasharray={`${s.dash} ${s.gap}`}
            strokeDashoffset={s.offset}
            style={{ transition: "stroke-width 0.2s", cursor: "pointer", transformOrigin: `${cx}px ${cy}px`, transform: "rotate(-90deg)" }}
            onMouseEnter={() => setHovered(s.name)}
            onMouseLeave={() => setHovered(null)}
          />
        ))}
        <text x={cx} y={cy - 10} textAnchor="middle" fontSize="11" fill="#9ca3af" fontWeight="600">
          {active ? active.name : "Total"}
        </text>
        <text x={cx} y={cy + 14} textAnchor="middle" fontSize="15" fill="#be185d" fontWeight="800">
          {active ? formatINR(active.total) : formatINR(total)}
        </text>
      </svg>
      <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-1">
        {data.filter(d => d.total > 0).map(d => (
          <div
            key={d.name}
            className="flex items-center gap-2 cursor-pointer"
            onMouseEnter={() => setHovered(d.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: d.pieColor }} />
            <span className={`text-xs font-semibold ${hovered === d.name ? "text-pink-600" : "text-gray-500"}`}>
              {d.icon} {d.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]); // ✅ empty, loads from DB
  const [income, setIncome]             = useState(0);  // ✅ real income from DB
  const [loading, setLoading]           = useState(true);

  // ✅ Fetch all transactions from MongoDB
  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get("/transactions");
      setTransactions(res.data);

      // ✅ Calculate income from transactions with type "income"
      const totalIncome = res.data
        .filter(t => t.type === "income")
        .reduce((s, t) => s + Number(t.amount), 0);
      setIncome(totalIncome);

    } catch (err) {
      console.error("Failed to fetch transactions", err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Only expense transactions count as spending
  const totalSpent = transactions
    .filter(t => t.type === "expense")
    .reduce((s, t) => s + Number(t.amount), 0);

  const savings = Math.max(income - totalSpent, 0);

  // ✅ Recent 5 transactions (all types)
  const recent = [...transactions]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  const categoryTotals = CATEGORIES.map(cat => ({
    ...cat,
    total: transactions
      .filter(t => t.category === cat.name && t.type === "expense")
      .reduce((s, t) => s + Number(t.amount), 0),
  })).sort((a, b) => b.total - a.total);

  const summaryCards = [
    {
      label: "Income",
      value: formatINR(income), // ✅ real income from DB
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: "Savings",
      value: formatINR(savings), // ✅ calculated from real data
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      label: "Expenditure",
      value: formatINR(totalSpent), // ✅ real expenses from DB
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  // ✅ Loading screen
  if (loading) {
    return (
      <div className="min-h-screen bg-pink-50/50 font-sans">
        <Navbarmain />
        <div className="flex items-center justify-center h-[80vh]">
          <p className="text-pink-400 font-semibold animate-pulse">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50/50 font-sans">
      <Navbarmain />
      <main className="px-4 sm:px-6 py-8 max-w-5xl mx-auto">

        {/* Summary Cards — same JSX, now uses real data */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          {summaryCards.map(card => (
            <div key={card.label} className="bg-white rounded-2xl p-6 border border-pink-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="w-14 h-14 rounded-full bg-pink-50 flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <p className="text-sm font-bold text-pink-500 mb-1 uppercase tracking-wide">{card.label}</p>
              <p className="text-3xl font-extrabold text-pink-800">{card.value}</p>
            </div>
          ))}
        </div>

        {/* Donut Chart — same JSX */}
        <div className="mb-6">
          <div className="bg-white rounded-2xl border border-pink-100 p-5 shadow-sm">
            <h2 className="text-xs font-bold uppercase tracking-widest text-pink-400 mb-4">Spending Breakdown</h2>
            {totalSpent > 0
              ? <DonutChart data={categoryTotals} total={totalSpent} />
              : <p className="text-sm text-gray-400 text-center py-10">No transactions yet.</p>
            }
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-2xl border border-pink-100 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-pink-400">Recent Transactions</h2>
            <Link to="/transactions" className="text-xs font-semibold text-pink-500 hover:text-pink-700 transition-colors">
              View all →
            </Link>
          </div>
          <div className="space-y-1">
            {recent.map(t => {
              const cat = CATEGORIES.find(c => c.name === t.category);
              return (
                <div key={t._id} className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-pink-50 transition-colors"> {/* ✅ _id */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-pink-50 flex items-center justify-center text-base">{cat?.icon}</div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{t.title}</p> {/* ✅ title not description */}
                      <p className="text-xs text-gray-400">{formatDate(t.date)}</p>
                    </div>
                  </div>
                  {/* ✅ color based on type */}
                  <span className={`text-sm font-bold ${t.type === "income" ? "text-green-500" : "text-rose-500"}`}>
                    {t.type === "income" ? "+" : "-"}{formatINR(t.amount)}
                  </span>
                </div>
              );
            })}
            {recent.length === 0 && (
              <p className="text-sm text-gray-400 text-center py-6">No transactions yet.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}