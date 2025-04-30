import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";


function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            alert("Registration successful!");
        })
        .catch(error => {
            console.error("Error: ", error.message);
            alert("Error: " + error.message);
        });
}


function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            alert("Login successful!");
        })
        .catch(error => {
            console.error("Error: ", error.message);
            alert("Error: " + error.message);
        });
}


document.getElementById("register-btn").addEventListener("click", register);
document.getElementById("login-btn").addEventListener("click", login);
