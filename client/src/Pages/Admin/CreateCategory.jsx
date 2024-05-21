import React, { useState } from 'react'
import AdminMenu from '../../components/Layouts/AdminMenu'
import CategoryForm from '../../components/CategoryForm'
import { toast } from "react-toastify";
import axios from 'axios';

const CreateCategory = () => {

  const[name, setName] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const {data } = await axios.post("http://localhost:5002/api/v1/auth/create-category", {name})
      if (data?.success) {
        toast.success(`${name} is created`);
        
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("")
    }
  }


  return (
    <div className='mt-[80px] flex h-screen justify-evenly '>
      <div className='w-[300px] h-full'>
        <AdminMenu />
      </div>

      <div className=' w-2/3'>
        <h1 className='text-center font-bold text-xl mt-3 '>Manage Category</h1>

        <CategoryForm values={name} setValues={setName} handleSubmit={handleSubmit} />
      </div>
    </div>
  )
}

export default CreateCategory