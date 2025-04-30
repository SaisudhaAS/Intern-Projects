
import { db } from './firebase-config.js';
import { collection, addDoc, onSnapshot, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const addEventBtn = document.getElementById("addEventBtn");
const eventsContainer = document.getElementById("eventsContainer");

addEventBtn.addEventListener("click", async () => {
  const sportName = document.getElementById("sportName").value;
  const category = document.getElementById("category").value;
  const city = document.getElementById("city").value;
  const area = document.getElementById("area").value;

  try {
    await addDoc(collection(db, "events"), { sportName, category, city, area });
    alert("Event Added");
  } catch (err) {
    console.error("Error adding event: ", err);
  }
});

onSnapshot(collection(db, "events"), (snapshot) => {
  eventsContainer.innerHTML = "";
  snapshot.forEach((docSnap) => {
    const data = docSnap.data();
    const div = document.createElement("div");
    div.className = "list-group-item d-flex justify-content-between";
    div.innerHTML = `
      ${data.sportName} - ${data.category} - ${data.city} - ${data.area}
      <button class="btn btn-sm btn-danger" onclick="deleteEvent('${docSnap.id}')">Delete</button>
    `;
    eventsContainer.appendChild(div);
  });
});

window.deleteEvent = async (id) => {
  await deleteDoc(doc(db, "events", id));
};
