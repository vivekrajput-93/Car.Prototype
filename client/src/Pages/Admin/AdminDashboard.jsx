import React from 'react'
import { useAuth } from '../../context/auth'

const AdminDashboard = () => {

    const[auth, setAuth] = useAuth()

  return (
    <div>
       
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vel itaque sit qui, odit incidunt excepturi nobis maxime, animi, inventore quaerat. Deleniti placeat ex ipsa mollitia asperiores harum tenetur ipsum.</h2>
    </div>
  )
}

export default AdminDashboard