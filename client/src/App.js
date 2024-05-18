import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import GotoTop from "./components/GotoTop";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import ForgotPassword from "./components/Paasword/ForgotPassword";
import ResetPassword from "./components/Paasword/ResetPassword";
import AdminRoute from "./Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Private from "./Routes/Private";
import Dashboard from "./pages/User/Dashboard";

function App() {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Navbar auth={auth} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Private />}>
            <Route path="user" element={<Dashboard />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/reset-password/:id/:token"
            element={<ResetPassword />}
          />
          <Route path="/dashboard" element={<AdminRoute />}>
            <Route path="admin" element={<AdminDashboard />} />
          </Route>
        </Routes>
        <GotoTop />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
