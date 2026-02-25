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
      relative inline-flex cursor-pointer h-5 w-8 items-center rounded-full transition-colors`}
    >
      <span
        className={`${orderId?.completed ? "translate-x-4" : "translate-x-1"}
        inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform`}
      />
    </Switch>
  )
}

export default Toggle
