import React, { useEffect, useState } from "react";
import AdminMenu from "../../components/Layouts/AdminMenu";
import CategoryForm from "../../components/CategoryForm";
import { toast } from "react-toastify";
import axios from "axios";

const CreateCategory = () => {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updateName, setUpdatedName] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5002/api/v1/auth/create-category",
        { name }
      );
      if (data?.success) {
        toast.success(`${name} is created`);
        setName("")
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Somethin went wrong !");
    }
  };

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5002/api/v1/auth/all-categories"
      );
      if (data.success) {
        setCategories(data.category);
        console.log(categories);
      }
    } catch (error) {
      console.log(error);
      toast.error("Somethin went wrong!");
    }
  };

  useEffect(() => {
    getAllCategory();
  });

  const handleUpdate = async () => {
    try {
      const { data } = await axios.put(
        `http://localhost:5002/api/v1/auth/update-category/${selected._id}`
      );
      if (data.success) {
        toast.success(`${updateName} is updated.`);
        setVisible(false);
        updateName("");
        setSelected(null);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error occured in Updating !");
    }
  };


  const handleDelete = async(pId) => {
    try {
      const {data} = await axios.delete(`http://localhost:5002/api/v1/auth/delete-category/${pId}`);
      if(data.success) {
        toast.success('Category is Deleted !');
        getAllCategory();
      }
      else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error);
      console.log("somethin went wrong !")
    }
  }

  return (
    <div className="mt-[80px] flex h-screen justify-evenly ">
      <div className="w-[300px] h-full">
        <AdminMenu />
      </div>

      <div className=" w-2/3">
        <h1 className="text-center font-bold text-xl mt-3 ">Manage Category</h1>

        <CategoryForm
          values={name}
          setValues={setName}
          handleSubmit={handleSubmit}
        />

        <div className="mt-4">
          <table className="min-w-full divide-y divide-gray-200 rounded-md ">
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
      </div>
    </div>
  );
};

export default CreateCategory;
