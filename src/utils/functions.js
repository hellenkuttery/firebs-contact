import firebase from './firebase';

export const addInfo=(info)=>{
    console.log(info)
    const contactRef=firebase.database().ref();
    console.log("contact:",contactRef)
}
