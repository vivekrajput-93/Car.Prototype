import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import AdminMenu from "../../components/Layouts/AdminMenu";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Select } from "antd";
import { Option } from "antd/es/mentions";

const UpdateProduct = () => {
    const params = useParams();
  const navigate = useNavigate();
  const [mark, setMark] = useState("");
  const [categories, setCategories] = useState([]);
  const [year, setYear] = useState("");
  const [transmission, setTransmission] = useState("");
  const [photo, setPhoto] = useState("");
  const [category, setCategory] = useState("");
  const [doors, setDoors] = useState("");
  const [ac, setAc] = useState("");
  const [fuel, setFuel] = useState("");
  const [id, setId] = useState("")


  const getSingleProduct = async () => {
    try {
        const {data} = await axios.get(`http://localhost:5002/api/v1/auth/single-product/${params.slug}`)

        setMark(data.products.mark);
        setId(data.products._id);
        setTransmission(data.products.transmission);
        setCategory(data.products.category._id);
        setDoors(data.products.doors);
        setAc(data.products.ac);
        setYear(data.products.year);
        setFuel(data.products.fuel)
    } catch (error) {
        console.log(error);
        console.log("somthing is wrong")
    }
  }

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5002/api/v1/auth/all-categories"
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getSingleProduct();
    getAllCategory()
  }, []);

  const handleDelete = async () => {
    try {
      let answer = window.prompt("Are You Sure want to delete this product ? ");
      if (!answer) return;
      const { data } = await axios.delete(
        `http://localhost:5002/api/v1/auth/delete-product/${id}`
      );
      toast.success("Product DEleted Succfully");
      navigate("/products");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };


  const updateProduct = async(e) => {
      e.preventDefault()
      try {
        const prdouctData = new FormData();
        prdouctData.append('mark', mark);
        prdouctData.append('transmission', transmission);
        prdouctData.append('year', year);
        prdouctData.append("photo", photo);
        prdouctData.append("fuel", fuel);
        prdouctData.append("category", category);
        prdouctData.append("doors", doors);
        prdouctData.append("ac", ac);
        const {data} = await axios.post(`http://localhost:5002/api/v1/auth/update-product/${id}`, prdouctData);
        if(data?.success) {
          toast.success(data?.message);
          navigate("/products")
        } else {
          toast.success("Product Created Successfully");
          navigate("/products")
        }
      } catch (error) {
        console.log(error);
        console.log("somethin went wrong !")
      }
  }

  return (
    <div className="mt-[120px] flex h-full gap-4 p-5  justify-evenly ">
      <div className="w-[300px] h-full">
        <AdminMenu />
      </div>

      <div className="w-screen">
        <h1 className="text-center mt-2 text-xl font-bold">
          Update Product
        </h1>
        <div className=" mx-3 my-3 p-3">
  
              <div className="w-full flex flex-col gap-4 md:w-3/4 mx-auto">
                <Select 
                  
                  placeholder="Select a category"
                  size="large"
                  showSearch
                  className="form-select mb-3 cursor-pointer w-full"
                  onChange={(value) => {
                    setCategory(value);
                  }}
                >
                  {categories?.map((c) => (
                    <Option key={c._id} value={c._id}>
                      {c.name}
                    </Option>
                  ))}
                </Select>
                <div className="mb-3">
                  <label className="p-2  w-screen cursor-pointer rounded-xl border-stone-900 px-4 border">
                    {photo ? photo.name : "Upload Photo"}
                    <input
                      type="file"
                      name="photo"
                      accept="image/*"
                      onChange={(e) => setPhoto(e.target.files[0])}
                      hidden
                    />
                  </label>
                </div>
                <div className="mb-3">
                  {photo && (
                    <div className="text-center">
                      <img
                        src={URL.createObjectURL(photo)}
                        alt="product_photo"
                        className="h-48 object-contain mx-auto"
                      />
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={mark}
                    placeholder="Name your model"
                    className="border py-2 px-3 rounded-md outline-none shadow-lg w-full"
                    onChange={(e) => setMark(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={transmission}
                    placeholder="Mention Transmission"
                    className="border py-2 px-3 rounded-md outline-none shadow-lg w-full"
                    onChange={(e) => setTransmission(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    value={year}
                    placeholder="Year"
                    className="border py-2 px-3 rounded-md outline-none shadow-lg w-full"
                    onChange={(e) => setYear(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    value={doors}
                    placeholder="Mention doors"
                    className="border py-2 px-3 rounded-md outline-none shadow-lg w-full"
                    onChange={(e) => setDoors(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={fuel}
                    placeholder="Mention fuel"
                    className="border py-2 px-3 rounded-md outline-none shadow-lg w-full"
                    onChange={(e) => setFuel(e.target.value)}
                  />
                </div>{" "}
                <div className="mb-3">
                  <Select
                    bordered={false}
                    placeholder="Select AC"
                    size="large"
                    showSearch
                    className="form-select mb-3 border w-full rounded-md"
                    onChange={(value) => {
                      setAc(value);
                    }}
                  >
                    <Option value="0">No</Option>
                    <Option value="1">Yes</Option>
                  </Select>
                </div>
                <div className="mb-3">
                  <button
                    className="border py-2 px-3 rounded-md bg-blue-600 mr-2 text-white"
                    onClick={updateProduct}
                  >
                    UPDATE PRODUCT
                  </button>
                  <button
                    className="border py-2 px-3 rounded-md bg-blue-600 text-white"
                    onClick={handleDelete}
                  >
                    DELETE PRODUCT
                  </button>
                </div>
              </div>
            </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
