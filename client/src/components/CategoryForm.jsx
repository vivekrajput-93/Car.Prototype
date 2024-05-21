import React from "react";

const CategoryForm = ({ handleSubmit, values, setValues }) => {
  return (
    <div className="mt-8 ">
      <form className="flex gap-4 justify-center" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your category"
          value={values}
          onChange={(e) => setValues(e.target.value)}
          className="outline-none border py-1 px-3 rounded-md w-1/2 shadow-md"
        />

        <button className="bg-blue-600 px-2 py-1 font-semibold text-white rounded-md ">Create</button>
      </form>
    </div>
  );
};

export default CategoryForm;
