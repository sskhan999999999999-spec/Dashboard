"use client"
import { redirect, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'


import UserStore from '../store/Userstore'

function page() {
   
  const {logout} = UserStore()
  const router = useRouter()

   function handleLogout (){
    logout()
    redirect("/Login")
   }
   
  
   
  return (
    <div>
      dashboard
    </div>

  )
}

export default page