// Import the functions you need from the SDKs you need
import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import {
  getAnalytics
} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2od-MhkEyLA9-0-qbyjwelPOH3rTu2B0",
  authDomain: "zoack-f1a29.firebaseapp.com",
  databaseURL: "https://zoack-f1a29.firebaseio.com",
  projectId: "zoack-f1a29",
  storageBucket: "zoack-f1a29.appspot.com",
  messagingSenderId: "944205016737",
  appId: "1:944205016737:web:79a03707ab62ab0c0a4ae0",
  measurementId: "G-VBMFJTQK39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get DB ref

import {
  getDatabase,
  ref,
  onValue
} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";

const db = getDatabase();

// Read destinations reference
const destinationsRef = ref(db, 'destinations');

onValue(destinationsRef, (snapshot) => {
  if (snapshot.exists()) {
    const data = snapshot.val();
    console.log(data);
  } else {
    console.log("No data available");
  }
}, {
  onlyOnce: true
}).catch((error) => {
  console.error(error);
})


// TODO: setup Auth.