import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-3 bg-[#404040] text-white'>
            <div className='items-center ml-10'>
                <img className='h-[25px] w-full resize'  src={logo} alt="LOGO" />
            </div>
            <div className='flex items-center'>
                <ul className='flex items-center gap-5 text-white md:mr-10'>
                    <li>Home</li>
                    <li>Info</li>
                    <li>Gallery</li>
                    <li>Contact</li>
                    <li>FAQ</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar