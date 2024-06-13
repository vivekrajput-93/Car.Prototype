import React, { useEffect, useState } from "react";
import { useAuth } from "../context/auth";
import AdminMenu from "../components/Layouts/AdminMenu";
import axios from "axios";
import { Link } from "react-router-dom";
import wheel from "../assets/steering-wheel.svg";
import door from "../assets/door.svg";
import gas from "../assets/gas.svg";

const Fleet = () => {
  const [products, setProducts] = useState([]);

  const getAllProduct = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5002/api/v1/auth/get-product"
      );
      setProducts(data.product);
    } catch (error) {
      console.log(error);
      console.log("Something went wrong!");
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div className="mt-[70px]  h-fit justify-evenly  ">
      <div className="w-full h-[180px] bg-green-100 about-card relative flex justify-center items-center">
        <h2 className="text-black z-10 block m-auto text-4xl  font-extrabold absolute max-[480px]:left-[30%] ">
          Vehicle Fleet
        </h2>
      </div>

      <div className="m-8 flex justify-center gap-3">
        <div className="flex border justify-between items-center px-2 font-medium w-1/3 shadow-sm rounded-md">
          <input
            type="text"
            placeholder="Search by models"
            className=" outline-none py-1 px-2 "
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-gray-300 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <button className="border px-6 rounded-md bg-blue-600 text-white font-semibold">Search</button>
      </div>
      <div className=" w-full  h-fit  ">
        <div className="flex gap-4 flex-wrap justify-center px-4 py-5 mt-5 w-[100%]">
          {products?.map((pro) => (
            <Link key={pro._id}>
              <div className="rounded-2xl bg-blue-50 p-4  flex flex-col justify-between items-center w-[280px] h-[360px]">
                <h2 className="text-xl font-semibold">{pro.mark}</h2>
                <p className="mb-1 font-medium">{pro.category.name}</p>
                <div className="">
                  <img
                    src={`http://localhost:5002/api/v1/auth/product-photo/${pro._id}`}
                    alt="main-car"
                    className=""
                  />
                </div>
                <div className="product-info flex justify-between items-center gap-8">
                  <div>
                    <img src={wheel} alt="wheel" width={15} height={15} />
                    <span className="text-sm font-semibold">
                      {pro.transmission}
                    </span>
                  </div>
                  <div>
                    <img
                      src={door}
                      alt="wheel"
                      width={15}
                      height={15}
                      className="text-blue-500"
                    />
                    <span className="text-sm font-semibold">{pro.doors}/5</span>
                  </div>
                  <div>
                    <img src={gas} alt="wheel" width={15} height={15} />
                    <span className="text-sm font-semibold">{pro.fuel}</span>
                  </div>
                </div>
                <button className="mt-1  py-2 bg-blue-600 text-white font-medium w-full rounded-md shadow-md shadow-blue-400">
                  Book now
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fleet;
