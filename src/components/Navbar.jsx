import React from 'react';

export default function Navbar() {
    return (
        <div className='w-full'>
            <div className="w-full md:w-[80%] md:ml-[10%] mt-[33px] border h-[63px] bg-[#5C60691A] text-white flex justify-between items-center rounded-2xl backdrop-blur-[5px]">
                <p className='text-xl ml-4 md:ml-8'>ad<span className='font-bold'>Task</span>.ai</p>
                <ul className='hidden md:flex items-center gap-8 text-[14px]'>
                    <li className='w-[90px] flex'>
                        <p>Products</p>
                        <img src="arrow_drop_down.png" alt="dropdown" />
                    </li>
                    <li className='w-[65px] flex'>
                        <p>Tools</p>
                        <img src="arrow_drop_down.png" alt="dropdown" />
                    </li>
                    <li className='w-[78px]'>
                        <p>Contact Us</p>
                    </li>
                </ul>

                <div className="flex gap-4 mr-4 md:mr-8">
                    <button className='h-[42px] w-[113px] border relative rounded-3xl hidden sm:block border-[#7687B5]'>
                        <img src="Ellipse2.png" alt="" className='absolute mt-[5px]' />
                        <p className='text-center'>Login</p>
                    </button>
                    <div id='res1' className="w-[42px] h-[42px] md:hidden rounded-[24px] bg-[#7687B54A] flex items-center justify-center border border-[#7687B5]">
                        <img src="Vector(27).png" alt="menu" />
                    </div>
                    <img id='res2' src="icon.png" alt="icon" className='w-[18px] h-[12px] md:hidden' />
                    <button id='res3' className='h-[42px] border relative rounded-3xl w-[161px] hidden md:block bg-[#7687B54A] border-[#7687B5]'>
                        <img src="Ellipse2.png" alt="" className='absolute ml-[8px]' />
                        <p className='text-center'>Schedule a Call</p>
                    </button>
                </div>
            </div>
        </div>
    );
}
