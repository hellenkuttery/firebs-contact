import { getDatabase, ref, update ,child,push} from "firebase/database";

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