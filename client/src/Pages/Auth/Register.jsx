import React, { useState } from "react";
import { IoMdPerson } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoMdLock } from "react-icons/io";
import register from "../../assets/auth/register.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify"

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if(username == '' || email == '' || password == '') {
         toast.error("Please fill the fields!")
      } 
      else if (password.length < 6) {
        toast.error("Password must be at least 6 characters long!")
      }
      const res = await axios.post("http://localhost:5002/api/v1/auth/register", {
        username,
        email,
        password,
      });
     
      if(res && res.data.success) {
        toast.success(res.data.message)
        navigate("/");
    } else {
        toast.error("User already registered!")
    }
    } catch (error) {
      console.log("somethin went wrong");
    }
  };

  return (
    <div className="w-full h-full  bg-gradient-to-r from-blue-300 to-blue-600 flex justify-center ">
      <div className="flex  px-20 mt-24 mb-6 w-[980px] items-center gap-x-6 justify-between rounded-xl h-screen bg-white shadow-xl  max-[768px]:mx-2 ">
        <form
          className="input-container mb-12 w-1/2 h-1/2 flex flex-col gap-y-3 max-[768px]:w-full"
          onSubmit={handleRegister}
        >
          <span>Sign-up</span>
          <div>
            <IoMdPerson size={16}  />
            <input
              type="text"
              name="person"
              placeholder="Your Name"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
             
            />
          </div>
          <div>
            <IoMdMail size={16}  />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <IoMdLock size={16}  />
            <input
              type="password"
              name="password"
              id=""
              placeholder="Paasword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="w-fit border py-2 rounded-md bg-blue-600 shadow-xl text-white px-5">
            Register
          </button>

          <h3 className="font-medium">
            Don't have an account?{" "}
            <Link to="/login" className="underline text-blue-600 ">
              Login
            </Link>
          </h3>
        </form>
        <div className="max-[768px]:hidden">
          <img src={register} alt="register-image" width={350} height={350} />
        </div>
      </div>
    </div>
  );
};

export default Register;
