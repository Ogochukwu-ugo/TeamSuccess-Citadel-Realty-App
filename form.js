// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBib-rg8clKXgEZfiLBDSFLY-a6gR3cPIo",
  authDomain: "authentication-app-83622.firebaseapp.com",
  databaseURL: "https://authentication-app-83622-default-rtdb.firebaseio.com",
  projectId: "authentication-app-83622",
  storageBucket: "authentication-app-83622.appspot.com",
  messagingSenderId: "944142634969",
  appId: "1:944142634969:web:7201947fbe920bc97153c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();




    const email = document.getElementById('email ').value;
        const password = document.getElementById(' pswd').value;
        const firstName = document.getElementById('firstName ').value;

const form = document.getElementById("form-detail");
    form.addEventListener('submit',  (e) =>  {
        e.preventDefault();
        
    
        
    
        
        createUserWithEmailAndPassword(auth, email, password, firstName)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            
            if(user && user !== null) {
                
                console.log(user);
            }else{
                console.log('error creating user');
            }
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorMessage, errorCode);
            // ..
        });
});