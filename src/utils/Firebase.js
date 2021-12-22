import firebase from "firebase/app"
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyBlPigizlLavoZy_J7LRV6d1ZxGP1fwacs",
    authDomain: "fire-contact-38dab.firebaseapp.com",
    projectId: "fire-contact-38dab",
    storageBucket: "fire-contact-38dab.appspot.com",
    messagingSenderId: "999909912843",
    appId: "1:999909912843:web:08bae176db0885bec3720e"
  };
  const app = initializeApp(firebaseConfig);
  export default firebase;