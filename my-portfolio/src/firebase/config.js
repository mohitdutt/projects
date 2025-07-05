import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCW1HXRnsORixOB2zmoIBb5kKX6pyN6TmA",
  authDomain: "myportfolio-32386.firebaseapp.com",
  projectId: "myportfolio-32386",
  storageBucket: "myportfolio-32386.firebasestorage.app",
  messagingSenderId: "882818182361",
  appId: "1:882818182361:web:2753ad14fd2fbea15c62c8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };