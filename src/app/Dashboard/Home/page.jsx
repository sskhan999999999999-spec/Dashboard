"use client"
import { createUserStore } from '@/app/store/CreateUserStore'
import { useOrderStore } from '@/app/store/store'
import UserStore from '@/app/store/Userstore'
import { MoreVertical } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function Page() {
  const [mounted, setMounted] = useState(false)

  // Get users and order list safely
  const users = createUserStore.getState()?.users?.filter(u => u && u.email) || []
  const orderList = useOrderStore.getState()?.orderList?.filter(o => o && o.text) || []

  // Get current user
  const user = UserStore.getState()?.user

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div>
      <h1 className='text-center mt-10 text-5xl font-bold'>Dashboard</h1>

      {/* Admin view */}
      {user?.email === "super@gmail.com" && (
        <div className='flex justify-center mt-10'>
          <div className='flex flex-col text-2xl p-4 h-full max-h-100 overflow-y-auto bg-gray-300 w-full sm:max-w-2xl lg:max-w-5xl rounded-xl'>
            {users.map((u, index) => (
              <div key={index} className='flex justify-between items-center mt-2'>
                <p className='text-2xl'>{u.name}</p>
                <p className='text-lg'>{u.email}</p>
                <MoreVertical />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Employee view */}
      {user?.email !== "super@gmail.com" && (
        <div className='flex justify-center mt-10'>
          <div className='flex flex-col text-2xl p-4 h-full max-h-100 overflow-y-auto bg-gray-300 w-full sm:max-w-2xl lg:max-w-5xl rounded-xl'>
            {orderList

              .filter(o => o.assignedTo === user?.name)
              .map((order, idx) => (
                <div key={idx} className='flex justify-between items-center mt-2'>
                  <p className='text-2xl max-w-sm'>{order.text}</p>
                  <p className='text-lg max-w-sm '>Assigned To: <span className='text-orange-500 font-semibold'>{order.type}</span></p>
                  <MoreVertical />
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Page
