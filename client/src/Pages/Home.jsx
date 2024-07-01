import React from "react";
import Hero from "../components/Hero";
import select from "../assets/select.png";
import support from "../assets/support.png";
import drive from "../assets/drive.png";
import CarDetails from "../components/CarDetails";
import FindDetails from "../components/FindDetails";
import comma from "../assets/comma.png";
import toji from "../assets/toji.jpeg";
import nanami from "../assets/nanami.jpeg";
import Accordion from "../components/Acordion";
import apple from "../assets/apple.png";
import google from "../assets/google.png";
import copy from "../assets/copy.png"
import UserFrom from "../components/UserFrom";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />

      <UserFrom />
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


      <div className="mt-24 bg-gray-100 ">
        <div className="w-1/2  block m-auto text-center pt-24 max-[768px]:w-full">
          <h3 className="text-2xl font-bold mb-2">Reviewed by People</h3>
          <p className="text-4xl font-extrabold mb-4">Client's Testimonials</p>
          <p className="font-semibold text-neutral-500 mb-5  max-[768px]:px-5">Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
        </div>

        <div className="flex gap-x-10 mt-16 px-32 pb-24  max-[768px]:flex-col max-[768px]:px-6 max-[768px]:gap-y-6">
          <div className="card">
            <p>"We rented car from this website and had an amazing work. The booking was easy and the rental rates were affordable. "</p>
            <div className="sub-card">
              <div className="person-card">
                <img src={toji} alt="person" width={70} height={70} className="rounded-full object-contain" />
                <h3>Toji</h3>
              </div>
              <img src={comma} alt="" width={50} height={50} className="object-contain" />
            </div>
          </div>
          <div className="card">
            <p>"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"</p>
            <div className="sub-card">
              <div className="person-card">
                <img src={nanami} alt="person" width={70} height={70} className="rounded-full object-contain" />
                <h3>Nanami</h3>
              </div>
              <img src={comma} alt="" width={50} height={50} className="object-contain" />
            </div>
          </div>
        </div>
      </div>

      <div>
      <div className="w-1/2  block m-auto text-center pt-24 max-[768px]:w-full">
          <h3 className="text-2xl font-bold mb-2">FAQ</h3>
          <p className="text-4xl font-extrabold mb-4">Frequently Asked Questions</p>
          <p className="font-semibold text-neutral-500 mb-5  max-[768px]:px-5">Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>
        </div>

        <Accordion />


        <div className="flex gap-x-2 justify-center items-center bg-gray-100 h-[90vh] ">
          <div className="w-1/2 flex flex-col gap-y-4 px-12 ml-4 mt-16  max-[768px]:w-full  max-[768px]:gap-y-12 ">
            <h3 className="text-4xl font-extrabold leading-[3rem]">Download our app to get most out of it</h3>
            <p className="text-[.8rem] text-neutral-600">Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
            <div className="flex gap-x-5 ">
              <img src={apple} alt="app-store " width={150} height={150} />
              <img src={google} alt="app-store " width={150} height={150} />
            </div>
          </div>
          <div className="relative top-[10rem] max-[768px]:hidden">
            <img src={copy} alt="copy of a image which is confidiental" width={800} height={800} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
