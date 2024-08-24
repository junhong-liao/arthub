"use client"
import React, { useEffect } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import app from "../Shared/firebaseConfig"

function Profile({params}:any) {
  const db = getFirestore(app);

  // logs userId
  useEffect(()=>{
    const userId = params.userId.replace("%40", "@");
    console.log("Loaded user profile for: "+userId)
    if (params) {
      getUserInfo(userId+"@gmail.com");
    }
  }, [params])

  // retrieve user data from firestore

  const getUserInfo=async({email}:any)=>{
    const docRef = doc(db, "user", email);
    const docSnap = await getDoc(docRef);
    
    // CONSOLE PRINT DATA, FOR TESTING PURPOSES ONLY ( TO BE DELETED ).
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.warn("No documents found.");
    }

  }


  return ( 
    <div>Profile Page</div>
  )
}

export default Profile