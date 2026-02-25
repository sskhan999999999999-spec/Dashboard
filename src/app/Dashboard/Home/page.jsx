"use client";
import { createUserStore } from "@/app/store/CreateUserStore";
import { useOrderStore } from "@/app/store/store";
import UserStore from "@/app/store/Userstore";
import { Book, Dot, List, MoreVertical, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import PieChart from "../../components/Chart";
import DonutChart from "../../components/Chart";

function Page() {
  const [mounted, setMounted] = useState(false);

  // Get users and order list safely
  const users =
    createUserStore.getState()?.users?.filter((u) => u && u.email) || [];
  const orderList =
    useOrderStore.getState()?.orderList?.filter((o) => o && o.text) || [];

  // Get current user
  const user = UserStore.getState()?.user;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  let name = "";

  if (user?.email === "super@gmail.com") {
    name = "Shahsawar";
  } else {
    name = user?.name;
  }

  const roles = users
    .filter(
      (user) => user && typeof user === "object" && user.role !== undefined,
    )
    .map((user) => user.role || "No Role"); // Agar role empty string "" hai to 'No Role' dikhayega

  console.log(roles);
  console.log(user.email);

  return (
    <div>
      <div className='flex justify-between items-center gap-3'>
        <h1 className='text-blue-900 text-4xl font-semibold border-b-2 border-b-black/10 pt-1 py-8 w-full'>
          Welcome back, {name}{" "} !
        </h1>
        {user?.email === "super@gmail.com" && (
            <div className='flex gap-4'>
          <div
            className='relative overflow-hidden 
              bg-linear-to-br from-blue-900 via-blue-700 to-cyan-500 
              shadow-xl p-4 w-55 rounded-2xl h-25 
              flex items-center text-white'
          >
            {/* Background Circles */}
            <div className='absolute -right-12 -bottom-12 w-40 h-40 bg-white/20 rounded-full blur-2xl'></div>
            <div className='absolute right-10 bottom-5 w-24 h-24 bg-white/10 rounded-full blur-xl'></div>

            {/* Content */}
            <User
              size={40}
              color='blue'
              className='mr-3 z-10 relative bg-gray-300 rounded-md p-1'
            />
            <span className='text-lg z-10 relative'>
              Total Employees{" "}
              <span className='font-bold text-xl'>{users.length}</span>
            </span>
          </div>
          <div
            className='relative overflow-hidden 
            bg-linear-to-br from-red-600 via-red-500 to-orange-500 
            shadow-xl p-8 w-55 rounded-2xl h-25 
            items-center justify-center text-white flex'
          >
            {/* Glow circles */}
            <div className='absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl'></div>

            <Book size={40} className='mr-3 z-10' />
            <span className='text-lg z-10'>
              Total Orders{" "}
              <span className='font-bold text-xl'>{orderList.length}</span>
            </span>
          </div>
        </div>
        )}
        
      </div>
      <div className='flex gap-10 items-center'>
        {/* Admin view */}
        {user?.email === "super@gmail.com" && (
          <div className=' mt-10 text-blue-900'>
            <div className='flex flex-col text-2xl p-4 px-6 h-140 overflow-auto bg-white/90 w-3xl rounded-2xl hide-scrollbar shadow-xl'>
              {users.map((u, index) => (
                <div
                  key={index}
                  className='flex justify-between items-center mt-4 border-b-2 border-b-blue-900/10 bg-gray-200 p-2 rounded-xl hover:scale-105 duration-300 border border-gray-300 shadow-xl'
                >
                  <p className='text-2xl'>{u.name}</p>
                  <p className='text-lg'>{u.email}</p>
                  <MoreVertical />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Employee view */}
        {user?.email !== "super@gmail.com" && (
          <div className='flex justify-between mt-10'>
            <div className='flex flex-col text-2xl p-4 h-full min-h-140 overflow-y-auto bg-gray-300 w-full min-w-7xl px-10 rounded-xl'>
              {orderList
                // .filter((o) => o.assignedTo === user?.name)
                .map((order, idx) => (
                  <div
                    key={idx}
                    className='flex justify-between items-center mt-4 border-b-2 border-b-blue-900/10 bg-gray-200 p-2 rounded-xl hover:scale-105 duration-300 border border-gray-300 shadow-xl'
                  >
                    <p className='text-2xl '>{order.text}</p>
                    <p className='text-lg  '>
                      Assigned To:{" "}
                      <span className=' font-semibold'>{order.type}</span>
                    </p>
                    <MoreVertical />
                  </div>
                ))}
            </div>
          </div>
        )}

        {user?.email === "super@gmail.com" && (
        <div className='bg-white shadow-xl w-full  flex justify-center rounded-xl max-w-md   p-2  text-slate-800  min-h-140 h-full mt-10 '>
          <DonutChart users={users} />
        </div>
        )}
      </div>
    </div>
  );
}

export default Page;
