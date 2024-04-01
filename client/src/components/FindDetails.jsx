import React from "react";
import main from "../assets/main.png";
import { MdArrowForwardIos } from "react-icons/md";
import coin from "../assets/coin.png";
import saving from "../assets/saving.png";
import fast from "../assets/fast.png";

const FindDetails = () => {
  return (
    <div className="mt-24">
      <div className="block m-auto">
        <img
          src={main}
          alt="car-image"
          width={900}
          height={900}
          className="block m-auto"
        />
      </div>
      <div className="flex mt-20 max-[768px]:flex-col">
        <div className="flex flex-col w-1/2 justify-center pl-20 gap-y-5  max-[768px]:w-full  max-[768px]:pl-0  max-[768px]:text-center ">
          <h3 className="text-2xl font-bold">Why Choose us</h3>
          <p className="text-[3rem] font-extrabold pr-3 leading-tight ">Best valued deals you will ever find</p>
          <p className="pr-10 text-neutral-500  max-[768px]:pr-0  max-[768px]:mt-2  max-[768px]:px-4 " >
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so don't miss out on your chance to save big.
          </p>
          <button className="py-2 px-4 w-fit rounded-md flex justify-center items-center gap-2 bg-blue-600 text-white  max-[768px]:ml-auto  max-[768px]:mr-auto  max-[768px]:mt-4">
            Learn More <MdArrowForwardIos size={18} />
          </button>
        </div>
        <div className="w-1/2 flex flex-col  gap-y-5  max-[768px]:flex-col  max-[768px]:w-full  max-[768px]:mt-16  max-[768px]:gap-y-12 ">
          <div className="flex justify-center items-center gap-x-6  max-[768px]:flex-col  " >
            <img src={fast} alt="choose us" width={120} height={120} />
            <div className="flex flex-col gap-y-3 max-[768px]:text-center ">
              <h3 className="text-2xl font-bold ">Cross Country Drive</h3>
              <p className="w-[300px] text-justify text-neutral-500 font-medium  max-[768px]:text-center ">
                Take your driving experience to the next level with our
                top-notch vehicles for your cross-country adventures.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-x-6  max-[768px]:flex-col  ">
            <img src={coin} alt="choose us" width={120} height={120} />
            <div className="flex flex-col gap-y-3  max-[768px]:text-center">
              <h3 className="text-2xl font-bold">All Inclusive Pricing</h3>
              <p className="w-[300px] text-neutral-500 font-medium  max-[768px]:text-center">
                Get everything you need in one convenient, transparent price
                with our all-inclusive pricing policy.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-x-6  max-[768px]:flex-col  " >
            <img src={saving} alt="choose us" width={120} height={120} />
            <div className="flex flex-col gap-y-3  max-[768px]:text-center">
              <h3 className="text-2xl font-bold" >No Hidden Charges</h3>
              <p className="w-[300px] text-neutral-500 font-medium  max-[768px]:text-center">
                Enjoy peace of mind with our no hidden charges policy. We
                believe in transparent and honest pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindDetails;
