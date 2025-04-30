
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyD-EXAMPLEKEY-12345",  
    authDomain: "student-teacher-booking.firebaseapp.com",
    projectId: "student-teacher-booking",
    storageBucket: "student-teacher-booking.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abc123xyz"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


export { db, auth };
