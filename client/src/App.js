import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import GotoTop from "./components/GotoTop";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

function App() {
  const [auth, setAuth] = useState({
    user: null,
    token: ""
  });

  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Navbar auth={auth} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <GotoTop />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
