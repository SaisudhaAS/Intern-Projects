
import { db } from './firebase-config.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

document.getElementById("addCategoryBtn").addEventListener("click", () => {
  const val = document.getElementById("categoryName").value;
  addDoc(collection(db, "categories"), { name: val });
  alert("Category Added");
});

document.getElementById("addCityBtn").addEventListener("click", () => {
  const val = document.getElementById("cityName").value;
  addDoc(collection(db, "cities"), { name: val });
  alert("City Added");
});

document.getElementById("addAreaBtn").addEventListener("click", () => {
  const val = document.getElementById("areaName").value;
  addDoc(collection(db, "areas"), { name: val });
  alert("Area Added");
});
