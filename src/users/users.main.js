import React from 'react'
import { Outlet } from 'react-router-dom'

const User = () => {
  return (
    <div>
        <h1 className='font-bold text-xl'>User</h1>
        <h2 className=' m-4 font-semibold'>main page, you can add navbar here</h2>
        <Outlet />
    </div>
  )
}

export default User