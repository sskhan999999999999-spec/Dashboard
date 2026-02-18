"use client"
import Toggle from '@/app/components/Toggle';
import { useOrderStore } from '@/app/store/store';
import React from 'react'

function Orderlist() {

  const orderList = useOrderStore((s) => s.orderList);
  const removeOrder = useOrderStore((s) => s.removeOrder);

  return (
    <div>
      <h1 className='text-center text-gray-800 p-5 font-bold text-5xl'>Order List !</h1>

      <div className='text-center text-2xl p-4'>
        {orderList.map((order, index) => (
          <div
            key={index}
          >
            <span className='pr-5'>{order}</span>
            <Toggle/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orderlist;