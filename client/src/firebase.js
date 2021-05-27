import firebase from 'firebase/app';
import "firebase/auth";


  // Your web app's Firebase configuration

  const firebaseConfig = {
    apiKey: "AIzaSyCw63StdEo9o1inTh_7ysCfo9Ih7lLHw9M",
    authDomain: "lukamijatovic-a74e5.firebaseapp.com",
    projectId: "lukamijatovic-a74e5",
    storageBucket: "lukamijatovic-a74e5.appspot.com",
    messagingSenderId: "67206582078",
    appId: "1:67206582078:web:ee19fc25f97b83279f666f"
      
    };
  // Initialize Firebase

  //firebase.initializeApp(firebaseConfig);

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

//export 
 
export const auth = firebase.auth() 
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()