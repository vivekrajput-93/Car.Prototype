import React from "react";

const Contact = () => {
  return (
    <div className="mt-[70px] h-fit">
      <div className="w-full h-[180px] bg-green-100 about-card relative flex justify-center items-center">
        <h2 className="text-black z-10 block m-auto text-4xl  font-extrabold absolute max-[480px]:left-[30%] ">
          Contact Us
        </h2>
      </div>
      <div className="w-full flex p-4 mt-12 max-[768px]:flex-col ">
        <div className="flex flex-col flex-1 gap-3 ">
          <h2 className="text-5xl py-4 font-bold leading-tight max-[768px]:text-center max-[486px]:text-4xl">
            Need additional information?
          </h2>
          <p className="w-2/3 py-3 font-semibold text-gray-500 max-[768px]:w-full max-[768px]:text-center">
            A multifaceted professional skilled in multiple fields of research,
            development as well as a learning specialist. Over 15 years of
            experience.
          </p>
          <div className="flex gap-2  py-2 font-bold items-center max-[768px]:justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <span>+91 9347171539</span>
          </div>
          <div className="flex gap-2  py-2 font-bold items-center max-[768px]:justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <span>viveksingh@gmail.com</span>
          </div>
          <div className="flex gap-2  py-2 font-bold items-center max-[768px]:justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <span>UP, India</span>
          </div>
        </div>
        <div className="flex-1 p-4 mt-6">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2 ">
              <label className="font-semibold text-xl">Full Name</label>
              <input
                type="text"
                placeholder="E.G: Joe Samoe"
                className="border px-2 py-3 bg-gray-200 outline-none font-medium"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-xl">Email</label>
              <input
                type="email"
                placeholder="yourexample@gmail.com"
                className="border px-2 py-3 bg-gray-200 outline-none font-medium"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-xl">Tell us about it</label>
              <textarea
                type="text"
                placeholder="Write here..."
                className="border px-2 h-36 bg-gray-200 outline-none font-medium"
              />
            </div>
          </div>

          <button className="mt-3  px-4 py-3 w-full flex gap-2 items-center justify-center bg-blue-600 shadow-md shadow-blue-600 rounded-md text-white">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
              />
            </svg>
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
