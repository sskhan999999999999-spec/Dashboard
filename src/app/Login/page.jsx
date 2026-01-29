    "use client"

import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import toast, { useToaster } from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from 'next/navigation';



function  Login () {

        const [formdata, setformdata]= useState({
             email:"",
             passowrd:"",
             visible:false,
        })
        const Router= useRouter()
        const[acceptTerms, setAcceptTerms]=useState(false)
        const[hideicon, sethideicon]=useState(false )
          
          function handlechange(e) {
            setformdata({ ...formdata, [e.target.name]: e.target.value  });
          }
       
           function handleSubmit(e){
              e.preventDefault()
              if(!acceptTerms){
                  toast.error("please accept terms and condition ")
              }

              if(formdata.email && formdata.passowrd && acceptTerms ){
                    toast.success("Login succefully ")
                    localStorage.setItem("email",  formdata.email)
                    Router.push("/Home")

               }
              
           }
           
    return (
      <div className="min-h-screen grid place-items-center bg-[#FFFFFF]">
        <Toaster />
        <form
          onSubmit={handleSubmit}
          className="shadow-2xl py-10 px-17  bg-[#FFFFFF] rounded-2xl items-center justify-center"
        >
          <h1 className="text-4xl text-orange-500  text-center font-bold">
            Dashboard
          </h1>
          <h2 className="text-2xl font-medium   pt-1  text-center">
            Welcome Back!
          </h2>
          <h3 className="text-2xl   font-medium   text-center pb-3">
            Login in to your account
          </h3>
          <div className="flex flex-col gap-1   ">
            <label htmlFor="" className="text-[14px]">
              Email
            </label>
            <input
              type="email"
              className="p-2 outline-orange-400 border  border-gray-300  rounded-lg px-2 placeholder:text-[14px]"
              placeholder="@gmail.com"
              value={formdata.email}
              required
              onChange={handlechange}
              name="email"
            />
          </div>
          <div className="flex flex-col mt-2 gap-1  ">
            <label htmlFor="" className="text-[14px]">
              Password
            </label>
            <div className="relative ">
              <input
                className="py-2 outline-orange-400  border  border-gray-300 w-full  rounded-lg px-2 placeholder:text-[14px]"
                type= {!hideicon ? "password" : "text"}
                value={formdata.passowrd}
                placeholder="Enter your password"
                required
                onChange={handlechange}
                name="passowrd"
              />
              <button type='button' className=" absolute   top-3 right-2  "  onClick={()=> sethideicon(!hideicon)}  >
                {hideicon ? (
                  <p>
                    <FaEye size={18} />
                  </p>
                ) : (
                  <p>
                    <FaEyeSlash size={18} />
                  </p>
                )}
              </button>
            </div>
            <p className="text-end font-medium text-orange-500  text-sm   text-[14px]">
              Forgot Password
            </p>
          </div>
          <div className="   flex items-center space-x-1 mt-1.5  ">
            <input
              type="checkbox"
              value={acceptTerms}
              onClick={() => setAcceptTerms(!acceptTerms)}
              name=""
              id=""
            />
            <p className="text-gray-600 text-sm ">
              {" "}
              I agree <span>Terms & condition</span> and{" "}
              <span>Privacy policy</span>{" "}
            </p>
          </div>
          <button
            className={
              acceptTerms
                ? "bg-orange-500 hover:bg-orange-600 transition-colors duration-300  mt-1 font-medium w-full p-2 cursor-pointer text-white rounded-xl"
                : "bg-orange-200  mt-1   font-medium w-full p-2 cursor-pointer text-white rounded-xl "
            }
          >
            Login
          </button>

          <p className="font-medium text-center pt-2 ">OR</p>

          <div className="flex items-center justify-center gap-1">
            <p className="text-[15px] tracking-wider font-normal text-[#96979E]">
              Don't have an account?
            </p>
            <Link href="/Signup">
              <button className="text-orange-500 cursor-pointer font-medium  border-b-2 text-[15px]">
                Sign up
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
}

export default Login