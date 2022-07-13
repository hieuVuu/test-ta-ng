// Add firebase
 // Import the functions need from the SDKs 
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";
 import { getDatabase } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";

window.onload = () => {
  // My web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUaqqeS_2vIWUKQCaIUMYujYKvby3vBQU",
  authDomain: "ta-anh-nguyen.firebaseapp.com",
  databaseURL: "https://ta-anh-nguyen-default-rtdb.firebaseio.com",
  projectId: "ta-anh-nguyen",
  storageBucket: "ta-anh-nguyen.appspot.com",
  messagingSenderId: "826038502460",
  appId: "1:826038502460:web:f07edb953ddef0abf6af39"
};

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth();
 const database = getDatabase(app);

 // show UI when user login
 onAuthStateChanged(auth, (user) => {
   if(user) {
    view.setActiveScreen('adminScreen')
   }
   else {
     //user signed out
     view.setActiveScreen('loginScreen')
   }
 })
}