import React from 'react'
import { useAuth } from '../../context/auth'
import AdminMenu from '../../components/Layouts/AdminMenu'

const Product = () => {

    const[auth, setAuth] = useAuth()

  return (
    <div className='mt-[120px] flex h-screen justify-evenly '>
      <div className='w-[300px] h-full'>
        <AdminMenu />
      </div>

      <div className='border w-2/3'>
        Product Display
      </div>
    </div>
  )
}

export default Product