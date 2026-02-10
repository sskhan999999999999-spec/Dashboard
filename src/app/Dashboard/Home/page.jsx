"use client"
import UserStore from '@/app/store/Userstore'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'



function page() {
  const [data, setData] = useState()
  const {user} = UserStore()
  const router = useRouter()

  useEffect(() => {
    const savedUser = localStorage.getItem("formdata")
    if (savedUser) setData(JSON.parse(savedUser))
  }, [])

  function handleLogout() {
    localStorage.clear()
    router.push("/")
  }
  
   useEffect(() => {
    if(user){
    router.replace("/Dashboard/Home");

    const handlePopState = (e) => {
      router.replace("Dashboard/Home");
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
    }
  }, [router]);

  return (
    <div>
      <div className='bg-gray-50'>
        <h1 className='text-6xl text-center pt-70 font-medium pb-29 pr-32 text-gray-800'>

          <div>
            <p>This Is Home Page</p>
          </div>

        </h1>
      </div>
    </div>

  )
}

export default page