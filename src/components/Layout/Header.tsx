"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoIosArrowDown, IoMdArrowBack, IoMdClose } from 'react-icons/io';
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5';
import { CiHeart } from 'react-icons/ci';
import { CgProfile } from 'react-icons/cg';
import MenuItems from './MenuItems';
import Profile from './Profile';
import { FiMenu, FiSearch } from 'react-icons/fi';
import MobileMenuItems from './MobileMenuItems';

const languages = [
  { name: "English", flag: "/english.png" },
  { name: "Bangla", flag: "/bangla.png" },
  { name: "Hindi", flag: "/Indian-Flag.png" },
];

const Header = () => {
  const pathName = usePathname();
  const [activeLanguage, setActiveLanguage] = useState(languages[2]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className='sticky top-0 bg-white shadow px-4 md:px-8 lg:px-16 z-50'>
      <div className='flex items-center justify-between space-x-8 py-2'>
        <div className='flex items-center space-x-4'>
          <button className='lg:hidden text-xl'  onClick={() => setMenuOpen(!menuOpen)}> <FiMenu /> </button>
          <Image src="/theme-logo.png" alt="Theme Logo" width={100} height={100} className='w-24' />
        </div>
        <button className='lg:hidden text-xl space-x-5 flex items-center' onClick={() => setSearchOpen(!searchOpen)}> <FiSearch /> </button>

        {/* Sidebar Navigation */}
        <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
          <button onClick={() => setMenuOpen(false)} className='absolute top-4 right-4 text-2xl'>
            <IoMdClose />
          </button>
          <MobileMenuItems user={{name:"Manikanta", avatarUrl:"/avatar.png" }}/>
        </div>

        {/* Search bar */}
        <div className={`fixed top-0 left-0 h-full w-full bg-white shadow-md transform ${searchOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
          <nav className='flex flex-col space-y-4'>
            <div className='relative'>
              <IoMdArrowBack onClick={() => setSearchOpen(false)} className='absolute left-3 top-4.5 text-xl' />
              <input type='text' className='pl-12 pr-3 py-4 bg-gray-100 outline-none w-full' placeholder='Search for Products. Brands and More' />
            </div>
          </nav>
        </div>

        <nav className={`absolute lg:static top-16 left-0 w-full bg-white lg:flex lg:items-center lg:space-x-8 transition-all duration-300 ease-in-out hidden`}>
          <Link href="/" className={`${pathName === "/" ? "text-[#f76411]" : "text-black"} font-semibold`}>Home</Link>
          <div className='relative group'>
            <button className='text-black font-bold flex items-center gap-2 cursor-pointer'>
              Categories <IoIosArrowDown />
            </button>
            <div className='absolute w-[250px] md:w-[400px] lg:w-[800px] bg-white rounded shadow-md hidden group-hover:block'>
              <MenuItems />
            </div>
          </div>
          <Link href="/offers" className={`${pathName === "/offers" ? "text-[#f76411]" : "text-black"} font-semibold`}>Offers</Link>
          <div className='relative w-[400px] max-w-xs md:max-w-md lg:max-w-lg hidden lg:block'>
            <IoSearchOutline className='absolute left-3 top-3 text-gray-400' />
            <input type='text' className='pl-10 pr-3 py-2 rounded-full bg-gray-100 outline-none w-full' placeholder='Search' />
          </div>
          <div className='relative group cursor-pointer'>
            <div className="flex items-center space-x-2">
              <img src={activeLanguage.flag} alt={`${activeLanguage.name} language`} className='w-6' />
              <span>{activeLanguage.name}</span>
              <IoIosArrowDown />
            </div>
            <div className="absolute hidden group-hover:block bg-white shadow rounded-lg p-2 w-[130px]">
              {languages.map((lang, index) => (
                <button key={index} className='flex items-center space-x-3 p-1 w-full cursor-pointer hover:bg-gray-100' onClick={() => setActiveLanguage(lang)}>
                  <img src={lang.flag} alt={lang.name} className='w-4' />
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
          <div className='flex space-x-10 mr-4'>
            <Link href={'/wishlist'}> <CiHeart className='text-xl sm:text-2xl' /> </Link>
            <div className='relative group cursor-pointer'>
              <CgProfile className='text-xl sm:text-2xl' />
              <div className='absolute hidden group-hover:block bg-white w-[180px] sm:w-[220px] shadow-lg rounded-lg p-3 left-[-70px] sm:left-[-180px] z-50'>
                {!isLoggedIn ? (
                  <Profile user={{ avatarUrl: "", name: "Manikanta", phone: "123456789" }} />
                ) : (
                  <div className='flex flex-col items-center space-y-2 sm:space-y-3'>
                    <Link href={'/register'} className='text-[#f76411] bg-orange-100 py-2 px-4 rounded-lg cursor-pointer text-sm w-full text-center transition hover:bg-orange-200'>Register</Link>
                    <span className='text-xs sm:text-sm text-gray-500'>OR</span>
                    <Link href={'/login'} className='text-white bg-[#f76411] py-2 px-4 rounded-lg cursor-pointer text-sm w-full text-center transition hover:bg-[#e55b0f]'>Login</Link>
                  </div>
                )}
              </div>
            </div>
            <IoCartOutline className='text-xl sm:text-2xl cursor-pointer' />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;