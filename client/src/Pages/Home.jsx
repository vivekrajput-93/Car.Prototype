import React from "react";
import Hero from "../components/Hero";
import select from "../assets/select.png";
import support from "../assets/support.png";
import drive from "../assets/drive.png";
import CarDetails from "../components/CarDetails";
import FindDetails from "../components/FindDetails";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <div className="my-32 support max-[768px]:mt-1">
        <h3 className="text-center text-2xl font-bold mb-2">Plan your trip now</h3>
        <p className="text-center text-4xl font-bold">Quick & easy car rental</p>

        <div className="flex w-full mt-16 gap-x-4 max-[768px]:flex-col max-[768px]:gap-y-10  ">
          <div className="flex flex-col justify-center items-center gap-y-3">
            <img
              src={select}
              alt="section"
              className=""
              width={150}
              height={150}
            />
            <h3 className="font-bold text-2xl mt-2">Select car</h3>
            <p className="w-2/3 text-neutral-700 text-center text-sm">
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-3 text-neutral-700">
            <img
              src={support}
              alt="section"
              className=""
              width={150}
              height={150}
            />
            <h3 className="font-bold text-2xl mt-2">Contact Support</h3>
            <p className="w-2/3 text-neutral-700 text-center text-sm">
              Our knowledgeable and friendly operators are always ready to help
              with any questions or concerns
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-3 text-neutral-700">
            <img
              src={drive}
              alt="section"
              className=""
              width={150}
              height={150}
            />
            <h3 className="font-bold text-2xl mt-2">Let's Drive</h3>
            <p className="w-2/3 text-neutral-700 text-center text-sm">
              Whether you're hitting the open road, we've got you covered with
              our wide range of cars
            </p>
          </div>
        </div>
      </div>

      <CarDetails />

      <div className="w-full h-48 bg-neutral-800 flex flex-col justify-center items-center gap-y-6 mt-36">
        <p className="text-6xl font-extrabold text-white max-[768px]:text-3xl max-[768px]:text-center ">Save big with our cheap car rental!</p>
        <h3 className="text-2xl text-white max-[768px]:text-[1.2rem] ">Top Airports. Local Suppliers. <span className="text-blue-600">24/7</span> Support.</h3>
      </div>

      <FindDetails />

    </div>
  );
};

export default Home;
