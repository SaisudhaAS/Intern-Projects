import { db } from "./firebase-config.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";


async function bookAppointment() {
    const teacherId = document.getElementById("teacher-list").value;
    const appointmentTime = document.getElementById("appointment-time").value;

    if (!teacherId || !appointmentTime) {
        alert("Please select a teacher and appointment time.");
        return;
    }

    try {
        await addDoc(collection(db, "appointments"), {
            teacherId: teacherId,
            studentId: "ExampleStudentID",
            appointmentTime: appointmentTime,
            status: "Pending"
        });

        alert("Appointment booked successfully!");
    } catch (error) {
        console.error("Error booking appointment: ", error);
    }
}


async function loadTeachers() {
    const teacherList = document.getElementById("teacher-list");

    try {
        const querySnapshot = await getDocs(collection(db, "teachers"));
        querySnapshot.forEach(doc => {
            let option = document.createElement("option");
            option.value = doc.id;
            option.textContent = doc.data().name + " (" + doc.data().department + ")";
            teacherList.appendChild(option);
        });
    } catch (error) {
        console.error("Error loading teachers: ", error);
    }
}

window.onload = loadTeachers;
