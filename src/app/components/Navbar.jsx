import React from 'react'
import { useAuthStore } from '../store/store'

function Navbar() {

  const {
    logout,
  } = useAuthStore;
  return (
    <nav className='flex items-center justify-between p-4'>
        <h1 className='text-3xl text-amber-500 tracking-widest font-extrabold pl-10'>Dashboard</h1>
        <button className='bg-orange-400 px-5 py-1.5 rounded cursor-pointer font-medium text-white hover:bg-orange-500'>Logout</button>
    </nav>
  )
}

export default Navbar