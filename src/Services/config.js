
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyACSGWtldF-5z7r0-FkwO3hRTUkBpbDZgs",
  authDomain: "perfumes-porciuj.firebaseapp.com",
  projectId: "perfumes-porciuj",
  storageBucket: "perfumes-porciuj.firebasestorage.app",
  messagingSenderId: "495297381040",
  appId: "1:495297381040:web:3557e17a06075f350d3175"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

