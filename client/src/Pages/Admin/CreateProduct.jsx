import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/auth'
import AdminMenu from '../../components/Layouts/AdminMenu'
import { toast} from "react-toastify"
import axios from 'axios'

const CreateProduct = () => {

    const [ products, setProducts] = useState("");

    const getAllProduct = async() => {
      try {
        const {data} = await axios.post("http://localhost:5002/api/v1/auth/get-product")
        setProducts(data.products)
      } catch (error) {
        console.log(error);
        toast.error("Somethin went wrong !")
      }
    }

    useEffect(() => {
      getAllProduct()
    }, [])

  return (
    <div className='mt-[120px] flex h-screen gap-4 p-5  justify-evenly '>
      <div className='w-[300px] h-full'>
        <AdminMenu />
      </div>

      <div className='border w-screen'>
       <h1 className='text-center mt-2 text-xl font-semibold'>Create Product </h1>

       <div className='cards'>
        cards
       </div>
      </div>
    </div>
  )
}

export default CreateProduct