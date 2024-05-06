// import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
// import Logo from "/icons/logo.svg"

const Navbar = () => {
  return (
    <header className='mx-auto px-16 py-8'>
        <div className='flex flex-row items-center justify-between'>
            <div className='flex items-center gap-2'>
                <Image src='/imgs/typebank.webp' height={40} width={40} alt='Typebank'/>
                <span className='font-ibm-plex-serif font-extrabold text-lg'>Typebank</span>
            </div>
            <div className='font-inter font-bold text-[#333333] text-balance text-base mt-2 flex items-center gap-6'>
                <span className='hover:text-green-400 transition-all ease-in-out duration-300'>Home</span>
                <span className='hover:text-green-400 transition-all ease-in-out duration-300'>Features</span>
                <span className='hover:text-green-400 transition-all ease-in-out duration-300'>Services</span>
                <span className='hover:text-green-400 transition-all ease-in-out duration-300'>Testimonials</span>
                <span className='hover:text-green-400 transition-all ease-in-out duration-300'>Blog</span>
            </div>
            <button className='px-6 py-3 bg-success-600 text-white font-medium border-none rounded-lg'>Get Started</button>
        </div>
    </header>
  )
}

export default Navbar