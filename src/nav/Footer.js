import React from 'react'
import { Link } from "react-router-dom";
import { LuInstagram } from "react-icons/lu";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className='flex items-center justify-between bg-[#00b1bb] p-3 text-white'>
            <div className='w-[30%]'>
                <span className='ml-10 text-lg'>+1234567890</span>
            </div>
            <div className='flex items-center gap-3 '>
                <Link to='/' className='text-xl'><LuInstagram /></Link>
                <Link to='/' className='text-xl'><FaFacebookSquare /></Link>
                <Link to='/' className='text-xl'><FaTwitter /></Link>
                <Link to='/' className='text-xl'><FaSquareWhatsapp /></Link>
            </div>
            <div className='w-[30%]'>
                <a
                    href='https://www.github.com/shivamsheokand'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='mr-10 text-xl underline hover:no-underline'
                >
                    www.github.com/shivamsheokand
                </a>
            </div>
        </div>
    )
}

export default Footer