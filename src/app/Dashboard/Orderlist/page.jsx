"use client";
import Toggle from "@/app/components/Toggle";
import { useOrderStore } from "@/app/store/store";
import React from "react";

function Orderlist() {
  const orderList = useOrderStore((s) => s.orderList);
  const removeOrder = useOrderStore((s) => s.removeOrder);

  return (
    <div>
      <h1 className='text-center text-blue-800 p-9 font-bold text-5xl'>
        Order List !
      </h1>

      <div className='flex justify-center'>
        <div className='flex flex-col text-2xl p-5 h-full max-h-140 overflow-auto hide-scrollbar bg-gray-300 w-full sm:max-w-2xl lg:max-w-5xl rounded-xl'>
          {orderList.length < 1 && (
            <div className='text-center text-3xl '>
              <p>No Order yet</p>
            </div>
          )}
          {orderList.map((order, index) => (
            <div key={index} className='flex p-1 items-center justify-between'>
              <span className='pr-5'>{order.text}</span>
              <Toggle orderId={order} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orderlist;
