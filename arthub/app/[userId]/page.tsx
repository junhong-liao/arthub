"use client";

import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect } from "react";
import app from "../Shared/firebaseConfig";
import UserInfo from "../../components/UserInfo";

function Profile({ params }: any) {
  const db = getFirestore(app);

  // Retrieve user data from Firestore
  const getUserInfo = async (email: string) => {
    const docRef = doc(db, "user", email);
    try {
      const docSnap = await getDoc(docRef);
      // CONSOLE PRINT DATA, FOR TESTING PURPOSES ONLY (TO BE DELETED).
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        console.warn("No documents found.");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };

  // Logs userId and fetches user info
  useEffect(() => {
    if (params && params.userId) {
      const userId = params.userId.replace("%40", "@");
      console.log("Loaded user profile for: " + userId);
      getUserInfo(userId + "@gmail.com");
    }
  }, [params]);

  return (
    <div>
      <UserInfo />
    </div>
  );
}

export default Profile;
