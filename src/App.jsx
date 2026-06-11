import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepg from "./pages/Homepg";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Userprofile from  "./pages/Userprofile";
import Transaction from "./pages/Transaction";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepg />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/userprofile" element={<Userprofile />} />
        <Route path="/transaction" element={<Transaction/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
