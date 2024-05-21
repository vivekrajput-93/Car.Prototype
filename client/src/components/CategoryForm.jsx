import React from "react";

const CategoryForm = ({ handleSubmit, values, setValues }) => {
  return (
    <div className="mt-4">
      <form className="">
        <input
          type="text"
          placeholder="Enter your category"
          value={values}
          onChange={(e) => setValues(e.target.value)}
        />

        <button className="bg-blue-600 px-2 py-1">Create</button>
      </form>
    </div>
  );
};

export default CategoryForm;
