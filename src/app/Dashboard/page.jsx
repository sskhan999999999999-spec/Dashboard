"use client"
import { useRouter } from 'next/navigation'
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

  return (
    <div>
      dashboard
    </div>

  )
}

export default page