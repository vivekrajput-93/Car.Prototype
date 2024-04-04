import React from "react";
import { IoMdPerson } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoMdLock } from "react-icons/io";
import register from "../../assets/auth/register.jpg";
import {Link} from "react-router-dom"

const Register = () => {
  return (
    <div className="w-full h-full  bg-gradient-to-r from-blue-300 to-blue-600 flex justify-center ">
      <div className="flex  px-20 mt-24 mb-6 w-[980px] items-center gap-x-6 justify-between rounded-xl h-screen bg-white shadow-xl  max-[768px]:mx-2 ">
        <div className="input-container mb-12 w-1/2 h-1/2 flex flex-col gap-y-3 max-[768px]:w-full">
            <span>Sign-up</span>
          <div>
            <IoMdPerson size={16} className="icon-btn"  />
            <input type="text" name="person" placeholder="Your Name" />
          </div>
          <div>
            <IoMdMail size={16} className="icon-btn" />
            <input type="text" name="email" id="" placeholder="Your Email" />
          </div>
          <div>
            <IoMdLock size={16} className="icon-btn" />
            <input
              type="text"
              name="password"
              id=""
              placeholder="Paasword"
            />
          </div>
          <section className="flex gap-x-3  items-center mb-4">
            <input type="checkbox" name="" id="" />
           <Link to="/forgot"> <h2 className="font-medium underline text-blue-600 ">Forgot Password</h2></Link>
          </section>
          <button className="w-fit border py-2 rounded-md bg-blue-600 shadow-xl text-white px-5">Register</button>

          <h3 className="font-medium">Don't have an account? <Link to="/login" className="underline text-blue-600 ">Login</Link></h3>
        </div>
        <div className="max-[768px]:hidden">
          <img src={register} alt="register-image" width={350} height={350} />
        </div>
      </div>
    </div>
  );
};

export default Register;
