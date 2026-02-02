"use client";
import { Eye,EyeOff } from 'lucide-react';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import { useState } from 'react'



function Login() {
    const [showPassw, setShowPassw] = useState(false)

    
        const router = useRouter()
    return (
        <div className='min-h-screen grid place-items-center bg-gray-100 p-2'>

            <div className='shadow-2xl p-7 md:px-30 flex flex-col bg-[#FFFFFF] rounded-2xl gap-3 justify-center '>

                <h1 className='text-4xl tracking-wide text-orange-400 text-center font-bold'>Dashboard</h1>
                <h3 className='text-2xl tracking-wide font-medium pb-3'>Sign in to your account</h3>

                <div className='flex flex-col gap-1 w-full'>
                    <label
                        htmlFor=""
                        className='text-[14px] font-medium'>Email: </label>
                    <input
                        type="email"
                        className='p-2 outline-1 outline-gray-300 rounded-lg px-2 placeholder:text-[14px] focus:bg-blue-50'
                        placeholder='@gmail.com' />
                </div>

                <div className='flex flex-col relative gap-1 w-full'>
                    <label
                        htmlFor=""
                        className='text-[14px] font-medium'>Password:</label>
                    <input
                        className='p-2 outline-1 outline-gray-300 rounded-lg px-2 placeholder:text-[14px] focus:bg-blue-50'
                        type={ showPassw ? "hide" : "password" }
                        placeholder='Enter your password' />

                    <span
                    className='absolute font-medium right-3 text-[10px] cursor-pointer top-9'
                    onClick={ () => setShowPassw(!showPassw) }
                    >{showPassw ? <EyeOff className=''/> : <Eye /> }</span>

                    <button
                        className='text-end font-medium hover:text-orange-600 cursor-pointer text-orange-500 text-[14px]'
                    >Forgot Password</button>
                </div>

                <button
                    className='bg-linear-to-r from-orange-400 to-orange-600 font-medium w-full p-2 cursor-pointer text-white rounded-lg'
                >Sign in</button>

                 <div className='flex  items-center gap-1 mt-2'>
                <span className='w-full border h-0 border-black/30'></span>
                <span>OR</span>
                <span className='w-full border h-0 border-black/30'></span>
              </div>

                <div className='flex items-center justify-center gap-1'>
                    <p className='text-[14px] tracking-wide font-normal text-[#96979E]'>Don't have an account?</p>
                    
                    <button
                        className='text-orange-500 hover:text-orange-600 cursor-pointer font-medium text-[14px]'
                  onClick={()=>redirect("/Singup")}  > Sign up </button>
                </div>

            </div>
        </div>
    )
}

export default Login