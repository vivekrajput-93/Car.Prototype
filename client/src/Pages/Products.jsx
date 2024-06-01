import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/auth'
import AdminMenu from '../../components/Layouts/AdminMenu'
import axios from 'axios';
import { Link } from 'react-router-dom';
import wheel from "../../assets/steering-wheel.svg"
import door from "../../assets/door.svg";
import gas from "../../assets/gas.svg";

const Product = () => {

    const[products, setProducts] = useState([]);

    const getAllProduct = async () => {
      try {
        const {data} = await axios.get("http://localhost:5002/api/v1/auth/get-product");
        setProducts(data.product)
        console.log(products)
      } catch (error) {
        console.log(error);
        console.log("somethin went wrong !")
      }
    }

    useEffect(() => {
      getAllProduct()
    }, [])

  return (
    <div className='mt-[120px] flex h-fit justify-evenly  '>
      <div className='w-[300px] h-full'>
        <AdminMenu />
      </div>

      <div className=' w-2/3 h-fit  '>
       <h2 className='text-center text-2xl font-semibold pt-3'> Product Display</h2>

      <div className='flex gap-4 flex-wrap px-4 py-5 mt-5 w-[100%]'>
        {products?.map((pro) => (
          <Link>
            <div className='rounded-2xl bg-blue-50 p-4  flex flex-col justify-between items-center w-[240px] h-[280px]' key={pro._id}>
              <h2 className='text-xl font-semibold'>{pro.mark}</h2>

              <div className=''>
              <img src={`http://localhost:5002/api/v1/auth/product-photo/${pro._id}`} alt="main-car" className='' />
              </div>

              <div className='product-info flex justify-between items-center gap-8'>
                <div >
                  <img src={wheel} alt="wheel" width={15} height={15} />
                  <span className='text-sm font-semibold'>{pro.transmission}</span>
                </div>
                <div>
                <img src={door} alt="wheel" width={15} height={15} className='text-blue-500'   />
                  <span className='text-sm font-semibold'>{pro.doors}/5</span>
                </div>
                <div>
                <img src={gas} alt="wheel" width={15} height={15} />
                  <span className='text-sm font-semibold'>{pro.fuel}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      </div>
      
    </div>
  )
}

export default Product