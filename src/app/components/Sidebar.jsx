import Link from 'next/link';
import React from 'react'

function Sidebar () {
    return (
        <div>
            <div className='shadow h-dvh w-65'>
                <h1 className='text-3xl shadow tracking-wide text-black shado text-center p-3 font-bold'>
                    Dashboard
                </h1>
                <div className='flex flex-col text-[18px] mt-5 gap-3 font-medium'>
                    <Link
                        href="/Createorder"
                        className='hover:bg-gray-200 p-2 px-4'
                    >
                        Create Order
                    </Link>
                    <Link
                        href="/Orderlist"
                        className='hover:bg-gray-200 p-2 px-4'
                    >
                        Order List
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;