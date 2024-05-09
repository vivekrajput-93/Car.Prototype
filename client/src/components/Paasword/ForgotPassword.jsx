import React, { useState } from "react";
import { IoMdLock, IoMdMail } from "react-icons/io";
import login from "../../assets/auth/login.jpeg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5002/api/v1/auth/forgot-password', { email })
      .then(res => {
        if (res.data.Status === "Success") {
          console.log("Password reset instructions sent to your email");
          navigate("/login")
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="w-full h-full bg-gradient-to-r from-blue-300 to-blue-600 flex justify-center">
      <div className="flex flex-col px-20 mt-24 mb-6 w-[380px] items-center gap-x-6  rounded-xl h-[320px] bg-white shadow-xl max-[768px]:mx-2">

      <h3 className="relative top-16 text-2xl font-bold">Forgot Password</h3>

      <form className="flex flex-col gap-4 justify-center h-full " onSubmit={handleSubmit} >
      <div className="flex justify-center items-center gap-3 w-full border-b shadow-md py-2 px-6 text-sm">
            <IoMdMail size={16} />
            <input
              type="text"
              name="email"
              className="w-full outline-none "
              placeholder="Your Email"
              
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="w-fit border py-2 rounded-md bg-blue-600 shadow-2xl text-white px-5">
            Send
          </button>
      </form>


      </div>
    </div>
  );
};

export default ForgotPassword;
