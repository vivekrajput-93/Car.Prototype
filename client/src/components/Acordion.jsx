import React, { useState } from "react";
import data from "../helper/data";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const handleAccordion = (currentId) => {
    setSelected(currentId === selected ? null : currentId);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center mt-[-6rem] ">
      {data && data.length ? (
        <div className="w-[900px] h-[max-content] px-4 py-5  flex flex-col justify-center ">
          {data.map((list) => (
            <div key={list.id}  >
              <div
                className=" px-5 flex border-b py-5 justify-between  text-black bg-white shadow-lg  cursor-pointer transition-all duration-100"
                onClick={() => handleAccordion(list.id)}
              >
                <h3 className="font-bold  text-lg ">{list.question}</h3>
                <span>{selected === list.id ? <MdKeyboardArrowUp size={24} /> : <MdKeyboardArrowDown size={24} />}</span>
              </div>
              <p
                className={`px-4 py-2 text-center font-bold  text-neutral-600 border-b bg-white text-sm transition-all duration-300 ${selected === list.id ? 'block' : 'hidden'}`}
              >
                {list.answer}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div>Data was not able !</div>
      )}
    </div>
  );
};

export default Accordion;
