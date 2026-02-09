"use client";
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import UserStore from '@/app/store/Userstore';
import SingupUser from '@/app/components/SingupUser';

export function PreventUserLogin(user, router) {
    if (user) {
        router.replace("/Dashboard/Home")
    }
}

function Login() {
    const router = useRouter()
    const user = UserStore((state) => state.user)
    const [showPassw, setShowPassw] = useState(false)
    const [formData, setFormData] = useState({
        businessName: "",
        email: "",
        password: ""
    })


    function handleChange(e) {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (formData?.email === "" || formData?.password === "") {
            toast.error("Please fill the field's")
            return
        }
        toast.success("Signing...")
        SingupUser(formData)
        setTimeout(() => {
            router.push("/Dashboard/Home")
        }, 2000);
    }

    return (
        <div className='min-h-screen grid place-items-center bg-[#FFFFFF]'>
            <Toaster />

            <div className='shadow-2xl p-7 md:py-11 md:px-21 flex flex-col bg-[#FFFFFF] rounded-xl gap-2 justify-center'>
                <h1 className='text-4xl tracking-wide text-orange-400 text-center font-bold'>
                    Dashboard
                </h1>
                <h3 className='text-2xl tracking-wide font-medium pb-3'>
                    Sign In to your account !
                </h3>

                <form
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[14px] font-medium'>Email</label>
                        <input
                            type="text"
                            value={formData?.email || ""}
                            required
                            onChange={handleChange}
                            name='email'
                            className='p-2 outline-1 outline-gray-300 rounded-lg px-2 placeholder:text-[14px] focus:bg-blue-50'
                            placeholder="@gmail.com"
                        />
                    </div>

                    <div className='flex flex-col relative gap-1 w-full'>
                        <label className='text-[14px] font-medium'>Password</label>
                        <input
                            type={showPassw ? "text" : "password"}
                            value={formData?.password || ""}
                            onChange={handleChange}                            name='password'
                            className='p-2 outline-1 outline-gray-300 rounded-lg px-2 placeholder:text-[14px] focus:bg-blue-50'
                            placeholder="Enter your password"
                        />
                        <span
                            className='absolute font-medium right-3 text-[10px] cursor-pointer top-9'
                            onClick={() => setShowPassw(!showPassw)}
                        >
                            {showPassw ? <EyeOff size={18} /> : <Eye size={18} />}
                        </span>
                    </div>

                    <div className='flex items-center gap-1 mt-2'> <span className='w-full border h-0 border-black/30'></span> <span>OR</span> <span className='w-full border h-0 border-black/30'></span> </div>

                    <button
                        type="submit"
                        className='bg-linear-to-r from-orange-400 to-orange-600 hover:bg-linear-to-r hover:from-orange-500 hover:to-orange-800 font-medium w-full p-2 cursor-pointer text-white rounded-lg'
                    >
                        Sign in
                    </button>
                </form>

                <p className="text-sm text-center text-gray-500">
                    Don’t have an account?
                    <Link href="/auth/Signup" onClick={() => toast.success("Welcome to Sign up...")} className="text-orange-500 ml-1 font-medium">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}


export default Login;