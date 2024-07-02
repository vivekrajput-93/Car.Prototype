import React, { useEffect, useState } from "react";
import { Select, Modal, Button } from "antd";
import axios from "axios";
import { toast } from "react-toastify";

const { Option } = Select;

const UserForm = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:5002/api/v1/auth/get-product");
      if (data?.success) {
        setProducts(data?.product);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting products");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleSearch = () => {
    if (selectedProduct && pickUpLocation && dropOffLocation && pickUpDate && dropOffDate) {
      setIsModalVisible(true);
    } else {
      toast.error("Please fill all the fields");
    }
  };

  const handleProductChange = (value) => {
    const product = products.find((product) => product._id === value);
    setSelectedProduct(product);
  };

  return (
    <div className="form-bg h-[380px] block m-auto rounded-md mt-20 w-[1200px] max-[786px]:w-full max-[786px]:h-fit max-[786px]:pb-8 max-[786px]:mb-32">
      <h2 className="pt-8 pl-6 text-2xl font-bold">Book a Car</h2>
      <div className="form-section max-[786px]:flex-col max-[786px]:w-full">
        <div className="max-[786px]:w-full">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="input-icon"
            >
              <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
            </svg>
            <span>Select a car</span>
          </div>
          <Select
            placeholder="Select a product"
            size="large"
            showSearch
            className="w-[380px] h-10 max-[786px]:w-full"
            onChange={handleProductChange}
          >
            {products?.map((product) => (
              <Option key={product._id} value={product._id}>
                {product.mark}
              </Option>
            ))}
          </Select>
        </div>
        <div className="max-[786px]:w-full">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
            <span>Pick-up</span>
          </div>
          <Select
            className="w-[380px] h-10 max-[786px]:w-full"
            showSearch
            placeholder="Select a location"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            onChange={(value) => setPickUpLocation(value)}
            options={[
              { value: "Delhi", label: "Delhi" },
              { value: "Ludhiana", label: "Ludhiana" },
              { value: "Kanpur", label: "Kanpur" },
              { value: "Dehradun", label: "Dehradun" },
              { value: "Mirzapur", label: "Mirzapur" },
            ]}
          />
        </div>
        <div className="max-[786px]:w-full">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
            <span>Drop-off</span>
          </div>
          <Select
            className="w-[380px] h-10 max-[786px]:w-full"
            showSearch
            placeholder="Select a location"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            onChange={(value) => setDropOffLocation(value)}
            options={[
              { value: "Delhi", label: "Delhi" },
              { value: "Ludhiana", label: "Ludhiana" },
              { value: "Kanpur", label: "Kanpur" },
              { value: "Dehradun", label: "Dehradun" },
              { value: "Mirzapur", label: "Mirzapur" },
            ]}
          />
        </div>
        <div className="max-[786px]:w-full">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                clipRule="evenodd"
              />
            </svg>
            <span>Pick-up Date</span>
          </div>
          <input
            type="date"
            className="w-[380px] h-10 outline-none rounded-md border max-[786px]:w-full"
            onChange={(e) => setPickUpDate(e.target.value)}
          />
        </div>
        <div className="max-[786px]:w-full">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                clipRule="evenodd"
              />
            </svg>
            <span>Drop-off Date</span>
          </div>
          <input
            type="date"
            className="w-[380px] h-10 outline-none rounded-md border max-[786px]:w-full"
            onChange={(e) => setDropOffDate(e.target.value)}
          />
        </div>
        <div className="flex max-[786px]:w-full">
          <button
            className="w-[380px] h-10 mt-12 bg-blue-600 text-white font-semibold text-lg border max-[786px]:w-full"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      <Modal
        title="Booking Details"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="back" onClick={() => setIsModalVisible(false)}>
            Close
          </Button>,
        ]}
      >
        {selectedProduct && (
          <div>
            <h3>Product: {selectedProduct.mark}</h3>
            <p>Pick-up Location: {pickUpLocation}</p>
            <p>Drop-off Location: {dropOffLocation}</p>
            <p>Pick-up Date: {pickUpDate}</p>
            <p>Drop-off Date: {dropOffDate}</p>
            {selectedProduct.image && (
              <img src={selectedProduct.image} alt={selectedProduct.mark} style={{ width: "100%" }} />
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default UserForm;
