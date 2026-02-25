"use client";
import Toggle from "@/app/components/Toggle";
import { useOrderStore } from "@/app/store/store";
import { useRouter } from "next/navigation";
import React from "react";

function Orderlist() {
  const orderList = useOrderStore((s) => s.orderList);
  const removeOrder = useOrderStore((s) => s.removeOrder);
  const router = useRouter();

  return (
    <div>
      <div className="flex items-center justify-between pb-3 border-b-2 border-black/10">
        <h1 className=' text-blue-800 p-2 font-bold text-5xl'>
          Orders
        </h1>
        <button
        onClick={() => router.replace("/Dashboard/Createorder")}
         className="bg-linear-to-r from-blue-700 py-2 text-xl px-7 text-gray-100 rounded-md cursor-pointer to-blue-800 hover:bg-linear-to-r hover:from-blue-800 hover:to-blue-900 font-medium"> Add Order</button>
      </div>

      <div className='flex justify-center pt-7'>
        <div className='flex flex-col text-2xl py-5  h-full max-h-140 overflow-auto hide-scrollbar w-full sm:max-w-2xl lg:max-w-5xl rounded-xl'>
          {orderList.length == 0  && (
            <div className='text-center text-3xl '>
              <p className="text-gray-100 text-medium">No Order yet</p>
            </div>
          )}
          <div className='flex p-3 tracking-wide font-medium bg-gray-200 text-gray-900 text-xl items-center border-2 rounded-sm border-gray-300 justify-between'>
            <p>Order Data</p>
            <p>Mark as Done</p>
          </div>
          {orderList.map((order, index) => (
            <div
              key={index}
              className='flex p-3 text-xl items-center border-l-2 border-b-2 border-r-2 rounded-sm border-gray-300 justify-between'
            >
              <span className='flex-1 min-w-0 wrap-break-word'>
                {order.text}
              </span>
              <div className='flex gap-2 items-center'>
                <p className='text-sm ' id={index}>
                  {order.type}
                </p>
                <button
                  onClick={() => removeOrder(index)}
                  className='p-1.5 px-3 rounded-lg font-semibold cursor-pointer text-[15px] bg-blue-600 hover:bg-red-500 duration-300  text-white' 
                >
                  Done
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orderlist;