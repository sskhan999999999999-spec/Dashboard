"use client";
import React, { useState } from 'react'
import { useOrderStore } from '@/app/store/store';
import { useSearchParams } from 'next/navigation';
import { MoreHorizontal, MoreVertical } from 'lucide-react';

function Createorder() {

  const createOrder = useOrderStore((s) => s.createOrder);
  const orderList = useOrderStore((s) => s.orderList);
  const setCreateOrder = useOrderStore((s) => s.setCreateOrder);
  const addOrder = useOrderStore((s) => s.addOrder);
  const removeOrder = useOrderStore((s) => s.removeOrder);
  const clearInput = useOrderStore((s)=> s.clearInput)
  const [dropDown,setDropDown] = useState(null)

  function handleAddOrder(e) {
    e.preventDefault();
    addOrder()
  };

  return (
    <div className='  p-4'>
      <h1 className='text-center text-gray-800 p-5 font-bold text-2xl sm:text-5xl'>Create Order !</h1>
      <form
        onSubmit={handleAddOrder}
        className='flex relative items-cente justify-center p-4'>
        <input
          type="text"
          value={createOrder}
          onChange={(e) => setCreateOrder(e.target.value)}
          className='w-2xl p-3 bg-gray-100 focus:bg-gray-200 rounded-lg focus:outline outline-gray-300 placeholder:font-medium'
          placeholder='Create Your Order !'
          
        />
        <span
          onClick={handleAddOrder}
          className='absolute cursor-pointer right-115 top-7 font-semibold'>Add</span>
      </form>
      <div className='flex justify-center'>
      <div className={orderList.length < 1 ? "hidden" :
  `flex flex-col text-2xl p-4 bg-gray-300 w-full max-w-5xl rounded-xl`
      }>
  

        {orderList.map((order, index) => (
          <div
           key={index}
           className="flex justify-between mt-3 gap-3 items-start"
          >
          <span className="flex-1 min-w-0 wrap-break-word">
            {order}
          </span>

            <button
             onClick={() => removeOrder(index)}
             className='p-2 px-4 rounded-lg font-semibold cursor-pointer text-[19px] bg-linear-to-r from-orange-400 to-orange-600 text-white'
             >Delete</button>
          </div>
        ))}
      </div>
      </div>
      
    </div>
  )
}

export default Createorder;