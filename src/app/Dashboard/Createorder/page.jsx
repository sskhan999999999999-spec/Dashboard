"use client";
import React, { useState } from 'react'
import { useOrderStore } from '@/app/store/store';
import { useSearchParams } from 'next/navigation';
import { Flag, MoreHorizontal, MoreVertical } from 'lucide-react';

function Createorder() {

  const createOrder = useOrderStore((s) => s.createOrder);
  const orderList = useOrderStore((s) => s.orderList);
  const setCreateOrder = useOrderStore((s) => s.setCreateOrder);
  const addOrder = useOrderStore((s) => s.addOrder);
  const removeOrder = useOrderStore((s) => s.removeOrder);
  const [modal, setModal] = useState(false)
  const [radio, setRadio] = useState("For Admin")



  function handleAddOrder(e) {
    e.preventDefault();
    setModal(true)

  };



  function handleOrder() {

    setTimeout(() => {
      addOrder(createOrder, radio)
      setModal(false)
    }, 500);
  }

  return (
    <div className=' h-full  p-4 sm:pb-20'>
      <h1 className='md:text-center sm:text-end text-center sm:mr-14 text-gray-800 p-5 font-bold text-2xl sm:text-5xl'>Create Order !</h1>
      <form
        onSubmit={handleAddOrder}
        className='flex relative items-center sm:justify-end md:justify-center p-4'>
        <input
          type="text"
          value={createOrder}
          onChange={(e) => setCreateOrder(e.target.value)}
          className='w-full sm:max-w-md lg:max-w-2xl p-3 bg-gray-100 focus:bg-gray-200 rounded-lg focus:outline outline-gray-300 placeholder:font-medium'
          placeholder='Create Your Order !'

        />
        <span
          onClick={handleAddOrder}
          className='absolute cursor-pointer right-10 sm:right-10 md:right-30 lg:right-115  top-7 font-semibold'>Add</span>
      </form>
      <div className='flex justify-center'>
        <div className={orderList.length < 1 ? "hidden" :
          `flex flex-col text-2xl p-4 h-full max-h-100 overflow-y-auto bg-gray-300 w-full sm:max-w-2xl lg:max-w-5xl rounded-xl`
        }>


          {orderList.map((order, index) => (
            <div
              key={index}
              className="flex justify-between mt-3 gap-3 items-start"
            >
              <span className="flex-1 min-w-0 wrap-break-word">
                {order.text}
              </span>
              <div className='flex gap-2 items-center'>
                <p className='text-sm ' id={index} >{order.type}</p>
                <button
                  onClick={() => removeOrder(index)}
                  className='p-1.5 px-3 rounded-lg font-semibold cursor-pointer text-[15px] bg-linear-to-r from-orange-400 to-orange-600 text-white'
                >Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modal && (
        <div
          className="fixed inset-0 bg-black/40 z-40 duration-300 transition-all"
          onClick={() => setModal(false)}
        ></div>
      )}
      {modal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-96 p-6 rounded-xl text-xl font-semibold">
            <h2 className="mb-4">Select Order Type</h2>

            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="orderType"   // same name for group
                  value="For Admin"
                  checked={radio === "For Admin"}
                  onChange={(e) => setRadio(e.target.value)}
                />
                Order to Admin
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="orderType"
                  value="For User"
                  checked={radio === "For User"}
                  onChange={(e) => setRadio(e.target.value)}
                />
                Order to User
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="orderType"
                  value="For Both"
                  checked={radio === "For Both"}
                  onChange={(e) => setRadio(e.target.value)}
                />
                Order to Both Admin and User
              </label>
            </div>

            <div className="flex justify-end mt-6 gap-4">
              <button
                onClick={() => setModal(false)}
                className="px-4 py-2 rounded-lg border"
              >
                Cancel
              </button>

              <button
                onClick={handleOrder} // add order with current radio
                className="px-4 py-2 rounded-lg bg-orange-400 text-white hover:bg-orange-500"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}


    </div>
  )
}

export default Createorder;