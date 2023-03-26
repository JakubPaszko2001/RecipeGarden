// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4W-pjWQUFwzfxVPm4AC-QjF2203t0zYw",
  authDomain: "recipeapp-67811.firebaseapp.com",
  projectId: "recipeapp-67811",
  storageBucket: "recipeapp-67811.appspot.com",
  messagingSenderId: "961664583613",
  appId: "1:961664583613:web:b2b761264b9fa9dd5b74d4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
