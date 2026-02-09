"use client";
import React from 'react'
import { useOrderStore } from '@/app/store/store';
import { useSearchParams } from 'next/navigation';

function Createorder() {

  const createOrder = useOrderStore((s) => s.creatOrder);
  const orderList = useOrderStore((s) => s.orderList);
  const setCreateOrder = useOrderStore((s) => s.setCreateOrder);
  const addOrder = useOrderStore((s) => s.addOrder);
  const removeOrder = useOrderStore((s) => s.removeOrder);

  function handleAddOrder(e) {
    e.preventDefault();
    addOrder();
  };

  return (
    <div>
      <h1 className='text-center text-gray-800 p-5 font-bold text-5xl'>Create Order !</h1>
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
          className='absolute cursor-pointer right-93 top-7'>➕</span>
      </form>

      <div className='text-center text-2xl p-4'>
        {orderList.map((order, index) => (
          <div
            key={index}
          >
            <span>{order}</span>
            <button
             onClick={() => removeOrder(index)}
             className='p-1 pl-3 cursor-pointer text-[19px]'
             >❌</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Createorder;