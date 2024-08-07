// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXKr6vq_yJs80Ib-PU1Lr9w0_tesTykp0",
  authDomain: "inventory-management-6cfca.firebaseapp.com",
  projectId: "inventory-management-6cfca",
  storageBucket: "inventory-management-6cfca.appspot.com",
  messagingSenderId: "773232194274",
  appId: "1:773232194274:web:f67412157deecc818464bb",
  measurementId: "G-KZN4WKJFQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}