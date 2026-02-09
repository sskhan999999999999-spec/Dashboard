"use client"
import React,{useEffect}from 'react'
import { useAuthStore } from '../store/store'
import { usePathname, useRouter } from 'next/navigation';
import UserStore from '../store/Userstore';

function Navbar() {
  const router = useRouter()
  const user = UserStore.getState().user
  const logout = UserStore.getState().logout
  
 

  function handleLogout (){
    logout()
   window.location.replace("/auth/Login")
    
  }
   useEffect(() => {
    const handlePopState = () => {
      
      if (!user) {
        router.replace("/auth/Login");
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [router]);
  return (
    <nav className='flex items-center justify-between p-4'>
        <h1 className='text-3xl text-amber-500 tracking-widest font-extrabold pl-10'>Dashboard</h1>
        <button className='bg-orange-400 px-5 py-1.5 rounded-lg cursor-pointer font-medium text-white hover:bg-orange-500' onClick={handleLogout}>Logout</button>
    </nav>
  )
}

export default Navbar