import React, { useState } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn';
// import { motion } from "motion/react"
const Navbar = ({theme,setTheme}) => {
    const [sidebarOpen,setsidebarOpen]=useState(false);
    function toggleSideBar(){
        setsidebarOpen(!sidebarOpen);
        console.log(sidebarOpen)
    }
  return (
      <div
      className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'>
        <img src={theme==='dark'? assets.logo_dark :assets.logo} alt="" className='w-32 sm:w-40'/>
        <img src={theme==='dark'? assets.menu_icon_dark:assets.menu_icon} alt="" onClick={toggleSideBar} className='w-8 sm:hidden'/>
        {/* menu item gets behind the sidebar therefore ye pehle le liya something shit */}
        <div className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen?'max-sm:w-0 overflow-hidden':'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>

            <img src={assets.close_icon} alt="" className='w-5 absolute right-4 top-4 sm:hidden' onClick={toggleSideBar}/>
            {/* cross-icon avaliable only for mobile */}

            <a onClick={toggleSideBar} href="#" className='sm:hover:border-b'>Home</a>
            <a onClick={toggleSideBar} href="#services" className='sm:hover:border-b'>Services</a>
            <a onClick={toggleSideBar} href="#our-work" className='sm:hover:border-b'>Our-Work</a>
            <a onClick={toggleSideBar} href="#contact-us" className='sm:hover:border-b'>Contact Us</a>
            {/* sm:hover:border-b means when we hover , there should be a border bottom */}
            <div className='flex items-center gap-2 sm:gap-4'>
                <ThemeToggleBtn theme={theme} setTheme={setTheme}/>
                <a href="#contact-us" className='text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all'>
                    Connect<img src={assets.arrow_icon} width={14}></img>
                </a>
            </div>
        </div>
      </div>
  )
}

export default Navbar
