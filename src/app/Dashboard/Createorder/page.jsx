"use client";
import React, { useRef, useState } from "react";
import { useOrderStore } from "@/app/store/store";
import locked from "../../../../public/locked.png";
import Image from "next/image";
import { Plus } from "lucide-react";

function Createorder() {
  const inputRef = useRef(null)
  const createOrder = useOrderStore((s) => s.createOrder);
  const orderList = useOrderStore((s) => s.orderList);
  const setCreateOrder = useOrderStore((s) => s.setCreateOrder);
  const addOrder = useOrderStore((s) => s.addOrder);
  const removeOrder = useOrderStore((s) => s.removeOrder);
  const [modal, setModal] = useState(false);
  const [radio, setRadio] = useState("For Admin");
  

  function handleAddOrder(e) {
    e.preventDefault();
    setModal(true);
  }

  function handleOrder() {
    setTimeout(() => {
      addOrder(createOrder, radio);
      setModal(false);
    }, 500);
  }
  function handleFocus(){
    inputRef.current.focus()
  }

  return (
    <div className=' h-full  p-4 '>
      <div className="flex justify-between items-center gap-2">
      <div className="w-full">
      <h1 className='text-4xl font-bold text-blue-800  tracking-tight mb-2'>
        Create Order
      </h1>

      <p className=' text-gray-500  '>
        Manage and organize your orders professionally
      </p>
      </div>
      <div className="bg-linear-to-r from-blue-600 via-indigo-500 to-cyan-500 p-2 text-white w-50 h-10 rounded-xl flex items-center gap-1 font-semibold" onClick={handleFocus}>
        <Plus/>
        <p>Add Orders</p>
      </div>
      </div>
      <form
        onSubmit={handleAddOrder}
        className='flex relative items-center sm:justify-end md:justify-center p-4'
      >
        <input
          type='text'
          ref={inputRef}
          value={createOrder}
          onChange={(e) => setCreateOrder(e.target.value)}
          className='w-full sm:max-w-md lg:max-w-2xl p-3  border border-gray-400 rounded-lg  focus:outline-blue-300  placeholder:font-medium'
          placeholder='Create Your Order !'
        />
        <span
          onClick={handleAddOrder}
          className='absolute cursor-pointer right-10 sm:right-10 md:right-30 lg:right-77  top-7 font-semibold'
        >
          Add
        </span>
      </form>
      <div className='flex justify-center'>
        <div
          className={
            orderList.length < 1
              ? "hidden"
              : `flex flex-col text-2xl p-4 h-120 overflow-auto hide-scrollbar bg-gray-300 w-full sm:max-w-2xl lg:max-w-5xl rounded-xl px-8`
          }
        >
          {orderList.map((order, index) => (
            <div
              key={index}
              className='flex justify-between mt-3 gap-3 items-start bg-gray-200 rounded-xl p-2 px-4 hover:scale-105 duration-300 border border-gray-300 shadow-xl '
            >
              <span className='flex-1 min-w-0 wrap-break-word'>
                {order.text}
              </span>
              <div className='flex gap-2 items-center'>
                <Image src={locked} alt='lock' width={20} height={20} />
                <p className='text-sm flex gap-1 items-center ' id={index}>
                  {order.type}
                </p>
                <button
                  onClick={() => removeOrder(index)}
                  className='p-1.5 px-3 rounded-lg font-semibold cursor-pointer text-[15px] bg-red-500 hover:bg-red-600 duration-300  text-white'
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modal && (
        <div
          className='fixed inset-0 bg-black/40 z-40 duration-300 transition-all'
          onClick={() => setModal(false)}
        ></div>
      )}
      {modal && (
        <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
          <div className='bg-white w-96 p-6 rounded-xl text-xl font-semibold'>
            <h2 className='mb-4'>Select Order Type</h2>

            <div className='flex flex-col gap-2'>
              <label className='flex items-center gap-2'>
                <input
                  type='radio'
                  name='orderType' // same name for group
                  value='For Admin'
                  checked={radio === "For Admin"}
                  onChange={(e) => setRadio(e.target.value)}
                />
                Order to Admin
              </label>

              <label className='flex items-center gap-2'>
                <input
                  type='radio'
                  name='orderType'
                  value='For User'
                  checked={radio === "For User"}
                  onChange={(e) => setRadio(e.target.value)}
                />
                Order to User
              </label>

              <label className='flex items-center gap-2'>
                <input
                  type='radio'
                  name='orderType'
                  value='For Both'
                  checked={radio === "For Both"}
                  onChange={(e) => setRadio(e.target.value)}
                />
                Order to Both Admin and User
              </label>
            </div>

            <div className='flex justify-end mt-6 gap-4'>
              <button
                onClick={() => setModal(false)}
                className='px-4 py-2 rounded-lg border'
              >
                Cancel
              </button>

              <button
                onClick={handleOrder} // add order with current radio
                className='px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 duration-300'
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Createorder;
