"use client"
import { redirect, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'

function page() {
  const [data, setData] = useState()
  const router = useRouter()

  useEffect(() => {
    const savedUser = localStorage.getItem("formdata")
    if (savedUser) setData(JSON.parse(savedUser))
  }, [])

  function handleLogout() {
    localStorage.clear()
    router.push("/")
  }

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