import firebase from "./firebase"
import { getDatabase, ref, set } from "firebase/database";


export const addInfo=(info)=> {
    console.log(info)
    const db = getDatabase(firebase);
    set(ref(db, 'contact/'), {
        username: info.username,
        phoneNumber:info.phoneNumber ,
        gender:info.gender });

  }

//   const dbRef = ref(db, `users/{userUid}`)
// update(dbRef, {displayName: "Firebase9_IsCool"}).then(() => {
//   console.log("Data updated");
// }).catch((e) => {
//   console.log(e);
// })
