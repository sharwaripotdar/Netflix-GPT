import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmexpDIs2FlZNjWrUanKMvFMcv92PHw2Y",
  authDomain: "netflix-gpt-f387b.firebaseapp.com",
  projectId: "netflix-gpt-f387b",
  storageBucket: "netflix-gpt-f387b.firebasestorage.app",
  messagingSenderId: "286168138546",
  appId: "1:286168138546:web:42e4c1273a438662990d2b",
  measurementId: "G-249V423V25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();