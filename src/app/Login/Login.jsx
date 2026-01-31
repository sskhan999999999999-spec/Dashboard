"use client";
import { Eye, EyeOff } from 'lucide-react';
import { useEffect, useState } from 'react'
import { useAuthStore } from '../store/store';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';


function Login() {

    const router = useRouter();

    const [showPassw, setShowPassw] = useState(false)

    const {
        email,
        password,
        setEmail,
        setPassword,
        signIn,
    } = useAuthStore();

    const handleSubmit = () => {
        if (!email || !password) {
            toast.error("Please fill all the fields")
            return;
        }

        toast.success("Signing in...")
        router.push("/Dashboard")
        signIn
    }

    return (
        <div className='min-h-screen grid place-items-center bg-[#FFFFFF]'>
            <Toaster position="top-center" reverseOrder={false} />

            <div className='shadow-2xl p-7 md:px-30 flex flex-col bg-[#FFFFFF] rounded-2xl gap-2 justify-center'>

                <h1 className='text-4xl tracking-wide text-orange-400 text-center font-bold'>Dashboard</h1>
                <h3 className='text-2xl tracking-wide font-medium pb-3'>Sign In to your account</h3>

                <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                    <div className='flex flex-col gap-1 w-full'>
                        <label
                            htmlFor=""
                            className='text-[14px] font-medium'>Email: </label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='p-2 outline-1 outline-gray-300 rounded-lg px-2 placeholder:text-[14px] focus:bg-blue-50'
                            placeholder='@gmail.com' />
                    </div>

                    <div className='flex flex-col relative gap-1 w-full'>
                        <label
                            htmlFor=""
                            className='text-[14px] font-medium'>Password:</label>
                        <input
                            className='p-2 outline-1 outline-gray-300 rounded-lg px-2 placeholder:text-[14px] focus:bg-blue-50'
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={showPassw ? "text" : "password"}
                            placeholder='Enter your password' />

                        <span
                            className='absolute font-medium right-3 text-[10px] cursor-pointer top-9'
                            onClick={() => setShowPassw(!showPassw)}
                        >{showPassw ? <EyeOff size={19} /> : <Eye size={19} />}</span>

                        <button
                            className='text-end font-medium hover:text-orange-600 cursor-pointer text-orange-500 text-[13px]'
                        >Forgot Password</button>
                    </div>

                    <button
                        type='submit'
                        className='bg-linear-to-r from-orange-400 to-orange-600 hover:bg-linear-to-r hover:from-orange-500 hover:to-orange-800 font-medium w-full p-2 cursor-pointer text-white rounded-lg'
                    >Sign in</button>

                    <div className='flex  items-center gap-1 mt-2'>
                        <span className='w-full border h-0 border-black/30'></span>
                        <span>OR</span>
                        <span className='w-full border h-0 border-black/30'></span>
                    </div>

                    <div className='flex items-center justify-center gap-1'>
                        <p className='text-[14px] tracking-wide font-normal text-[#96979E]'>Don't have an account?</p>
                        <a
                            href='/Singup'
                            className='text-orange-500 hover:text-orange-600 cursor-pointer font-medium text-[14px]'
                        > Sign up</a>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default Login