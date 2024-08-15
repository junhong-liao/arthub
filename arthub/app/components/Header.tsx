"use client"

import React from 'react'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"

import { HiSearch, HiBell, HiChat } from "react-icons/hi"
import { HiPaintBrush } from 'react-icons/hi2'
import { FaUser } from "react-icons/fa";


function Header() {
  const { data: session } = useSession()
  console.log(session)
  return (
    <div className='flex justify-between gap-3 md:gap-2 items-center p-6'>
        <Image 
            src='/arthub_logo.png' alt='arthub_logo' 
            width={50} height={50}
            className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'
        />

        <button className='bg-black text-white p-2 rounded-full'>For you</button>
        {/* <button className='bg-black text-white p-2 px-4 rounded-full'>Clubs</button> */}
        <button className='font-semibold p-2'>Clubs</button>

        <div className='bg-[#e9e9e9] p-3 flex gap-3 items-center rounded-full'>
            <HiSearch className='text-[25px] text-gray-500'/>
            <input 
                type='text' placeholder='Search'
                className='bg-transparent outline-none'
            />
        </div>
        <HiPaintBrush className='text-[40px] text-gray-500'/>
        <HiBell className='text-[40px] text-gray-500'/>
        <HiChat className='text-[40px] text-gray-500'/>
        <button className='font-semibold p-2'
        onClick={() => signIn()}>Sign in</button>
        {/* <FaUser className='text-[40px] text-gray-500'/> */}
        {/* <Image 
            src='/arthub_logo.png' alt='user_profile_picture' 
            width={50} height={50}
            className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'
        /> */}
    </div>
  )
}

export default Header