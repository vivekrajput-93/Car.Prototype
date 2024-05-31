import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import GotoTop from "./components/GotoTop";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./components/Paasword/ForgotPassword";
import ResetPassword from "./components/Paasword/ResetPassword";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Dashboard from "./pages/User/Dashboard";
import { useAuth } from "./context/auth";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Products from "./pages/Admin/Products";
import About from "./pages/About";
import Fleet from "./pages/Fleet";
import Contact from "./pages/Contact";
import UpdateProduct from "./pages/Admin/UpdateProduct";

function App() {
  const [auth, setAuth] = useAuth();

  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Navbar auth={auth} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={auth.user?.role === 1 ? <AdminDashboard /> : <Dashboard />}
          />
          <Route path="/create-category" element={<CreateCategory />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/update-product" element={<UpdateProduct />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/reset-password/:id/:token"
            element={<ResetPassword />}
          />
        </Routes>
        <GotoTop />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
