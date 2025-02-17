import React from 'react'
import Rect from './Rect'
import IconGrid from './IconGrids'
import AnimatedCard from './ShrinkAnimation'


export default function FirstHeroSection() {
    return (
        <div className="flex flex-col mt-20 w-full items-center text-white ">
            <div className='w-[710px] h-[495px] relative mt-[-60px]'>

            </div>
            <img src="Mask_group.png" alt="" className='absolute opacity-5  h-[750px] w-[1200px]  mt-[-200px] -z-10 ' />

            <img src="Rectangle4.png" alt="" className='absolute mt-[-100px]' />
            <img src="Rectangle5.png" alt="" className='absolute mt-[-150px]' />

            <div className="absolute flex gap-1 border w-[371px] border-[rgba(255,255,255,0.05)] p-3 h-[44px] bg-gradient-to-r from-[rgba(142,141,141,0.15)] to-[rgba(40,40,40,0.15)] rounded-2xl items-center overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-[18px] bg-white opacity-10 animate-move" />
                <img src="Vector.png" alt="" />
                <p className='text-[12px] font-medium uppercase'>Transform Your Digital Presence with AI Agents</p>
                <style>
                    {`
          @keyframes moveRight {
            0% { left: 0; }
            100% { left: 100%; }
          }
          .animate-move {
            animation: moveRight 2s linear infinite;
          }
        `}
                </style>
            </div>

            <div alt="" className='absolute h-[95.96px] w-[468px] mt-32'  >
                <div className="flex items-end group">
                    <span className='text-[110px] group-hover:animate-text-shadow-fade'>a</span>
                    <span className='text-[110px] group-hover:animate-text-shadow-fade'>d</span>
                    <span className='text-[110px] font-semibold group-hover:animate-text-shadow-fade'>T</span>
                    <span className='text-[110px] font-semibold group-hover:animate-text-shadow-fade ml-[-12px]'>a</span>
                    <span className='text-[110px] font-semibold group-hover:animate-text-shadow-fade ml-[-9px]'>s</span>
                    <span className='text-[110px] font-semibold group-hover:animate-text-shadow-fade ml-[-9px]'>k</span>
                    <span className='text-[110px] group-hover:animate-text-shadow-fade'>.</span>
                    <span className='text-[110px] group-hover:animate-text-shadow-fade'>a</span>
                    <span className='text-[110px] group-hover:animate-text-shadow-fade'>i</span>
                </div>

            </div>


            <p className=' absolute w-full text-center mt-72 text-[16px'>
                Stop struggling with marketing decisions. Our AI assistant analyzes your business, creates <br /> personalized strategies, and helps you execute them - all in real-time.
            </p>


            <div className="flex items-center justify-center w-full">
                <div className="relative flex items-center justify-center overflow-hidden rounded-[40px] border border-transparent p-[1px]">

                    {/* Moving Border Effect (Masked to Show Only on Borders) */}
                    <div className="absolute inset-0 w-full h-full animate-rotate rounded-[40px] bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)] 
            mask-image: radial-gradient(circle, transparent 55%, black 60%);"></div>

                    {/* Inner Button (Clear Background) */}
                    <button className="relative z-10 w-[185px] h-[45px] flex items-center justify-center overflow-hidden rounded-[40px] bg-[#2E3440]">

                        {/* Button Icons */}
                        <img src="p1.png" alt="" className="absolute top-0 left-0" />
                        <img src="p2.png" alt="" className="absolute top-0 right-0" />

                        {/* Button Text */}
                        <span className="text-white font-semibold z-20">Start Free Trial</span>
                    </button>
                </div>
            </div>




            <p className='text-[10px] mt-[500px] absolute  '>Try AdTask AI free for 30 days</p>



            <div className="relative w-full flex justify-center mt-14 px-4 md:px-0">
                <div className="absolute w-full max-w-[976px] border rounded-[35px] border-transparent h-[586px] mt-[-2px] overflow-hidden">
                    <div className="absolute inset-0 w-full h-full animate-rotate rounded-[40px] bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)] 
        mask-image: radial-gradient(circle, transparent 55%, black 60%);"></div>
                </div>
                <div className="bg-[#000000] w-full max-w-[970px] h-[582px] flex border border-purple-500 justify-center items-center rounded-[32px] relative">
                    <img src="AdTask.ai.png" alt="" className="max-w-full h-auto object-contain" />
                    <img src="youtube-icon.png" alt="" className="absolute w-[70px] h-[50px] md:w-[97px] md:h-[67px] mt-14" />
                </div>

                <img src="Ellipse1.png" alt="" className="absolute left-0 mt-[-50px] md:mt-[-100px] w-[80px] md:w-auto" />

                <div className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 flex items-center justify-center 
    w-[42px] md:w-[52.5px] h-[42px] md:h-[52.5px] bg-[#1E212A] rounded-full 
    shadow-[0px_0px_5px_2px_#C7D7FF]">
                    <img src="Vector_1.png" alt="Chat Icon" className="w-[18px] h-[18px] md:w-[24px] md:h-[23.25px]" />
                    <span className="absolute -top-[4px] -right-[4px] flex h-[14px] w-[14px] md:h-[16.5px] md:w-[16.5px] 
        items-center justify-center rounded-full bg-red-600 text-white 
        text-[8px] md:text-[10px] font-bold leading-none 
        shadow-[0px_0px_3px_1px_#C7D7FF]">
                        1
                    </span>
                </div>
            </div>

            <img src="Mask_group.png" alt="" className='absolute -z-10 h-[570px] opacity-5 mt-[1250px]' />

            <div className="overflow-hidden w-full mt-20 relative">
                <div className="flex items-center animate-infinite-scroll">

                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-[100px] items-center min-w-full">
                            <img src="Google.png" alt="" className="w-[90px] h-[90px] opacity-[0.34]" />
                            <img src="Salesforce.png" alt="" className="w-[90px] h-[90px] opacity-[0.34]" />
                            <img src="Workday.png" alt="" className="w-[68px] h-[68px] opacity-[0.34]" />
                            <img src="Amazon.png" alt="" className="w-[90px] h-[45.49px] opacity-[0.34]" />
                            <img src="Sony.png" alt="" className="w-[90px] h-[90px] opacity-[0.34]" />
                            <img src="Cocacola.png" alt="" className="w-[90px] h-[28.64px] opacity-[0.34]" />
                            <img src="intel.png" alt="" className="w-[90px] h-[60px] opacity-[0.34]" />
                            <img src="Workday.png" alt="" className="w-[68px] h-[68px] opacity-[0.34]" />
                        </div>
                    ))}
                </div>
            </div>

            <p className='w-full text-center text-[16px] mt-20'>Adtask AI works with :</p>

            {/* Grid section */}
            <IconGrid />

            {/* ------------------------- Features ------------------------- */}
            <div className="w-full flex justify-center mt-60" >
                <button className='rounded-[15px] border border-[#FFFFFF0D] text-[12px] w-[96px] h-[34px] uppercase ' style={{
                    background: "linear-gradient(90deg, rgba(142, 141, 141, 0.15) 0%, rgba(40, 40, 40, 0.15) 100%)"
                }}>Features</button>
            </div>

            <div className="w-full flex justify-center items-center">
                <div className="flex gap-1 items-center w-[1211px] h-[83px]">
                    <img src="Line2.png" alt="" className='w-[218px] h-1' style={{
                        border: "1px solid transparent",
                        borderImageSource: "linear-gradient(270deg, #0D111A 0%, #5C73AE 100%)"
                    }} />
                    <p className='w-[767px] h-[83px] text-center text-[36px] font-[500]'><span className=''>Feature packed to make</span><br />
                        <span className='bg-gradient-to-r from-[#7687B5] via-[#91B0FF] to-[#E2E8F8] 
       bg-clip-text text-transparent font-bold'>Digital marketing easier and affordable.</span></p>
                    <img src="Line1.png" alt="" className='w-[218px] h-1' style={{
                        border: "1px solid transparent",
                        borderImageSource: "linear-gradient(270deg, #0D111A 0%, #5C73AE 100%)"
                    }} />
                </div>
            </div>

            <img src="Ellipse9.png" alt="" className='absolute mt-[1800px] -z-30' />

            <div className="w-full flex justify-center mt-12">
                <p className="text-[16px]">
                    Experience Intelligent Features to optimize your marketing efforts.
                </p>
            </div>

            <div className="w-full flex justify-center">
                <div className="w-[1120px] h-[597px] mt-24 flex gap-8 justify-between" >
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

                    <div className="flex flex-col gap-[33px]">
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

                        <div className="w-[352px] h-[280px] border relative overflow-hidden border-gray-500 rounded-2xl " style={{ background: "linear-gradient(158.19deg, #0B0B0B 5.17%, #1D2333 98.61%)" }}>
                            <img src="Ellipse5.png" alt="" className='absolute' />
                            <div className="w-[120px] h-[115px] mt-[38px] ml-[63px] border  rounded-2xl flex bg-[#78819936]" style={{
                                borderImageSource:
                                    "linear-gradient(0deg, #000000, #000000), linear-gradient(270deg, #7687B5 0%, #333B4F 100%)",
                                borderImageSlice: 1,
                            }}>
                                <div className="flex gap-4 ml-2 items-end mb-2">
                                    <img
                                        src="Rectangle49.png"
                                        alt=""
                                        className="w-[14px] h-[91px] rounded-[14px] animate-heightChange1"
                                    />
                                    <img
                                        src="Rectangle50.png"
                                        alt=""
                                        className="w-[14px] h-[48px] rounded-[14px] animate-heightChange2"
                                    />
                                    <img
                                        src="Rectangle51.png"
                                        alt=""
                                        className="w-[14px] h-[67px] rounded-[14px] animate-heightChange3"
                                    />
                                    <img
                                        src="Rectangle52.png"
                                        alt=""
                                        className="w-[14px] h-[27px] rounded-[14px] animate-heightChange4"
                                    />
                                </div>


                            </div>
                            <div className="w-[102px] h-[102px] ml-[189px] mt-[-105px]">
                                <img src="Vector(11).png" alt="" className='w-[31.87px] h-[31.88px] mt-[10.62px] ml-[59.5px]' />
                                <img src="Vector(10).png" alt="" className='w-[84.01px] h-[84.04px] mt-[-33px] ml-[8.64px]' />
                            </div>

                            <div className="mt-4 ml-[30px]">
                                <p className='font-semibold text-[14px] mb-2'>Smart Marketing Insights</p>
                                <p className='font-[300] text-[12px]'>Unlock actionable data to guide every decision.<br /> Stay ahead of trends, refine your strategies, and make confident moves with powerful analytics.</p>
                            </div>
                        </div>
                    </div>
                    <AnimatedCard />
                </div>
            </div>

            <div className="w-full flex justify-center mt-60" >
                <button className='rounded-[15px]  font-[500] border-[#FFFFFF0D] text-[12px] w-[96px] h-[34px] uppercase ' style={{
                    background: "linear-gradient(90deg, rgba(142, 141, 141, 0.15) 0%, rgba(40, 40, 40, 0.15) 100%)"
                }}>Services</button>
            </div>



            {/* Innovative services Section */}

            <div className="w-full flex justify-center items-center">
                <div className="flex gap-1 items-center w-[937px] h-[83px]">
                    <img src="Line2.png" alt="" className='w-[218px] h-1' style={{
                        border: "1px solid transparent",
                        borderImageSource: "linear-gradient(270deg, #0D111A 0%, #5C73AE 100%)"
                    }} />
                    <p className='w-[767px] h-[83px] text-center text-[36px] font-[500px]'><span className=''>Innovative Services</span><br />
                        <span className='bg-gradient-to-r from-[#7687B5] via-[#91B0FF] to-[#E2E8F8] 
       bg-clip-text text-transparent font-bold'>for Growth.</span></p>
                    <img src="Line1.png" alt="" className='w-[218px] h-1' style={{
                        border: "1px solid transparent",
                        borderImageSource: "linear-gradient(270deg, #0D111A 0%, #5C73AE 100%)"
                    }} />
                </div>
            </div>

            {/* Remaining section */}
            <div className="w-[1153px] h-[660px] mt-20 relative">

                <img src="Line16.png" alt="" className='ml-[70px] mt-[25px] absolute' />
                <img src="Line16.png" alt="" className='ml-[70px] mt-[326.5px] absolute' />

                <img src="Rectangle53.png" alt="" className='ml-[185px] mt-[25px] absolute w-[32px] h-[3px]' />
                <img src="Rectangle4.png" alt="" className='absolute w-[350px] h-[300px] ml-[20px] mt-[13px]' />
                <img src="Rectangle5.png" alt="" className='absolute w-[350px] h-[300px] ml-[20px] mt-[10px]' />

                <img src="Line16.png" alt="" className='ml-[440px] mt-[25px] absolute' />
                <img src="Rectangle53.png" alt="" className='ml-[925px] mt-[25px] absolute w-[32px] h-[3px]' />
                <img src="Rectangle4.png" alt="" className='absolute w-[350px] h-[300px] ml-[395px] mt-[13px]' />
                <img src="Rectangle5.png" alt="" className='absolute w-[350px] h-[300px] ml-[395px] opacity-60 mt-[10px]' />

                <img src="Rectangle53.png" alt="" className='ml-[185px] mt-[326.5px] absolute w-[32px] h-[3px]' />
                <img src="Rectangle4.png" alt="" className='absolute w-[350px] h-[300px] ml-[760px] mt-[310px]' />
                <img src="Rectangle5.png" alt="" className='absolute w-[350px] h-[300px] ml-[760px] opacity-60 mt-[297px]' />

                <img src="Line16.png" alt="" className='ml-[440px] mt-[326.5px] absolute' />
                <img src="Rectangle53.png" alt="" className='ml-[925px] mt-[326.5px] absolute w-[32px] h-[3px]' />
                <img src="Rectangle4.png" alt="" className='absolute w-[350px] h-[300px] ml-[760px] mt-[13px]' />
                <img src="Rectangle5.png" alt="" className='absolute w-[350px] h-[300px] ml-[760px] opacity-60 mt-[10px]' />

                <img src="Line16.png" alt="" className='ml-[815px] mt-[25px] absolute' />
                <img src="Rectangle53.png" alt="" className='ml-[560px] mt-[25px] absolute w-[32px] h-[3px]' />
                <img src="Rectangle4.png" alt="" className='absolute w-[350px] h-[300px] ml-[20px] mt-[310px]' />
                <img src="Rectangle5.png" alt="" className='absolute w-[350px] h-[300px] ml-[20px] opacity-60 mt-[297px]' />

                <img src="Line16.png" alt="" className='ml-[815px] mt-[326.5px] absolute' />
                <img src="Rectangle53.png" alt="" className='ml-[560px] mt-[326.5px] absolute w-[32px] h-[3px]' />
                <img src="Rectangle4.png" alt="" className='absolute w-[350px] h-[300px] ml-[395px] mt-[310px]' />
                <img src="Rectangle5.png" alt="" className='absolute w-[350px] h-[300px] ml-[395px] opacity-60 mt-[297px]' />

                <img src="Line7.png" alt="" className='ml-[20px] mt-[43px] absolute' />
                <img src="Line7.png" alt="" className='ml-[20px] mt-[348px] absolute' />
                <img src="Line16.png" alt="" className='ml-[70px] mt-[630px] absolute' />
                <img src="Line16.png" alt="" className='ml-[440px] mt-[630px] absolute' />
                <img src="Line16.png" alt="" className='ml-[815px] mt-[630px] absolute' />

                <img src="Line7.png" alt="" className='ml-[1133px] mt-[43px] absolute' />
                <img src="Line7.png" alt="" className='ml-[1133px] mt-[348px] absolute' />

                <img src="Line7.png" alt="" className='ml-[391px] mt-[43px] absolute' />
                <img src="Line7.png" alt="" className='ml-[391px] mt-[348px] absolute' />

                <img src="Line7.png" alt="" className='ml-[761px] mt-[43px] absolute' />
                <img src="Line7.png" alt="" className='ml-[761px] mt-[348px] absolute' />
                <div className="">
                    <Rect />
                </div>
                <div className="ml-[371px] mt-[-35px] ">
                    <Rect />
                </div>
                <div className="ml-[741px] mt-[-35px] ">
                    <Rect />
                </div>
                <div className="ml-[1113px] mt-[-35px] ">
                    <Rect />
                </div>



                <div className="ml-[1px] mt-[270px] absolute">
                    <Rect />
                </div>
                <div className="ml-[1113px] mt-[270px] absolute">
                    <Rect />
                </div>
                <div className="ml-[0px] mt-[571px] absolute">
                    <Rect />
                </div>


                <div className="ml-[371px] mt-[572px] absolute">
                    <Rect />
                </div>
                <div className="ml-[741px] mt-[572px] absolute">
                    <Rect />
                </div>
                <div className="ml-[1113px] mt-[572px] absolute">
                    <Rect />
                </div>


                <div className="w-[1080px] h-[597px]  mt-[-9px] relative ml-[36px] flex flex-col gap-3 ">
                    <div className="flex gap-8">
                        <div className="w-[338px] h-[292px]  ">
                            <img src="Vector(13).png" alt="" className='mt-[69px] ml-[138px]' />
                            <p className='text-[20px] font-[500] text-center mt-9'>Smart Ad Targeting</p>
                            <p className='font-[300] text-[14px] text-center mt-5'>AI-powered audience segmentation ensures your ads reach the right people, delivering higher ROI and maximum conversion rates.</p>
                        </div>
                        <div className="w-[338px] h-[292px]  ">
                            <img src="Vector(14).png" alt="" className='mt-[69px] ml-[138px]' />
                            <p className='text-[20px] font-[500] text-center mt-9'>Performance Analytics</p>
                            <p className='font-[300] text-[14px] text-center mt-5'>Access real-time insights and track key<br /> metrics across all campaigns in one unified<br /> dashboard to quickly refine your strategies.</p>
                        </div>
                        <div className="w-[338px] h-[292px]  ">
                            <img src="MaskGroup.png" alt="" className='mt-[69px] ml-[138px]' />
                            <p className='text-[20px] font-[500] text-center mt-9'>SEO Automation</p>
                            <p className='font-[300] text-[14px] text-center mt-5'>Automate keyword research and content optimization suggestions to improve your search engine rankings with less effort.</p>
                        </div>
                    </div>
                    <div className="flex gap-8">
                        <div className="w-[338px] h-[292px]  ">
                            <img src="Vector(17).png" alt="" className='mt-[69px] ml-[138px]' />
                            <p className='text-[20px] font-[500] text-center mt-9'>Social Media Marketing</p>
                            <p className='font-[300] text-[14px] text-center mt-5'>AI agents craft personalized content, schedule posts, monitor engagement, and refine strategies in real time for maximum impact across all major social platforms.</p>
                        </div>
                        <div className="w-[338px] h-[292px]  ">
                            <img src="Vector(16).png" alt="" className='mt-[69px] ml-[138px]' />
                            <p className='text-[20px] font-[500] text-center mt-9'>Conversion Optimization</p>
                            <p className='font-[300] text-[14px] text-center mt-5'>AI-driven A/B testing and automated tweaks<br /> to landing pages and funnels help you<br /> consistently improve conversion rates.</p>
                        </div>
                        <div className="w-[338px] h-[292px]  ">
                            <img src="Vector(15).png" alt="" className='mt-[69px] ml-[138px]' />
                            <p className='text-[20px] font-[500] text-center mt-9'>Campaign Automation</p>
                            <p className='font-[300] text-[14px] text-center mt-5'>Centralize and streamline your ad management. Our intelligent engine automatically adjusts bids, budgets, and targeting to maximize results.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center mt-28 relative" >
                <img src="Ellipse2.png" alt="" className='absolute mt-[16px]' />
                <button className='rounded-[40px]  font-[400] border border-[#7687B5] text-[16px] w-[185px] h-[48px] uppercase '>Contact Us</button>
            </div>




            {/* Testimonials */}
            <div className="w-full flex justify-center mt-60" >
                <button className='rounded-[15px] border border-[#FFFFFF0D] text-[12px] font-[500] w-[112px] h-[34px] uppercase ' style={{
                    background: "linear-gradient(90deg, rgba(142, 141, 141, 0.15) 0%, rgba(40, 40, 40, 0.15) 100%)"
                }}>TESTINOMIALS</button>
            </div>

            <div className="w-full flex justify-center items-center">
                <div className="flex gap-1 items-center w-[933px] h-[83px]">
                    <img src="Line2.png" alt="" className='w-[218px] h-1' style={{
                        border: "1px solid transparent",
                        borderImageSource: "linear-gradient(270deg, #0D111A 0%, #5C73AE 100%)"
                    }} />
                    <p className='w-[767px] h-[83px] text-center text-[36px] font-[500]'><span className='text-[36px]'>Trusted by</span><br />
                        <span className='bg-gradient-to-r from-[#7687B5] via-[#91B0FF] to-[#E2E8F8] 
       bg-clip-text text-transparent font-[500] text-[36px]'>satisfied clients</span></p>

                    <img src="Line1.png" alt="" className='w-[218px] h-1' style={{
                        border: "1px solid transparent",
                        borderImageSource: "linear-gradient(270deg, #0D111A 0%, #5C73AE 100%)"
                    }} />
                </div>
            </div>

            <div className="w-full flex justify-center mt-12">
                <p className="text-[14px] font-[400]">
                    Discover how we’ve driven growth and innovation.
                </p>
            </div>

            <div className="w-[1120px] h-[424px]  mx-auto mt-24 flex flex-col gap-8">
                <div className="flex gap-[32px]">
                    <div className="w-[352px] h-[196px] border border-gray-500 rounded-2xl " style={{
                        background: "linear-gradient(167.98deg, #0B0B0B 4.68%, #131313 91.22%)",

                    }} >
                        <p className='font-[400] text-[14px] mt-[28px] ml-[20px]'>“We used to struggle with consistent<br /> branding across platforms. adTask’s unified dashboard ensures our message stays on point every single time.”</p>
                        <p className='font-[500] text-[14px] ml-[20px] mt-[30px]'>-Brand Director at a Tech Startup</p>
                    </div>

                    <div className="w-[352px] h-[196px] border rounded-2xl border-gray-500" style={{
                        background: "linear-gradient(167.98deg, #0B0B0B 4.68%, #131313 91.22%)",
                    }} >
                        <p className='font-[400] text-[14px] mt-[28px] ml-[20px]'>“adTask turned our complicated campaigns into a breeze. The built-in AI agents helped<br /> us reach exactly the customers we wanted<br />—without guesswork!”</p>
                        <p className='font-[500] text-[14px] ml-[20px] mt-[30px]'>– Head of Growth at Tech Startup</p>
                    </div>

                    <div className="w-[352px] h-[196px] border rounded-2xl border-gray-500" style={{
                        background: "linear-gradient(167.98deg, #0B0B0B 4.68%, #131313 91.22%)",
                    }} >
                        <p className='font-[400] text-[14px] mt-[28px] ml-[20px]'>“We’ve tried other platforms before, but<br /> none delivered the depth of insights adTask offers. Our conversion rates are up by 35% since we signed on!”</p>
                        <p className='font-[500] text-[14px] ml-[20px] mt-[30px]'>– Ecommerce Manager at Home Décor Brand</p>
                    </div>
                </div>

                <div className="flex gap-[32px]">
                    <div className="w-[352px] h-[196px] border rounded-2xl border-gray-500 " style={{
                        background: "linear-gradient(167.98deg, #0B0B0B 4.68%, #131313 91.22%)",
                    }} >
                        <p className='font-[400] text-[14px] mt-[28px] ml-[20px]'>“What impressed me most was the real<br />-time optimization. adTask’s intelligent<br /> agents just keep refining our campaigns—<br />our ad spend has never worked harder!”</p>
                        <p className='font-[500] text-[14px] ml-[20px] mt-[30px]'>– Digital Strategist at SaaS Company</p>
                    </div>

                    <div className="w-[352px] h-[196px] border rounded-2xl border-gray-500" style={{
                        background: "linear-gradient(167.98deg, #0B0B0B 4.68%, #131313 91.22%)",
                    }} >
                        <p className='font-[400] text-[14px] mt-[28px] ml-[20px]'>“adTask made everything from campaign setup to performance tracking simple. Our team can now focus on creating great<br /> content rather than crunching numbers.”</p>
                        <p className='font-[500] text-[14px] ml-[20px] mt-[30px]'>– Social Media Lead at Non-Profit<br />Organization</p>
                    </div>

                    <div className="w-[352px] h-[196px] border rounded-2xl border-gray-500" style={{
                        background: "linear-gradient(167.98deg, #0B0B0B 4.68%, #131313 91.22%)",
                    }} >
                        <p className='font-[400] text-[14px] mt-[28px] ml-[20px]'>“We’ve seen a 50% boost in engagement across our social channels since switching<br /> to adTask. Its AI-driven insights are game-changing!”</p>
                        <p className='font-[500] text-[14px] ml-[20px] mt-[30px]'>– Social Media Manager at a Fitness Brand</p>
                    </div>
                </div>
            </div>

            <img src="Ellipse13.png" alt="" className='absolute mt-[4150px] -z-10' />


            {/* Contacts Section */}
            <div className="w-full flex justify-center mt-60" >
                <button className='rounded-[15px]  font-[500] border-[#FFFFFF0D] text-[12px] w-[96px] h-[34px] uppercase ' style={{
                    background: "linear-gradient(90deg, rgba(142, 141, 141, 0.15) 0%, rgba(40, 40, 40, 0.15) 100%)",
                }}>Contact Us</button>
            </div>

            <div className="w-[1031px] h-[314px] mt-12 mx-auto flex gap-[27px]">
                <div className="w-[520px] h-[285px] mt-3 relative">
                    <img src="Ellipse9.png" alt="" className='absolute ml-[-25px] h-[300px] w-[450px] opacity-60 -z-10' />
                    <p className='font-[500] text-[36px]'>Ask whatever you have<br /> <span className='bg-gradient-to-r from-[#7687B5] via-[#91B0FF] to-[#E2E8F8] 
                    bg-clip-text text-transparent font-[500] text-[36px]'>in your mind now</span></p>

                    <p className='font-[400] text-[14px] mt-5'>Whether you have questions or are ready to discuss your<br /> business, we’re here to help. Reach out today.</p>

                    <div className="flex gap-2 mt-7 items-center">
                        <img src="email.png" alt="" className='w-[24px] h-[24px]' />
                        <p className='font-[400] text-[12px] underline'>contact@adtask.ai</p>
                    </div>
                    <div className="flex gap-2 mt-2 items-center">
                        <img src="phone.png" alt="" className='w-[24px] h-[24px]' />
                        <p className='font-[400] text-[12px] '>(969) 819-8061</p>
                    </div>
                    <div className="flex gap-4 mt-2 items-center">
                        <img src="address.png" alt="" className='w-[14px] h-[20px]' />
                        <p className='font-[400] text-[12px] '>San Francisco Bay Area</p>
                    </div>

                </div>
                <div className="w-[484px] h-[314px] ">
                    <form action="">
                        <p className=' text-[12px] font-[400]'>Name</p>
                        <input type="text" className='h-[36px] w-full border bg-transparent border-[#333B4F] rounded-[4px] ' />

                        <p className='mt-10 text-[12px] font-[400]'>Email</p>
                        <input type="email" className='h-[36px] w-full border rounded-[4px] border-[#333B4F] bg-transparent' />

                        <p className='mt-10 text-[12px] font-[400]'>Message</p>
                        <input type="text" className='h-[107px] w-full  rounded-[4px] border bg-transparent border-[#333B4F]' />
                    </form>
                </div>
            </div>

            <button className='w-[161px] h-[36px] ml-[560px] mt-8 rounded-[40px] bg-[#7687B54A] border border-[#7687B5]'>Submit</button>


            {/* BottomAdTask AI */}
            <div className="w-[468px] h-[96.96px] mt-44 flex gap-1 items-end group">
                <div className="flex items-end group">
                    <span className='text-[110px] group-hover:animate-text-shadow-fade'>a</span>
                    <span className='text-[110px] group-hover:animate-text-shadow-fade'>d</span>
                    <span className='text-[110px] font-semibold group-hover:animate-text-shadow-fade'>T</span>
                    <span className='text-[110px] font-semibold group-hover:animate-text-shadow-fade ml-[-12px]'>a</span>
                    <span className='text-[110px] font-semibold group-hover:animate-text-shadow-fade ml-[-9px]'>s</span>
                    <span className='text-[110px] font-semibold group-hover:animate-text-shadow-fade ml-[-9px]'>k</span>
                    <span className='text-[110px] group-hover:animate-text-shadow-fade'>.</span>
                    <span className='text-[110px] group-hover:animate-text-shadow-fade'>a</span>
                    <span className='text-[110px] group-hover:animate-text-shadow-fade'>i</span>
                </div>
            </div>



            <div className="mt-36 flex flex-col items-center relative">
                <img src="Rectangle5.png" alt="" className='absolute mt-[-150px] opacity-80 -z-10 w-700px] h-[600px]' />
                <img src="Rectangle4.png" alt="" className='absolute mt-[-120px] opacity-50 -z-10' />
                <p className='font-[500] text-[48px] text-center'>Are you ready to boost<br /><span className='bg-gradient-to-r from-[#7687B5] via-[#91B0FF] to-[#E2E8F8] 
                bg-clip-text text-transparent font-[500] text-[48px]'>your Digital Presence?</span></p>

                <div className="flex flex-col gap-[20px] mt-20">
                    <div className="flex items-center justify-center w-full">
                        <div className="relative flex items-center justify-center overflow-hidden rounded-[40px] border border-transparent p-[1px]">

                            {/* Moving Border Effect (Masked to Show Only on Borders) */}
                            <div className="absolute inset-0 w-full h-full animate-rotate rounded-[40px] bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)] 
            mask-image: radial-gradient(circle, transparent 55%, black 60%);"></div>

                            {/* Inner Button (Clear Background) */}
                            <button className="relative z-10 w-[185px] h-[45px] flex items-center justify-center overflow-hidden rounded-[40px] bg-[#2E3440]">

                                {/* Button Icons */}
                                <img src="p1.png" alt="" className="absolute top-0 left-0" />
                                <img src="p2.png" alt="" className="absolute top-0 right-0" />

                                {/* Button Text */}
                                <span className="text-white font-semibold z-20">Start Free Trial</span>
                            </button>
                        </div>
                    </div>

                    <button className='w-[185px] h-[48px] border border-[#7687B5] rounded-[40px] '>Schedule a Call</button>
                </div>
            </div>



            {/* Footer Section */}
            <div className="h-[361px] w-[1440px] flex items-center justify-evenly ">
                <div className="flex flex-col gap-4">
                    <img src="adTasklast.png" alt="" />
                    <div className="flex gap-4 mt-5">
                        <img src="email.png" alt="" />
                        <p className='font-[400] text-[12px] underline text-[#788199]   '>contact@adtask.ai</p>
                    </div>
                    <div className="flex gap-4 ">
                        <img src="address.png" alt="" />
                        <p className='font-[400] text-[12px] text-[#788199]'>San Francisco Bay Area</p>
                    </div>
                </div>

                <ul className='flex flex-col gap-[20px] items-center'>
                    <li className='font-semibold text-[20px]'>Utilities</li>
                    <li className='font-[400] text-[16px]'>Home</li>
                    <li className='font-[400] text-[16px]'>Products</li>
                    <li className='font-[400] text-[16px]'>Tools</li>
                    <li className='font-[400] text-[16px]'>Contact Us</li>
                </ul>
                <ul className='flex flex-col gap-[20px] items-center'>
                    <li className='font-semibold text-[20px]'>Social</li>
                    <li className='font-[400] text-[16px]'>X</li>
                    <li className='font-[400] text-[16px]'>Linkdin</li>
                    <li className='font-[400] text-[16px]'>Instagram</li>
                    <li className='font-[400] text-[16px]'>Facebook</li>
                </ul>

            </div>
            <p className='font-[400] text-[14px] text-[#788199]'>All rights reserved © 2025 adTask</p>

        </div>
    )
}
