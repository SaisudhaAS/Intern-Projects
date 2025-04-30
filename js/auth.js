
import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const registerBtn = document.getElementById("registerBtn");
if (registerBtn) {
  registerBtn.addEventListener("click", async () => {
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration Successful");
      window.location.href = "login.html";
    } catch (err) {
      alert(err.message);
    }
  });
}

const loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
  loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const isAdmin = email.includes("admin");
      window.location.href = isAdmin ? "admin-dashboard.html" : "user-dashboard.html";
    } catch (err) {
      alert("Login Failed: " + err.message);
    }
  });
}
