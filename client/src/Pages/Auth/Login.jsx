import React, { useState } from "react";
import { IoMdPerson } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoMdLock } from "react-icons/io";
import login from "../../assets/auth/login.jpeg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth(); // Remove initialization

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5002/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        setAuth(res.data); // Set auth with response data directly
        toast.success(res.data.message);
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        if (res.data && res.data.message === "User is not Registered!") {
          toast.error("User is not Registered!");
        } else {
          toast.error("Invalid Email or Password!");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Invalid Email or Password!");
    }
  };

  return (
    <div className="w-full h-full bg-gradient-to-r from-blue-300 to-blue-600 flex justify-center">
      <div className="flex px-20 mt-24 mb-6 w-[980px] items-center gap-x-6 justify-between rounded-xl h-screen bg-white shadow-xl max-[768px]:mx-2">
        <form
          className="input-container mb-12 w-1/2 h-1/2 flex flex-col gap-y-3 max-[768px]:w-full"
          onSubmit={handleLogin}
        >
          <span>Login</span>
          <div>
            <IoMdMail size={16} />
            <input
              type="text"
              name="email"
              className="w-full"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <IoMdLock size={16} />
            <input
              type="password" // Change input type to password
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <section className="flex gap-x-3 items-center mb-4">
            <Link to="/forgot">
              <h2 className="font-medium underline text-blue-600">
                Forgot Password
              </h2>
            </Link>
          </section>
          <button className="w-fit border py-2 rounded-md bg-blue-600 shadow-2xl text-white px-5">
            Login
          </button>
          <h3 className="font-medium">
            Don't have an account?{" "}
            <Link to="/register" className="underline text-blue-600">
              Register
            </Link>
          </h3>
        </form>
        <div className="max-[768px]:hidden">
          <img src={login} alt="register-image" width={370} height={370} />
        </div>
      </div>
    </div>
  );
};

export default Login;
