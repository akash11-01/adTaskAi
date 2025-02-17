import React from 'react'

export default function UpperMid() {
    return (
        <div className="w-[352px] h-[280px] border relative rounded-2xl border-gray-500 bg-gradient-to-br from-[#0B0B0B] to-[#1D2333] overflow-hidden">
            <img src="Ellipse5.png" alt="" className='absolute' />
            <div className="mx-auto w-[128px] h-[123px] mt-[31px] border rounded-[21px] flex items-center justify-center " >
                <div className="w-[112px] h-[107px] border border-transparent bg-[#78819936] rounded-2xl" style={{
                    borderImageSource:
                        "linear-gradient(0deg, #000000, #000000), linear-gradient(270deg, #7687B5 0%, #333B4F 100%)",
                    borderImageSlice: 1,
                }}>
                    <img src="Vector(8).png" alt="" className='w-[69px] h-[68px] mt-[9px] ml-[12px] relative animate-spin-slow' />
                    <img src="Ellipse8.png" alt="" className='absolute mt-[-70px]' />
                    <img src="Vector(9).png" alt="" className='ml-[50px] mt-[-29px] w-[40px] h-[40px] animate-spin-slow ' />
                </div>
            </div>

            <div className="mt-[-80px] ml-[226px]">
                <p className='uppercase font-[300] text-[10px] ml-[28px]'>Gen AI Powered</p>
                <p className='border bg-white  shadow-[0px_0px_4px_0px_#FFFFFF] ml-[3px]'></p>
            </div>

            <div className="ml-8 mt-[80px]">
                <p className='text-[14px] font-semibold mb-2'>Marketing made Easier</p>
                <p className='text-[12px] font-[300]'>Save time and simplify campaign management.<br /> Let automated workflows handle the heavy<br /> lifting, so you can focus on creativity.</p>
            </div>
        </div>
    )
}
