import {getFirestore} from "firebase/firestore"
import {initializeApp} from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7gO4xb67C0IAjUmZXQL4EeKIjhMod0HA",
  authDomain: "weatherapp-554d8.firebaseapp.com",
  projectId: "weatherapp-554d8",
  storageBucket: "weatherapp-554d8.appspot.com",
  messagingSenderId: "281466353165",
  appId: "1:281466353165:web:e4fa3cc8d78c24f7860744",
  measurementId: "G-E9TV07LV89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const store=getFirestore(app)
export { store}