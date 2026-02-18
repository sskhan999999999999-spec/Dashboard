"use client"
import { createUserStore } from '@/app/store/CreateUserStore'
import UserStore from '@/app/store/Userstore'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'



function page() {
  const users = createUserStore.getState().users
  const [data, setData] = useState()
  
  const {user} = UserStore()
  const router = useRouter()
  const [mounted,setMounted] = useState(false)


  useEffect(() => {
    setMounted(true)
  }, [])
 if(!mounted) return null

 
  
 
    // if(user){
    // router.replace("/Dashboard/Home");

    // const handlePopState = (e) => {
    //   router.replace("Dashboard/Home");
    // };

    // window.addEventListener("popstate", handlePopState);

    // return () => {
    //   window.removeEventListener("popstate", handlePopState);
    // };
    // }
 

  return (
    <div>
      <div className=''>
       

          <div className=' flex justify-center '>
            <div className='w-full max-w-lg bg-gray-200'>
            {
              users.map((name,index)=>(
                <div key={index}>
                  <p>{name?.name}</p>
                </div>
              ))
            }
            </div>
          </div>

       
      </div>
    </div>

  )
}

export default page