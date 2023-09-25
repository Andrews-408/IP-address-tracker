import React from 'react';
import {FaGreaterThan} from "react-icons/fa"
import desktopBackground from "../asset/pattern-bg-desktop.png"
import mobileBackground from "../asset/pattern-bg-mobile.png"



const Header = () => {
    return (
        <div className='w-screen relative'>
            <img src={desktopBackground} alt='desktopBackground' className='z-10 hidden w-screen md:block'/>
            <img src={mobileBackground} alt='desktopBackground' className='z-10  w-screen md:hidden'/>
            <div className='w-full flex flex-col absolute top-0 items-center p-8 z-30 md:relative'>
                <h3 className='text-white text-2xl font-bold md:-mt-64 '>
                    IP Address Tracker
                </h3>
                <div className='flex items-center w-128 mt-10 '>
                    <input type='text' className='border-2 h-8  w-52 md:w-96 rounded-tl-md rounded-bl-md text-2 '/>
                    <span className='text-white bg-black h-8 px-2 rounded-tr-md rounded-br-md cursor-pointer flex items-center'>
                        <FaGreaterThan />
                    </span>
                </div>
            </div>
            <div className='bg-white z-30 rounded-md absolute max-h-max w-2/3 left-16 -bottom-28 container mx-auto flex flex-col items-center text-center justify-between py-4 px-10 md:flex-row md:w-2/3 md:h-36 md:left-52 md:bottom-2'>
                <div className='flex flex-col border-r-2 pr-4'>
                    <div className='text-sm text-slate-500 uppercase'>
                        IP Address
                    </div>
                    <div className='text-lg font-bold'>192.212.174.101</div>
                </div>
                <div className='flex flex-col border-r-2 pr-4'>
                    <div className='text-sm text-slate-500 uppercase'>
                        Location
                    </div>
                    <div className='text-lg font-bold'>Brooklyn, NY 1001</div>
                </div>
                <div className='flex flex-col border-r-2 pr-4'>
                    <div className='text-sm text-slate-500 uppercase'>
                       Timezone
                    </div>
                    <div className='text-lg font-bold'>UTC - 05: 00</div>
                </div>
                <div className='flex flex-col '>
                    <div className='text-sm text-slate-500 uppercase'>
                        isp
                    </div>
                    <div className='text-lg font-bold'>SpaceX Starlink</div>
                </div>
                
            </div>
        </div>
        )
}


export default Header;