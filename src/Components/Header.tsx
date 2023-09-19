import React from 'react';
import {FaGreaterThan} from "react-icons/fa"
import desktopBackground from "../asset/pattern-bg-desktop.png"



const Header = () => {
    return (
        <div className='w-screen relative'>
            <img src={desktopBackground} alt='desktopBackground' className='z-10 w-screen'/>
            <div className='w-full height flex flex-col items-center p-8 absolute top-16 z-30'>
                <h3 className='text-white text-2xl font-bold -mt-10'>
                    IP Address Tracker
                </h3>
                <div className='flex items-center w-128 mt-10 '>
                    <input type='text' className='border-2 h-8 w-96 rounded-tl-md rounded-bl-md text-2 '/>
                    <span className='text-white bg-black h-8 px-2 rounded-tr-md rounded-br-md cursor-pointer flex items-center'>
                        <FaGreaterThan />
                    </span>
                </div>
            </div>
            <div className='bg-white absolute -bottom-16 rounded-md mt-8 text-slate-500 left-64 z-30 w-2/3 h-36 container mx-auto flex justify-between py-4 px-10'>
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