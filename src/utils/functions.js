import firebase from "./firebase"
import { getDatabase, ref, push,set, query, onValue,child,update, remove} from "firebase/database";
import { useState,useEffect } from "react";
import { successNote } from "./customToastify";

export const addInfo=(info)=> {
  const db = getDatabase();
  const userRef = ref(db, 'contact');
  const newUserRef = push(userRef);
  set(newUserRef, {
    username:info.username,
    phoneNumber:info.phoneNumber ,
    gender:info.gender
  });
  successNote("Successfully Added")
}

  export const useFetch=()=>{
    const [contactList, setContactList] = useState();
    const [isLoading,setIsLoading]=useState(false)
    useEffect(()=>{
      setIsLoading(true)

      const db = getDatabase();
      const userRef = ref(db, 'contact');
  
      onValue(query(userRef), snapshot => {
        const contacts=snapshot.val()
        // console.log(snapshot.val())
        const contactArray = [];
        for (let id in contacts) {
          contactArray.push({ id, ...contacts[id] });
        }
        setContactList(contactArray);
        setIsLoading(false);
        
      })
    },[]);
    return {isLoading,contactList};
  }

  export const deleteHandler=(id)=>{
    const db = getDatabase();
    const userRef = ref(db, 'contact');
    remove(ref(db, 'contact/' + id))
    successNote("Deleted")
  }

  export const updateInfo=(info)=>{
    const db = getDatabase();
      // const addUser = {
      //   username:info.username,
      //   phoneNumber:info.phoneNumber ,
      //   gender:info.gender
      // };
      const newUserKey = push(child(ref(db), 'contact/')).key;
      const updates = {};
      updates['contact/' + newUserKey] = info;
      console.log("değişti")
      return update(ref(db), updates);
     
   
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