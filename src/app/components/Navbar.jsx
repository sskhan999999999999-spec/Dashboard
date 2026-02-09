"use client"
import React ,{useEffect} from 'react'
import UserStore from '../store/Userstore'

import { Toaster, toast } from 'react-hot-toast';
import { useOrderStore } from '../store/store';
import { useRouter } from 'next/navigation';

function Navbar() {
  const { logout } = UserStore();
  const router = useRouter()

  const clearOrder = useOrderStore((s) => s.clearOrder);

  function handleLogout(){
    logout();
    toast.success("Logout Successfully !")
    // clearOrder();
    router.replace("/auth/Login");
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
      <Toaster />
        <h1 className='text-3xl text-amber-500 tracking-widest font-extrabold pl-10'>Dashboard</h1>
        <button className='bg-orange-400 px-5 py-1.5 rounded-lg cursor-pointer font-medium text-white hover:bg-orange-500' onClick={handleLogout}>Logout</button>
    </nav>
  )
}

export default Navbar