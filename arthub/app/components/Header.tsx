"use client";

import { doc, getFirestore, setDoc } from "firebase/firestore";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { HiBell, HiChat, HiSearch } from "react-icons/hi";
import { HiPaintBrush } from "react-icons/hi2";
import app from "../Shared/firebaseConfig";

function Header() {
  const { data: session } = useSession();
  const db = getFirestore(app);
  const router = useRouter();

  useEffect(() => {
    saveUserInfo();
  }, [session]);

  const saveUserInfo = async () => {
    if (session?.user?.email) {
      try {
        await setDoc(doc(db, "user", session.user.email), {
          userName: session.user.name,
          email: session.user.email,
          userImage: session.user.image,
        });
      } catch (error) {
        console.warn("User email undefined");
      }
    }
  };

  return (
    <div className="flex justify-between items-center p-6">
      <Image
        src="/arthub_logo.png"
        alt="arthub_logo"
        width={50}
        height={50}
        className="hover:bg-gray-300 p-1 rounded-full cursor-pointer mx-1"
      />

      <div className="flex-grow flex items-center gap-2 mx-2">
        <button className="bg-black text-white p-2 rounded-full">
          For you
        </button>
        <button className="font-semibold p-2">Clubs</button>

        <div className="flex-grow bg-[#e9e9e9] p-3 flex items-center rounded-full mx-3">
          <HiSearch className="text-[25px] text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none ml-2 w-full"
          />
        </div>
      </div>

      <div className="flex gap-2 items-center mx-2">
        <HiPaintBrush className="text-[40px] text-gray-500" />
        <HiBell className="text-[40px] text-gray-500" />
        <HiChat className="text-[40px] text-gray-500" />
        {/* 
  mvp: current iteration truncates '@gmail.com' for privacy in the user profile page url  
  further iterations should prompt user to create a username that we will use for their profile page url
*/}
        {session?.user ? (
          <Image
            src={session?.user?.image}
            onClick={() =>
              router.push("/" + session.user?.email?.replace("@gmail.com", ""))
            }
            alt="user-profile-image"
            width={50}
            height={50}
            className="hover:bg-gray-300 p-1 rounded-full cursor-pointer mx-1"
          />
        ) : (
          <button className="font-semibold p-2" onClick={() => signIn()}>
            Sign in
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
