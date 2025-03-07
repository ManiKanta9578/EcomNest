"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { IoIosArrowDown } from 'react-icons/io';
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5';
import MenuItems from './MenuItems';
import { CiHeart } from 'react-icons/ci';
import { CgProfile } from 'react-icons/cg';

const languages = [
  { name: "English", flag: "/english.png" },
  { name: "Bangla", flag: "/bangla.png" },
  { name: "Hindi", flag: "/Indian-Flag.png" },
];

const Header = () => {
  const pathName = usePathname();
  const [activeLanguage, setActiveLanguage] = useState({ name: "Hindi", flag: "/Indian-Flag.png" })


  return (
    <div className='flex items-center sticky top-0 bg-white shadow  px-16 space-x-8 z-50'>
      <Image src="/theme-logo.png" alt="Theme Logo" width={120} height={120} />
      <div className="container flex items-center space-x-8">
        <div className='flex items-center space-x-8'>
          <Link href={"/"} className={`${pathName === "/" ? "text-[#f76411]" : "text-black"} font-semibold`}>Home</Link>
          <div className='relative group py-4'>
            <button className='text-black font-bold flex items-center gap-2 cursor-pointer'>
              Categories <IoIosArrowDown />
            </button>
            <div className='absolute w-[800px] bg-white rounded shadow-md hidden group-hover:block'>
              <MenuItems />
            </div>
          </div>
          <Link href={"/offers"} className={`${pathName === "/offers" ? "text-[#f76411]" : "text-black"} font-semibold`}>Offers</Link>
        </div>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <IoSearchOutline className='text-gray-400' />
          </div>
          <input type='text' className='pl-10 py-2 rounded-full bg-gray-100 outline-none w-80' placeholder='Search' />
        </div>
        {/* language */}
        <div className='relative group me-4 py-4 w-28'>
          <div className="flex items-center space-x-2 cursor-pointer">
            <img src={activeLanguage.flag} alt={`${activeLanguage.name} language`} className='w-6' />
            <span>{activeLanguage.name}</span>
            <IoIosArrowDown />
          </div>
          <div className="absolute hidden group-hover:block bg-white shadow rounded-lg p-2 w-[130px]">
            {languages.map((lang, index) =>
              <button
                key={index}
                className='flex items-center space-x-3 p-1 w-full cursor-pointer hover:bg-gray-100'
                onClick={() => setActiveLanguage(languages[index])}
              >
                <img src={lang.flag} alt={`${lang.name} language`} className='w-4' />
                <span>{lang.name}</span>
              </button>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between w-40 ml-8">
          <div>
            <Link href={'/whshlist'}> <CiHeart className='text-2xl' /> </Link>
          </div>
          <div className='relative group me-2 sm:me-4 py-2 sm:py-4'>
            <CgProfile className='text-xl sm:text-2xl cursor-pointer' />
            {/* Dropdown Menu */}
            <div className="absolute hidden group-hover:block sm:group-hover:block 
                bg-white shadow-lg rounded-2xl p-3 w-[180px] sm:w-[220px] 
                left-[-70px] sm:left-[-180px] top-10 sm:top-14 
                z-50 transition-all duration-200 ease-in-out">

              <div className='flex flex-col items-center space-y-2 sm:space-y-3'>
                <Link
                  href={'/register'}
                  className='text-[#f76411] bg-orange-100 
                  py-1 sm:py-2 px-3 sm:px-4 rounded-2xl 
                  cursor-pointer text-sm sm:text-base 
                  w-full text-center transition-colors duration-200 
                  hover:bg-orange-200'
                >
                  Register Your Account
                </Link>

                <span className='text-xs sm:text-sm text-gray-500'>OR</span>

                <Link
                  href={'/login'}
                  className='text-white bg-[#f76411] 
                    py-1 sm:py-2 px-3 sm:px-4 rounded-2xl 
                    cursor-pointer text-sm sm:text-base 
                    w-full text-center transition-colors duration-200 
                    hover:bg-[#e55b0f]'
                >
                  Login to your account
                </Link>
              </div>
            </div>
          </div>
          <div>
            <IoCartOutline className='text-2xl' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header