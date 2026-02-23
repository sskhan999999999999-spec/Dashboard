"use client"
import React, { useEffect, useState } from "react"
import { Switch } from "@headlessui/react"
import { useOrderStore } from "../store/store"

function Toggle({ orderId }) {

  const toggleOrder = useOrderStore.getState().toggleOrder

  return (
    <Switch
      checked={orderId?.completed}
      onChange={()=>toggleOrder(orderId.id)}
      className={`${orderId?.completed ? "bg-blue-700" : "bg-gray-400"}
      relative inline-flex h-6 w-10 items-center rounded-full transition-colors`}
    >
      <span
        className={`${orderId?.completed ? "translate-x-5" : "translate-x-1"}
        inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
      />
    </Switch>
  )
}

export default Toggle
