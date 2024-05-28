import React, { useEffect, useState } from "react";
import axios from "axios";
import car from "../assets/audi.jpeg";

const CarDetails = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5002/api/v1/auth/get-product"
      );
      setProducts(data.product);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleButtonClick = (product) => {
    setSelectedProduct(product);
  };

  // Display the first product in the list when no product is selected
  const firstProduct = products.length > 0 ? products[0] : null;

  return (
    <div className="mt-5 w-full">
      <div className="text-center block m-auto w-1/2 max-[768px]:w-full">
        <h3 className="text-2xl font-bold my-1">Vehicle Models</h3>
        <p className="text-4xl font-extrabold my-2">Our rental fleet</p>
        <p className="text-center px-12 text-neutral-500 font-semibold my-3 max-[768px]:w-full">
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </div>
      <div className="flex gap-x-6 justify-between  px-10 my-16 max-[768px]:flex-col max-[768px]:gap-y-10">
        <div className="car-details flex flex-col w-fit  gap-y-5">
          {products.slice(0, 6).map((pro) => (
            <button
              key={pro._id}
              onClick={() => handleButtonClick(pro)}
                className="py-4 border"
            >
              {pro.mark}
            </button>
          ))}
        </div>
        <div className="max-[768px]:block max-[768px]:m-auto">
          {selectedProduct ? (
            <img
              src={`http://localhost:5002/api/v1/auth/product-photo/${selectedProduct._id}`}
              alt={selectedProduct.mark}
              onError={(e) => {
                e.target.src = "/path/to/default-image.jpg";
              }} // Replace with your default image path
            />
          ) : (
            <img
              src={
                firstProduct
                  ? `http://localhost:5002/api/v1/auth/product-photo/${firstProduct._id}`
                  : car
              }
              alt={firstProduct ? firstProduct.mark : "default-car"}
              onError={(e) => {
                e.target.src = "/path/to/default-image.jpg";
              }} // Replace with your default image path
            />
          )}
        </div>
        <div className="max-[768px]:block max-[768px]:m-auto">
          <div
            className="info-box"
            style={{
              border: "2px solid black",
              width: "250px",
              minHeight: "300px",
            }}
          >
            {selectedProduct ? (
              <>
                <div
                  className="rent-info"
                  style={{
                    backgroundColor: "#2045ec",
                    color: "white",
                    padding: "0.5rem",
                    textAlign: "center",
                  }}
                >
                  <p className="text-2xl font-bold">$37 /rent per day</p>
                  {/* Add more rental information if needed */}
                </div>
                <div
                  className="car-info flex flex-col border-r"
                  style={{
                    borderTop: "2px solid black",
                    borderLeft: "2px solid black",
                    borderRight: "2px solid black",
                  }}
                >
                  <div
                    className="info-row"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0.5rem 1rem",
                      borderTop: "1px solid black",
                    }}
                  >
                    <span>Model:</span>
                    <span>{selectedProduct.category?.name}</span>
                  </div>
                  <div
                    className="info-row"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0.5rem 1rem",
                      borderTop: "1px solid black",
                    }}
                  >
                    <span>Mark:</span>
                    <span>{selectedProduct.mark}</span>
                  </div>
                  <div
                    className="info-row"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0.5rem 1rem",
                      borderTop: "1px solid black",
                    }}
                  >
                    <span>Year:</span>
                    <span>{selectedProduct.year}</span>
                  </div>
                  <div
                    className="info-row"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0.5rem 1rem",
                      borderTop: "1px solid black",
                    }}
                  >
                    <span>Doors:</span>
                    <span>{selectedProduct.doors}</span>
                  </div>
                  <div
                    className="info-row"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0.5rem 1rem",
                      borderTop: "1px solid black",
                    }}
                  >
                    <span>AC:</span>
                    <span>{selectedProduct.ac ? "Yes" : "No"}</span>
                  </div>
                  <div
                    className="info-row"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0.5rem 1rem",
                      borderTop: "1px solid black",
                    }}
                  >
                    <span>Transmission:</span>
                    <span>{selectedProduct.transmission}</span>
                  </div>
                  <div
                    className="info-row"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0.5rem 1rem",
                      borderTop: "1px solid black",
                    }}
                  >
                    <span>Fuel:</span>
                    <span>{selectedProduct.fuel}</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  className="rent-info"
                  style={{
                    backgroundColor: "#2045ec",
                    color: "white",
                    padding: "0.5rem",
                    textAlign: "center",
                  }}
                >
                  <p className="text-2xl font-bold">$37 /rent per day</p>
                  {/* Add more rental information if needed */}
                </div>
                <div
                  className="car-info flex flex-col border-r"
                  style={{
                    borderTop: "2px solid black",
                    borderLeft: "2px solid black",
                    borderRight: "2px solid black",
                  }}
                >
                  <div
                    className="info-row"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0.5rem 1rem",
                      borderTop: "1px solid black",
                    }}
                  >
                    <span>Model:</span>
                    <span>{firstProduct?.category?.name}</span>
                  </div>
                  <div
                    className="info-row"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0.5rem 1rem",
                      borderTop: "1px solid black",
                    }}
                  >
                    <span>Mark:</span>
                    <span>{firstProduct?.mark}</span>
                  </div>
                  <div
                    className="info-row"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0.5rem 1rem",
                      borderTop: "1px solid black",
                    }}
                  >
                    <span>Year:</span>
                    <span>{firstProduct?.year}</span>
                  </div>
                  <div
                    className="info-row"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0.5rem 1rem",
                      borderTop: "1px solid black",
                    }}
                  >
                    <span>Doors:</span>
                    <span>{firstProduct?.doors}</span>
                  </div>
                  <div
                    className="info-row"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0.5rem 1rem",
                      borderTop: "1px solid black",
                    }}
                  >
                    <span>AC:</span>
                    <span>{firstProduct?.ac ? "Yes" : "No"}</span>
                  </div>
                  <div
                    className="info-row"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0.5rem 1rem",
                      borderTop: "1px solid black",
                    }}
                  >
                    <span>Transmission:</span>
                    <span>{firstProduct?.transmission}</span>
                  </div>
                  <div
                    className="info-row"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0.5rem 1rem",
                      borderTop: "1px solid black",
                    }}
                  >
                    <span>Fuel:</span>
                    <span>{firstProduct?.fuel}</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
