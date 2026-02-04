"use client"
import { redirect, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import UserStore from '../store/Userstore'

function page() {
   
  const logout = UserStore((state)=>state.logout)
  const router = useRouter()

   function handleLogout (){
    logout()
    router.push("/Login")
   }
   
  
   
  return (
    <div>
      dashboard
      <button onClick={handleLogout}>Logout</button>
    </div>

  )
}

export default page