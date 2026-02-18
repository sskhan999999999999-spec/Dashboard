"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import UserStore from "../store/Userstore";
import { Toaster, toast } from "react-hot-toast";

function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const user = UserStore.getState().user;

  const logout = UserStore.getState().logout;
  const [mounted,setMounted] = useState(false)

  useEffect(()=>{
    setMounted(true)
  },[])
  if(!mounted) return null;

  function handleLogout() {
    logout();
    toast.success("Logout Successfully !");
    router.replace("/auth/Login");
  }

  return (
    <div>
      <Toaster />

      {/* Navbar */}
      {user?.email === "super@gmail.com"?<nav className="bg-gray-100 p-4 w-full flex justify-between items-center fixed sm:sticky top-0 z-50 px-6">
        
        {/* Menu button (mobile) */}
        <button
          className="sm:hidden flex"
          onClick={() => setOpen(!open)}
        >
          <Menu />
        </button>

        {/* Title */}
        <div className="font-bold text-2xl sm:text-3xl text-orange-400">
          DASHBOARD
        </div>
        <div className="text-3xl font-medium ">
         <h1 >SUPER-ADMIN</h1> 
        </div>

        {/* Desktop Links */}
        <div className="hidden sm:flex gap-10 items-center">
      

          <button
            onClick={handleLogout}
            className="bg-orange-400 font-medium text-xl px-5 py-1.5 rounded-lg text-white hover:bg-orange-500"
          >
            Logout
          </button>
        </div>
      </nav>:<nav className="bg-gray-100 p-4 w-full flex justify-between items-center fixed sm:sticky top-0 z-50 px-6">
        
        {/* Menu button (mobile) */}
        <button
          className="sm:hidden flex"
          onClick={() => setOpen(!open)}
        >
          <Menu />
        </button>

        {/* Title */}
        <div className="font-bold text-2xl sm:text-3xl text-orange-400">
          DASHBOARD
        </div>

        

        {/* Desktop Links */}
        <div className="hidden sm:flex gap-10 items-center">
      

          <button
            onClick={handleLogout}
            className="bg-orange-400 font-medium text-xl px-5 py-1.5 rounded-lg text-white hover:bg-orange-500"
          >
            Logout
          </button>
        </div>
      </nav>}
      

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-15 left-0 h-full w-64 bg-gray-100 text-black p-6 z-50
        transform ${open ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-300`}
      >
        <ul className="flex flex-col gap-6 text-xl mt-10">
          <Link href="/Dashboard/Home" onClick={() => setOpen(false)}>
            🏠 Home
          </Link>

          <Link
            href="/Dashboard/Createorder"
            onClick={() => setOpen(false)}
          >
            📝 CreateOrder
          </Link>

          <Link
            href="/Dashboard/Orderlist"
            onClick={() => setOpen(false)}
          >
            📄 OrderList
          </Link>

          <button
            onClick={handleLogout}
            className="bg-orange-400 px-4 py-2 rounded-lg text-white mt-6"
          >
            Logout
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
