"use client"
import React, { useState } from 'react'

function page() {
    const [checkbox,setCheckbox] = useState(false)



  return (
    <div className=' min-h-screen grid place-items-center bg-gray-100 '>
      <div className='bg-white rounded-xl shadow-2xl  w-full max-w-md flex justify-center  p-4 pb-5 '>
        <div>
            <h1 className='sm:text-3xl  text-2xl font-bold  text-orange-400 text-center '>Dashboard</h1>
            <h3 className='text-lg font-semibold text-center'>Create Your Business Account</h3>
            <h4 className='text-center'>Sing up to post events and manage your profile</h4>
           <div className='mt-2'>
            <label htmlFor="" className='text-sm '>Buisness name <span className='text-orange-500'>*</span></label>
            <input type="text" className='w-full p-1 bg-transparent border border-black/30  rounded-lg text-md outline-orange-400  ' placeholder='Business name' />
            </div> 
           <div className='mt-2'>
            <label htmlFor="" className='text-sm '>Email <span className='text-orange-500'>*</span></label>
            <input type="text" className='w-full p-1 bg-transparent  border border-black/30 outline-orange-400 rounded-lg text-md ' placeholder='Business name' />
            </div> 
           <div className='mt-2'>
            <label htmlFor="" className='text-sm '>Password <span className='text-orange-500'>*</span></label>
            <input type="text" className='w-full p-1 bg-transparent  outline-orange-400 border border-black/30 rounded-lg text-md ' placeholder='Business name' />
            </div> 
              <div className='flex gap-1 mt-2'>
                <input type="checkbox" value={checkbox} onClick={()=> setCheckbox(!checkbox)} />
                <p className='text-sm'>I agree to the <span className='text-orange-600'>Terms & conditions</span> and <span className='text-orange-600'>Privacy Policy</span></p>
              </div>
              <div className={checkbox?'bg-linear-to-r from-orange-400 to-orange-600 text-center text-white p-1 rounded-lg mt-2 ': "bg-orange-300 text-center text-white p-1 rounded-lg mt-2"}> 
                <button >Sing up</button>
              </div>
              <div className='flex  items-center gap-1 mt-2'>
                <span className='w-full border h-0 border-black/30'></span>
                <span>OR</span>
                <span className='w-full border h-0 border-black/30'></span>
              </div>
              <div className='text-center'>
                <p className='text-sm'>Already have an account?<span className='text-orange-600'>Sing up</span></p>
              </div>
        </div>
        
      </div>
    </div>
  )
}

export default page
