// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase,  ref, update } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
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
const db = getDatabase(app);
const auth = getAuth();



const email = document.getElementById('email');
const password = document.getElementById('pswd');
const login = document.getElementById('login');


//Login validation

login.addEventListener("submit", (e)=>{
    e.preventDefault();


    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

            if(email === user || password === user) {
                const dt = new Date();
                update(ref(db, 'users/' + userId),{
                last_login: dt,

                });
                console.log("Login successful");
                window.location.href = './home.html';
            }
            
        
        //...
        
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorCode, errorMessage);
    });


});