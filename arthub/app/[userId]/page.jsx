"use client"
import React, { useEffect } from 'react'

function Profile({params}) {
  useEffect(()=>{
    console.log("Loaded user profile for: "+params.userId.replace("%40", "@"))
  }, [params])
  return ( 
    <div>Profile Page</div>
  )
}

export default Profile