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

        <button>Create</button>
      </form>
    </div>
  );
};

export default CategoryForm;
