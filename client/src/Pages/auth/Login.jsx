import React from "react";
import "../../CSS/Login.css";
import { FcGoogle } from "react-icons/fc";
import regsiter from "../../assets/register.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Login = () => {
  return (
    <div className="main-login-container">
      <div className="left-auth-login-container">
        <section className="google-auth">
          <h1>Welcome back! Login</h1>
        </section>
        <section className="email-auth">
          <form className="form-control">
            <input type="text" name="username" placeholder="Username" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Paasword" />
          </form>
          <div className="password-container">
            <div className="forgot-container">
              <input type="checkbox" name="check" id="" />
              <label>Keep me loged in</label>
            </div>
            <Link className="forgot-link">Forgot Paasword</Link>
          </div>
          <button className="register-btn">
            Login <FaArrowRight className="register-arrow" />
          </button>
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
