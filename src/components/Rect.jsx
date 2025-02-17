import React from 'react'

export default function Rect() {
    return (
        <div className="w-[17px] h-[24px]  mt-[11px] ml-[12px] border rounded " style={{
            background: "linear-gradient(178.97deg, #333B4F -44.2%, #7687B5 117.59%)",
        }}>
            <div className='w-[11px] h-[18px] mx-auto mt-0.5 relative' >
                <img src="Ellipse16.png" alt="" className='absolute top-0 left-0  rounded-full' />
                <img src="Ellipse16.png" alt="" className='absolute top-0 right-0  rounded-full' />
                <img src="Ellipse16.png" alt="" className='absolute bottom-0 left-0  rounded-full' />
                <img src="Ellipse16.png" alt="" className='absolute bottom-0 right-0  rounded-full' />
            </div>
        </div>
    )
}
