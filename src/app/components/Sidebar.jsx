"use client";
import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Navbar from './Navbar';
function SideBar() {
  const router = useRouter();
  const pathname = usePathname();

  const activeClass = "bg-linear-to-r from-orange-400 to-orange-600 rounded-xl text-gray-50"

  const baseClass = "pl-5 mx-2 cursor-pointer py-1.5"

  return (
    <div className="w-53 max-h-full text-gray-800 bg-white">
      <div className="font-medium tracking-wider flex flex-col my-9 items-start justify-center">

        <button
          onClick={() => router.push("/Dashboard/Home")}
          className={`${baseClass} pr-24 ${pathname === "/Dashboard/Home" ? activeClass : ""
            }`}>
          <span className='text-[14px]'>🏠</span> Home
        </button>

        <button
          onClick={() => router.push("/Dashboard/Createorder")}
          className={`${baseClass} pr-9.5 ${pathname === "/Dashboard/Createorder" ? activeClass : ""
            }`}>
          <span className='text-[14px]'>📝</span> Create Order
        </button>

        <button
          onClick={() => router.push("/Dashboard/Orderlist")}
          className="focus:bg-linear-to-r focus:from-orange-400 focus:to-orange-600 pl-5 pr-17 rounded-xl mx-2 focus:text-gray-50 cursor-pointer py-1.5">
          <span className='text-[14px]'>📄</span> Order List
        </button>

      </div>
    </div>
  );
}

export default SideBar;
