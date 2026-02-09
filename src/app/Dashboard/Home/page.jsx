"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'

function page() {
  const [data, setData] = useState()
  const router = useRouter()

  useEffect(() => {
    const savedUser = localStorage.getItem("formdata")
    if (savedUser) setData(JSON.parse(savedUser))
  }, [])

  return (
    <div>
      <div className='bg-gray-50'>
        <h1 className='text-6xl text-center pt-70 font-medium pb-29 pr-32 text-gray-800'>

          <div>
            <Typewriter
              words={["Welcome to Dashboard !"]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={140}
              deleteSpeed={0}
              delaySpeed={3000}
            />
          </div>

        </h1>
      </div>
    </div>

  )
}

export default page