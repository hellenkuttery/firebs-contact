import { getDatabase, ref, update ,child,push,onValue} from "firebase/database";
import { useEffect, useState } from 'react';

export const addInfo=(info)=> {
  const db = getDatabase();
  const addUser = {
    username:info.username,
    phoneNumber:info.phoneNumber ,
    gender:info.gender
  };
  const newUserKey = push(child(ref(db), 'contact')).key;
  const updates = {};
  updates['contact' + newUserKey] = addUser;
  return update(ref(db), updates);
  }

  // export const useFetch = () => {
  //   const [contactList, setContactList] = useState();
  //   const [isLoading, setIsLoading] = useState(true);
  
  //   useEffect(() => {
  //     setIsLoading(true);
  //     const db = getDatabase();
  //     const userCountRef=ref(db,"contact");
  //     onValue(userCountRef,(snapshot) => {
  //       const contacts = snapshot.val();
  //       console.log({ contacts });
  //       const contactArray = [];
  //       for (let id in contacts) {
  //         contactArray.push({ id, ...contacts[id] });
  //       }
  //       setContactList(contactArray);
  //       setIsLoading(false);
  //     });
  //   }, []);
  
  //   return { contactList, isLoading };
  // };
