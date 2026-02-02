"use client"
import { redirect, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
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
      this is main page 
      <button onClick={handleLogout}>Logout</button>
    </div>

  )
}

export default page
