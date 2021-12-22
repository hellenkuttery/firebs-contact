import firebase from "./firebase"
import { getDatabase, ref, push,set} from "firebase/database";
import { useState,useEffect } from "react";

export const addInfo=(info)=> {
  const db = getDatabase();
  const userRef = ref(db, 'contact');
  const newUserRef = push(userRef);
  set(newUserRef, {
    username:info.username,
    phoneNumber:info.phoneNumber ,
    gender:info.gender
  });
   
  }

  export const useFetch=()=>{
    const [isLoading,setIsLoading]=useState(false)
    useEffect(()=>{
      setIsLoading(true)
    },[]);
    return {isLoading};
  }







  // const db = getDatabase();
  // const addUser = {
    // username:info.username,
    // phoneNumber:info.phoneNumber ,
    // gender:info.gender
  // };
  // const newUserKey = push(child(ref(db), 'contact')).key;
  // const updates = {};
  // updates['contact' + newUserKey] = addUser;
  // return update(ref(db), updates);