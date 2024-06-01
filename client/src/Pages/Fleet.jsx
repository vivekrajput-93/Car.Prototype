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
      console.log(products);
    } catch (error) {
      console.log(error);
      console.log("somethin went wrong !");
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

      <div className=" w-full  h-fit  ">
        <div className="flex gap-4 flex-wrap justify-center px-4 py-5 mt-5 w-[100%]">
          {products?.map((pro) => (
            <Link>
              <div
                className="rounded-2xl bg-blue-50 p-4  flex flex-col justify-between items-center w-[280px] h-[360px]"
                key={pro._id}
              >
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
                <button className="mt-1  py-2 bg-blue-600 text-white font-medium w-full rounded-md shadow-md shadow-blue-400">Book now</button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fleet;
