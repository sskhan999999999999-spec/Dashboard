import React from 'react'
import UserStore from '../store/Userstore'
import { redirect } from 'next/navigation';
function Navbar() {
  const { logout } = UserStore();

  function handleLogout(){
    logout();
    redirect("/auth/Login");
  }
  return (
    <nav className='flex items-center justify-between p-4'>
        <h1 className='text-3xl text-amber-500 tracking-widest font-extrabold pl-10'>Dashboard</h1>
        <button 
        onClick={handleLogout}
        className='bg-orange-400 px-5 py-1.5 rounded cursor-pointer font-medium text-white hover:bg-orange-500'>Logout</button>
    </nav>
  )
}

export default Navbar