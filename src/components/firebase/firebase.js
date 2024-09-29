// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMGSmyJSeimdfX-MVJqMqmKI8_7SSlFV4",
  authDomain: "projectf-e504f.firebaseapp.com",
  projectId: "projectf-e504f",
  storageBucket: "projectf-e504f.appspot.com",
  messagingSenderId: "240061808197",
  appId: "1:240061808197:web:81cef57e1e5be43edfad2c",
  measurementId: "G-D6G2JY3ZYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);


export {app, auth};