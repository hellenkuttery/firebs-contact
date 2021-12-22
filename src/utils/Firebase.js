import { initializeApp } from "firebase/app";
// import {getDatabase} from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyBlPigizlLavoZy_J7LRV6d1ZxGP1fwacs",
  authDomain: "fire-contact-38dab.firebaseapp.com",
  databaseURL: "https://fire-contact-38dab-default-rtdb.firebaseio.com",
  projectId: "fire-contact-38dab",
  storageBucket: "fire-contact-38dab.appspot.com",
  messagingSenderId: "999909912843",
  appId: "1:999909912843:web:08bae176db0885bec3720e"
};
  const firebase= initializeApp(firebaseConfig)

export default firebase;