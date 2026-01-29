import React from 'react'

function page() {
    return (
        <div className='min-h-screen grid place-items-center bg-[#FFFFFF]'>

            <div className='shadow-2xl p-7 md:px-30 flex flex-col bg-[#FFFFFF] rounded-2xl items-center gap-3 justify-center'>

                <h1 className='text-4xl text-orange-500 font-bold'>Dashboard</h1>
                <h3 className='text-2xl font-medium pb-3'>Sign in to your account</h3>

                <div className='flex flex-col gap-1 w-full'>
                    <label
                        htmlFor=""
                        className='text-[14px]'>Email: </label>
                    <input
                        type="email"
                        className='p-2 outline-1 outline-gray-300 rounded-lg px-2 placeholder:text-[14px]'
                        placeholder='@gmail.com' />
                </div>

                <div className='flex flex-col gap-1 w-full'>
                    <label
                        htmlFor=""
                        className='text-[14px]'>Password:</label>
                    <input
                        className='p-2 outline-1 outline-gray-300 rounded-lg px-2 placeholder:text-[14px]'
                        type="password"
                        placeholder='Enter your password' />

                    <button
                        className='text-end font-medium text-orange-500 text-[14px]'
                    >Forgot Password</button>
                </div>

                <button
                    className='bg-linear-to-r from-orange-400 to-orange-600 hover:bg-linear-to-r hover:from-orange-500 hover:to-orange-800 font-medium w-full p-2 cursor-pointer text-white rounded-lg'
                >Sign in</button>

                <div>
                    <p className='font-medium'>OR</p>
                </div>

                <div className='flex items-center justify-center gap-1'>
                    <p className='text-[15px] tracking-wider font-normal text-[#96979E]'>Don't have an account?</p>
                    <button
                        className='text-orange-500 cursor-pointer font-medium text-[15px]'
                    > Sign up</button>
                </div>

            </div>
        </div>
    )
}

export default page