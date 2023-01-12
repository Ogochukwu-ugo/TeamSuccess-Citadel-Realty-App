// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
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
const db = getDatabase(app);
const auth = getAuth();



const email = document.getElementById('email');
const password = document.getElementById('pswd');
const firstName = document.getElementById('firstName');
const signup = document.getElementById("registers");



//Sign Up validation
signup.addEventListener("submit", (e) => {
    e.preventDefault();

        // let user = { email: email.value, password: password.value, firstName: firstName.value }; Used to text if my form is receiving inputts.
        // if(user.email === "" || user.password === "" || user.firstName === "") {
        //     alert('Please input all required details');
        // } else {
        //     console.log(user);
        // }
        createUserWithEmailAndPassword(auth, email.value, password.value, firstName.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                if(user !== " " || user.isValid){
                    
                    set(ref(db, 'users/' +  userId),{
                        email: email,
                        password: password
                    });
                    console.log("User created");
                    window.location.href = './login.html';
                }
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorMessage, errorCode);
            });
    
});





