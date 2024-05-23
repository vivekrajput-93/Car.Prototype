import React, { useEffect, useState } from "react";
import AdminMenu from "../../components/Layouts/AdminMenu";
import CategoryForm from "../../components/CategoryForm";
import { toast } from "react-toastify";
import axios from "axios";
import Modal from "../../components/Modal"; // Ensure the correct path

const CreateCategory = () => {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updateName, setUpdatedName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5002/api/v1/auth/create-category",
        { name }
      );
      if (data?.success) {
        toast.success(`${name} is created`);
        setName("");
        getAllCategory(); // Refresh categories after creation
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5002/api/v1/auth/all-categories"
      );
      if (data.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  const handleUpdate = async () => {
    try {
      const { data } = await axios.put(
        `http://localhost:5002/api/v1/auth/update-category/${selected._id}`,
        { name: updateName }
      );
      if (data.success) {
        toast.success(`${updateName} is updated.`);
        setVisible(false);
        setUpdatedName("");
        setSelected(null);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error occurred in Updating!");
    }
  };

  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:5002/api/v1/auth/delete-category/${pId}`
      );
      if (data.success) {
        toast.success("Category is Deleted!");
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="mt-[80px] flex h-screen justify-evenly">
      <div className="w-[300px] h-full">
        <AdminMenu />
      </div>

      <div className="w-2/3">
        <h1 className="text-center font-bold text-xl mt-3">Manage Category</h1>

        <CategoryForm
          value={name}
          setValue={setName}
          handleSubmit={handleSubmit}
        />

        <div className="mt-8">
          <table className="min-w-full divide-y divide-gray-200 rounded-md">
            <thead className="bg-gray-50 shadow-md rounded-md">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="border shadow-lg rounded-md mt-4">
              {categories?.map((cat) => (
                <tr key={cat._id}>
                  <td className="px-6 capitalize py-4 font-bold text-base whitespace-nowrap text-gray-900">
                    {cat.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                      onClick={() => {
                        setVisible(true);
                        setUpdatedName(cat.name);
                        setSelected(cat);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => {
                        handleDelete(cat._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {visible && (
          <div className="fixed inset-0 z-50 flex items-center justify-center  bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg  w-1/2">
              <div className="flex justify-end  p-2">
                <button
                  className="text-gray-400 hover:text-gray-500 cursor-pointer"
                  onClick={() => setVisible(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-6 relative bottom-8">
                <CategoryForm
                  value={updateName}
                  setValue={setUpdatedName}
                  handleSubmit={handleUpdate}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateCategory;
