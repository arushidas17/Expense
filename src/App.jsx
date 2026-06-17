
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // ✅ added Navigate
import Homepg       from "./pages/Homepg";
import Login        from "./pages/Login";
import Signup       from "./pages/Signup";
import Dashboard    from "./pages/Dashboard";
import Userprofile  from "./pages/Userprofile";
import Transactions from "./pages/Transactions";

// ✅ Protected route — redirects to /login if no token
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

// ✅ Public route — redirects to /dashboard if already logged in
const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return !token ? children : <Navigate to="/dashboard" />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Homepg />} />

        {/* Auth pages — redirect to dashboard if already logged in */}
        <Route path="/login" element={
          <PublicRoute><Login /></PublicRoute>
        } />
        <Route path="/signup" element={
          <PublicRoute><Signup /></PublicRoute>
        } />

        {/* Protected pages — redirect to login if not logged in */}
        <Route path="/dashboard" element={
          <ProtectedRoute><Dashboard /></ProtectedRoute>
        } />
        <Route path="/userprofile" element={
          <ProtectedRoute><Userprofile /></ProtectedRoute>
        } />
        <Route path="/transactions" element={
          <ProtectedRoute><Transactions /></ProtectedRoute>
        } />

        {/* Catch all unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;