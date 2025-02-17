import React from 'react'
import { useState } from 'react'

export default function Navbar() {

    return (
        <div className='w-full'>
            <div className="w-[80%] ml-[10%] mt-[33px] border h-[63px] bg-[#5C60691A] text-white flex justify-between items-center rounded-2xl backdrop-blur-[5px]">
                <p className='text-xl ml-8'>ad<span className='font-bold'>Task</span>.ai</p>
                <ul className='flex items-center gap-8 text-[14px]'>
                    <li className='w-[90px] flex'>
                        <p>Products</p>
                        <img src="arrow_drop_down.png" alt="" />
                    </li>
                    <li className='w-[65px] flex'>
                        <p>Tools</p>
                        <img src="arrow_drop_down.png" alt="" />
                    </li>
                    <li className='w-[78px] '>
                        <p className=''>Contact Us</p>
                    </li>
                </ul>

                <div className="flex gap-4 mr-8">
                    <button className='h-[42px] w-[113px] border rounded-3xl border-[#7687B5]'>Login</button>
                    <button className='h-[42px] border rounded-3xl w-[161px] border-[#7687B5]'>Schedule a Call</button>
                </div>
            </div>

        </div>
    )
}

