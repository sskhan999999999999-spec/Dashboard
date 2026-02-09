"use client";
import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Navbar from './Navbar';
import Link from 'next/link';
import { HomeIcon, List, PlusCircle } from 'lucide-react';
function SideBar() {
  const router = useRouter();
  const pathName = usePathname()


   const isActive = (path)=>
        pathName === path? "bg-linear-to-r from-orange-400 text-gray-50 to-orange-600 p-2 decoration-none px-4 flex gap-3  duration-900 transition-all w-50 h-fit rounded-lg " : "bg-none text-center flex gap-3 text-gray-500 p-2 px-4 "
  
  return (
    <div className="w-53 max-h-full text-gray-800 pt-9 bg-white flex justify-center">
      <div>
        <li className='list-none '>
          <Link href="/Dashboard/Home" className={isActive("/Dashboard/Home")}>🏠  Home </Link>
        </li>
        <li className='list-none '>
          <Link href="/Dashboard/Createorder" className={isActive("/Dashboard/Createorder")}>📝 CreateOrder </Link>
        </li>
        <li className='list-none '>
          <Link href='/Dashboard/Orderlist' className={isActive("/Dashboard/Orderlist")}>📄 OrderList</Link>
        </li>
      </div>
    </div>
  );
}

export default SideBar;
