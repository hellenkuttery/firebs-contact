import firebase from "./firebase"
import { getDatabase, ref, push,set,get, query, onValue} from "firebase/database";
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
    const [contactList, setContactList] = useState();
    const [isLoading,setIsLoading]=useState(false)
    useEffect(()=>{
      setIsLoading(true)
      const db = getDatabase();
      const userRef = ref(db, 'contact');
      const usersSnapshot = get(query(userRef))
      onValue(query(userRef), snapshot => {
        const contacts=snapshot.val()
        console.log(snapshot.val())
        const contactArray = [];
        for (let id in contacts) {
          contactArray.push({ id, ...contacts[id] });
        }
        setContactList(contactArray);
        setIsLoading(false);
        console.log("useEffectin sonuna geldik")
      })
    },[]);
    return {isLoading,contactList};
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