import React, { useState } from "react";
import "../../CSS/Login.css";
import regsiter from "../../assets/register.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useAuth } from "../../context/auth";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/api/v1/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        console.log(res.data.success)
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem('auth', JSON.stringify(res.data))
        navigate(location.state || "/",);
      } else {
        toast.error("Somethin went wrong")
      }
    } catch (error) {
      console.log(error);
      console.log("Somethin went wrong !");
    }
  };

  return (
    <div className="main-login-container">
      <div className="left-auth-login-container">
        <section className="google-auth">
          <h1>Welcome back! Login</h1>
        </section>
        <section className="email-auth">
          <form onSubmit={handleLogin} className="form-control">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Paasword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          <section className="password-container">
            <div className="forgot-container">
              <input type="checkbox" className="check" name="check"  />
              <label>Keep me loged in</label>
            </div>
            <Link className="forgot-link">Forgot Paasword</Link>
          </section>
          <button className="register-btn">
            Login <FaArrowRight className="register-arrow" />
          </button>
          </form>
          <hr className="hr-line" />
          <span className="acc-span">
            Don't have an account yet? <Link to="/register">Regsiter</Link>
          </span>
        </section>
      </div>
      <div className="right-auth-login-container">
        <img src={regsiter} className="login-img" alt="illustration" />
      </div>
    </div>
  );
};

export default Login;
