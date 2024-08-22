"use client"
import app from '../Shared/firebaseConfig'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { useSession, signIn } from "next-auth/react"
import { HiSearch, HiBell, HiChat } from "react-icons/hi"
import { HiPaintBrush } from 'react-icons/hi2'

function Header() {
  const { data: session } = useSession();
  console.log('Session ID:', session);
  const db = getFirestore(app);
  useEffect(()=>{
    saveUserInfo();
  },[session])

  const saveUserInfo = async() => {
    if(session?.user?.email) {
      try {
        await setDoc(
          doc(db, "user", session.user.email),
          {
            userName: session.user.name,
            email: session.user.email,
            userImage: session.user.image
          }
        );
      } catch (error) {
        console.error("HEADER->ERROR: User info unsaved: ", error);
      }
    } else {
      console.warn("HEADER->ERROR: User email undefined");
    }
  }

  return (
    <div className='flex justify-between items-center p-6'>
      <Image 
        src='/arthub_logo.png' alt='arthub_logo' 
        width={50} height={50}
        className='hover:bg-gray-300 p-1 rounded-full cursor-pointer mx-1'
      />

      <div className='flex-grow flex items-center gap-2 mx-2'>
        <button className='bg-black text-white p-2 rounded-full'>For you</button>
        <button className='font-semibold p-2'>Clubs</button>

        <div className='flex-grow bg-[#e9e9e9] p-3 flex items-center rounded-full mx-3'>
          <HiSearch className='text-[25px] text-gray-500'/>
          <input 
            type='text' placeholder='Search'
            className='bg-transparent outline-none ml-2 w-full'
          />
        </div>
      </div>

      <div className='flex gap-2 items-center mx-2'>
        <HiPaintBrush className='text-[40px] text-gray-500'/>
        <HiBell className='text-[40px] text-gray-500'/>
        <HiChat className='text-[40px] text-gray-500'/>

        {
          session?.user? 
          <Image src={session?.user?.image} alt='user-profile-image' width={50} height={50}
          className='p-1 rounded-full cursor-pointer mx-1'/>: 
          <button className='font-semibold p-2' onClick={() => signIn()}>Sign in</button>
        }


      </div>
    </div>
  )
}

export default Header