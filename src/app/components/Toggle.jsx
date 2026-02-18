"use client"
import React, { useEffect, useState } from 'react'
import { Switch } from "@headlessui/react"
 
function Toggle({}) {

    const [enable, setEnable] = useState(false);

    useEffect(() => {
        const savedToggle = localStorage.getItem("toggle");
        if(savedToggle !== null){
            setEnable(JSON.parse(savedToggle))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("toggle", JSON.stringify(enable));
    }, [enable])

    return (
        <Switch
            checked={enable}
            onChange={setEnable}
            className={`${enable ? "bg-amber-500" : "bg-gray-400"
                } relative inline-flex h-6 w-10 items-center rounded-full transition-colors`}
        >
            
            <span
                className={`${enable ? "translate-x-5" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`} />
    </Switch >
  )
}

export default Toggle