// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
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



const email = document.getElementById('email');
const password = document.getElementById('pswd');
const firstName = document.getElementById('firstName');
const form = document.getElementById("registers");
const login = document.getElementById('login');


//Sign Up validation
form.addEventListener("submit", (e) => {
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

                    set(ref(database, 'users/' + user.uid),{
                        firstName: firstName,
                        email: email
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


//Login validation

login.addEventListener("submit", (e)=>{
    e.preventDefault();


    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        if(user !== " " || user.isValid){


            const dt = new Date();
            update(ref(database, 'users/' + user.uid),{
                last_login: dt,
            });
            
            window.location.href = './login.html';
        }
        //...
        alert("Login successful");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorCode, errorMessage);
    });


});


