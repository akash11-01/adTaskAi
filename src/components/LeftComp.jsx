import React from 'react'

export default function LeftComp() {
    return (
        <div className="w-[352px] relative h-[593px] border overflow-hidden border-gray-500 rounded-2xl bg-gradient-to-br from-[#0B0B0B] to-[#1D2333] ">
            <img src="Ellipse5.png" alt="" className='absolute' />
            <div className="flex flex-col relative items-center justify-center">
                <img src="Rectangle5.png" alt="" className='absolute h-[600px] w-[500px] mt-[50px]' />
                <img src="Vector(26).png" alt="" className='absolute ml-[-200px] vector-animation1' />
                <img src="Vector(26).png" alt="" className='absolute ml-[180px] mt-[-40px] vector-animation2' />
                <img src="Vector(26).png" alt="" className='absolute ml-[180px] mt-[250px] vector-animation3' />
                <img src="Ellipse6.png" alt="" className='w-[395.32px] h-[395.32px] mt-[45.34px] opacity-25 relative' />
                <div className="flex flex-col justify-center items-center absolute mt-[120px]">
                    <img src="Ellipse20.png" alt="" className="w-[12px] h-[12px]" />
                    <img src="Ellipse21.png" alt="" className="absolute animate-ellipse6 mt-[-100px]" />
                    <img src="radarCircle.png" alt="" className="ml-[-51px] mt-[-7px]" />
                </div>
            </div>


            <h1 className='text-[14px] font-semibold ml-8 mt-12'>Reach Target Audience</h1>
            <p className='text-[12px] font-[300px] ml-8'>Pinpoint the perfect audience with precision. Our<br /> AI-driven targeting ensures every message resonates where it matters most.</p>
        </div>
    )
}
