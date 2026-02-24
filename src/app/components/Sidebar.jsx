"use client";
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Navbar from './Navbar';
import Link from 'next/link';
import UserStore from '../store/Userstore';
import { Accessibility,BoxIcon, Box, Home, List, ListCheckIcon, ListChevronsUpDownIcon, LockIcon, LockKeyholeIcon, Package, Image, LucideImages, ImageUpscale, ImageDownIcon, ImageIcon } from 'lucide-react';
import { createUserStore } from '../store/CreateUserStore';


function SideBar() {
  const router = useRouter();
  const user = UserStore.getState().user
  const pathName = usePathname()
  const [mounted,setMounted] = useState(false)
  const logout = UserStore.getState().logout
  const users = createUserStore.getState().Users
  useEffect(()=>{
    setMounted(true)
  },[])

  if(!mounted) return null

console.log(user?.email);
function handleLogout (){
  logout()
  router.replace("/auth/Login")
}

const roles = users
  ?.filter(user => user && typeof user === 'object' && user.role !== undefined)
  .map(user => user.role || 'No Role'); // Agar role empty string "" hai to 'No Role' dikhayega

console.log(users?.role);


   const isActive = (path)=>
        pathName === path? "bg-white/50 text-gray-900   p-2 decoration-none px-4 flex gap-3  duration-200 transition-all w-55 h-fit rounded-lg " : "bg-none text-center flex gap-3 text-gray-white p-2 px-4 "
  
  return (
    <div className="w-60 max-h-full  h-screen sticky left-0 text-white/90  bg-linear-to-b from-blue-900 to-blue-700 flex-col justify-center    shadow-xl z-40 p-2">
      <div className='p-4 px-4 flex gap-2 border-b-2 border-b-white/20 '>
        <span className='text-amber-500  '><BoxIcon fill='#f59e0b' stroke='white' strokeOpacity={0.5} height={30} width={30}/></span>
        <h1 className='text-white  text-2xl font-semibold'> Dashboard</h1>
      </div>
      <div className='mt-4 text-center'>
        <li className='list-none  '>
          <Link href="/Dashboard/Home" className={isActive("/Dashboard/Home")}><Home/>  Home </Link>
        </li>
        {user?.email === "super@gmail.com"   && (<li className='list-none  '>
          <Link href="/Dashboard/Createorder" className={isActive("/Dashboard/Createorder")}><List/> CreateOrder </Link>
        </li>)}
        
        <li className='list-none '>
          <Link href='/Dashboard/Orderlist' className={isActive("/Dashboard/Orderlist")}><Package/> OrderList</Link>
        </li>
        {user?.email === "super@gmail.com"  && <li className='list-none '>
          <Link href='/Dashboard/AccessForm' className={isActive("/Dashboard/AccessForm")}><LockKeyholeIcon/> AccessForm</Link>
        </li>} 
      </div>
      <div className='mt-80  p-2  w-full'>

      <div>
        <div className='flex  items-center gap-1 border-t-2 border-t-white/20 pt-4 w-full '>
        <div className='bg-white/50 p-2 rounded-4xl'>
            <ImageIcon height={40} width={40}/>
            </div>
          <div className=''>
        <p>Shah Sawar</p>
        <p>Admin</p>
          </div>
        </div>
        
        <div className='shadow-2xl p-2 px-4 bg-blue-800 duration-200 mt-3 rounded-md w-30 text-center hover:bg-blue-900/80 ' onClick={handleLogout}>
        <button >Logout</button>
      </div>
      </div>
      </div>
      
    </div>
  );
}

export default SideBar;
