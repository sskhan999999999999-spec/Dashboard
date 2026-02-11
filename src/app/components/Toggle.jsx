import React, { useState } from 'react'
import { Switch } from '@headlessui/react';
function Toggle({}) {
    const [enable, setEnable] = useState(false);
    return (
        <Switch
            checked={enable}
            onClick={setEnable}
            className={`${enable ? "bg-amber-500" : "bg-gray-300"
                } relative inline-flex h-6 w-10 items-center rounded-full transition-colors`}
        >
            <span
                className={`${enable ? "translate-x-5" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`} />
    </Switch >
  )
}

export default Toggle