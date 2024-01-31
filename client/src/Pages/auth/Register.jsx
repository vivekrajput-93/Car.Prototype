import React, { useState } from "react";
import "../../CSS/Register.css";
import regsiter from "../../assets/register.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';


const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const notify = () => toast('Here is your toast.');

  const handleSubmit = async(e) => {
      e.preventDefault();
      try {
        const user = await axios.post("http://localhost:5001/api/v1/register", {username, email, password})
        if(user && user.data.success) {
          toast.success(user.data.message)
          navigate("/");
        } else {
          toast.error("User is registered !")
        }
      } catch (error) {
        console.log(error)
        console.log("somethin went wrong !")
      }
  }


  return (
    <div className="main-register-container">
      <div className="left-auth-container">
        <section className="google-auth">
          <h1>Welcome ! Sign up</h1>
        </section>
        <section className="email-auth">
          <form  onSubmit={handleSubmit} className="form-control">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
          <button className="register-btn" onClick={notify}>
            Sign up <FaArrowRight className="register-arrow" />
          </button>
          </form>
          <hr className="hr-line" />
          <span className="acc-span">
            Already have account? <Link to="/login">Login</Link>
          </span>
        </section>
      </div>
      <div className="right-auth-container">
        <img src={regsiter} className="register-img" alt="illustration" />
      </div>
    </div>
  );
};

export default Register;
