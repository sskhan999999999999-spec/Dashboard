"use client"
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Toaster ,toast} from 'react-hot-toast';
import SingupUser from '@/app/components/SignupUser';
import UserStore from '@/app/store/Userstore';


function page() {

  const router = useRouter()
  const user = UserStore()
  const [checkbox,setCheckbox] = useState(false)
  const [hidePass,setHidePass] = useState(false)
  const [form,setForm] = useState({
    businessName:"",
    email:"",
    password:""
  })



  function handleChange(e){
    const {name,value} = e.target
    setForm({...form,[name]:value})
  }

  function handleSubmit (e){
    e.preventDefault()

    if (!form.businessName || !form.email || !form.password){
      toast.error("Please fill all inputs field")
      return
    }else if(!checkbox ){
      toast.error("Please accept Terms and Conditions")
      return
    }else if(form.password.length < 8 ){
      toast.error("Password at least 8 characters long.")
      return
    }
    else{
        toast.success("Sing up Successfully!")
          SingupUser(form)
        setTimeout(() => {
          router.replace("/Dashboard/Home")
        }, 2000);
    }
  }

  useEffect(()=>{
    if(user){
      router.replace("/Dashboard/Home")
    }else{
      router.replace("/auth/Login")
    }
  },[])
 
  


  return (
    <div className='min-h-screen grid place-items-center bg-gray-100 p-2'>
      <div className='bg-[#ffffff] rounded-xl shadow-2xl w-full max-w-md flex justify-center p-4 pb-5'>
        <Toaster/>

        <form onSubmit={handleSubmit}>
          <h1 className='sm:text-3xl text-2xl font-bold text-orange-400 text-center'>Dashboard</h1>
          <h3 className='text-lg font-semibold text-center'>Create Your Business Account</h3>
          <h4 className='text-center'>Sing up to post events and manage your profile</h4>

          {/* Business */}
          <div className='mt-2'>
            <label className='text-sm'>Buisness name *</label>
            <input
              required
              value={form?.businessName || ""}
              name='businessName'
              onChange={handleChange}
              type="text"
              className='w-full p-1 px-2 bg-transparent border border-black/30 rounded-lg outline-orange-400'
              placeholder='Business name'
            />
          </div>

          {/* Email */}
          <div className='mt-2'>
            <label className='text-sm'>Email *</label>
            <input
              value={form?.email || ""}
              onChange={handleChange}
              name='email'
              required
              type="email"
              className='w-full p-1 px-2 bg-transparent border border-black/30 outline-orange-400 rounded-lg'
              placeholder='Email'
            />
          </div>

          
          <div className='mt-2 relative'>
            <label className='text-sm'>Password *</label>
            <input
              value={form?.password || ""}
              onChange={handleChange}
              name='password'
              required
              type={hidePass ? "text" : "password"}
              className='w-full p-1 px-2 bg-transparent border border-black/30 rounded-lg outline-orange-400'
              placeholder='Password'
            />
            <span className='absolute top-7 right-4' onClick={() => setHidePass(!hidePass)}>
              {hidePass ? <EyeOff /> : <Eye />}
            </span>
          </div>

          {/* Checkbox */}
          <div className='flex gap-1 mt-2'>
            <input type="checkbox" className='outline-none' checked={checkbox} onChange={() => setCheckbox(!checkbox)} />
            <p className='text-sm'>
              I agree to the
              <span className='text-orange-600 hover:border-b hover:border-b-orange-600'>
                <Link href="/Terms" target='_blank'> Terms & conditions</Link>
              </span>
              and
              <span className='text-orange-600 hover:border-b hover:border-b-orange-600'>
                <Link href="/Privacy" target='_blank'> Privacy Policy</Link>
              </span>
            </p>
          </div>

          {/* Button */}
          <div className={checkbox
            ? 'bg-linear-to-r from-orange-400 to-orange-600 text-center text-white p-1 py-1.5 rounded-lg mt-2'
            : "bg-orange-300 text-center text-white p-1 py-1.5 rounded-lg mt-2"}>

            <button type='submit'>Sing up</button>
          </div>

          {/* OR */}
          <div className='flex items-center gap-1 mt-2'>
            <span className='w-full border h-0 border-black/30'></span>
            <span>OR</span>
            <span className='w-full border h-0 border-black/30'></span>
          </div>
          <div className='text-center'>
            <p className='text-sm'>Already have an account? <span className='text-orange-600 cursor-pointer font-semibold'><Link href="/auth/Login">Log in</Link> </span></p>
          </div>
       

          {/* <div className='text-center'>
            <p className='text-sm'>
              Already have an account?
              <span className='text-orange-600 cursor-pointer font-semibold'>
                <Link href="/Login"> Log in</Link>
              </span>
            </p>
          </div> */}

        </form>
      </div>
    </div>
  )
}

export default page
