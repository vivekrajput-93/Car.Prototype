import React, { useEffect, useState } from 'react';
import axios from 'axios';
import car from "../assets/audi.jpeg";

const CarDetails = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const getAllProducts = async () => {
        try {
            const { data } = await axios.get("http://localhost:5002/api/v1/auth/get-product");
            setProducts(data.product);
        } catch (error) {
            console.log("Error fetching products:", error);
        }
    }

    useEffect(() => {
        getAllProducts();
    }, []);

    const handleButtonClick = (product) => {
        setSelectedProduct(product);
    }

    return (
        <div className='mt-5 w-full'>
            <div className='text-center block m-auto w-1/2 max-[768px]:w-full'>
                <h3 className='text-2xl font-bold my-1'>Vehicle Models</h3>
                <p className='text-4xl font-extrabold my-2'>Our rental fleet</p>
                <p className='text-center px-12 text-neutral-500 font-semibold my-3 max-[768px]:w-full'>
                    Choose from a variety of our amazing vehicles to rent for your next adventure or business trip
                </p>
            </div>
            <div className='flex gap-x-6 justify-between px-10 my-16 max-[768px]:flex-col max-[768px]:gap-y-10'>
                <div className='car-details flex flex-col gap-y-2'>
                    {products.slice(0, 6).map((pro) => (
                        <button 
                            key={pro._id} 
                            onClick={() => handleButtonClick(pro)}
                            className={selectedProduct && selectedProduct._id === pro._id ? 'bg-blue-600 text-white' : ''}
                        >
                            {pro.mark}
                        </button>
                    ))}
                </div>
                <div className='max-[768px]:block max-[768px]:m-auto'>
                    {selectedProduct ? (
                        <img 
                            src={`http://localhost:5002/api/v1/auth/product-photo/${selectedProduct._id}`} 
                            alt={selectedProduct.mark} 
                            onError={(e) => { e.target.src = '/path/to/default-image.jpg'; }} // Replace with your default image path
                        />
                    ) : (
                        <img src={car} alt='default-car' />
                    )}
                </div>
                <div className='max-[768px]:block max-[768px]:m-auto'>
                    <div className='info-box' style={{ border: '2px solid black', width: '250px', minHeight: '300px' }}>
                        {selectedProduct ? (
                            <>
                                <div className='rent-info' style={{ backgroundColor: '#2045ec', color: 'white', padding: '0.5rem', textAlign: 'center' }}>
                                    <p className='text-2xl font-bold'>$37   /rent per day</p>
                                    {/* Add more rental information if needed */}
                                </div>
                                <div className='car-info flex flex-col border-r' style={{ borderTop: '2px solid black', borderLeft: '2px solid black', borderRight: '2px solid black' }}>
                                    <div className='info-row' style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 1rem', borderTop: '1px solid black' }}>
                                        <span>Model</span><span>{selectedProduct.category?.name}</span>
                                    </div>
                                    <div className='info-row' style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 1rem', borderTop: '1px solid black' }}>
                                        <span>Mark</span><span>{selectedProduct.mark}</span>
                                    </div>
                                    <div className='info-row' style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 1rem', borderTop: '1px solid black' }}>
                                        <span>Year</span><span>{selectedProduct.year}</span>
                                    </div>
                                    <div className='info-row' style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 1rem', borderTop: '1px solid black' }}>
                                        <span>Doors</span><span>{selectedProduct.doors}</span>
                                    </div>
                                    <div className='info-row' style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 1rem', borderTop: '1px solid black' }}>
                                        <span>AC</span><span>{selectedProduct.ac ? 'Yes' : 'No'}</span>
                                    </div>
                                    <div className='info-row' style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 1rem', borderTop: '1px solid black' }}>
                                        <span>Transmission</span><span>{selectedProduct.transmission}</span>
                                    </div>
                                    <div className='info-row' style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 1rem', borderTop: '1px solid black' }}>
                                        <span>Fuel</span><span>{selectedProduct.fuel}</span>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className='py-2 px-2'>
                                {/* Placeholder for when no product is selected */}
                                
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarDetails;
