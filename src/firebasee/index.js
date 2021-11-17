import firebase from 'firebase/app'
import 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyAp7P1MNyE5-vBF-_0qbM9uuzBBUlsaO_c",
  authDomain: "fir-upload-db77d.firebaseapp.com",
  projectId: "fir-upload-db77d",
  storageBucket: "fir-upload-db77d.appspot.com",
  messagingSenderId: "1058748117279",
  appId: "1:1058748117279:web:a7157fdc6dee9bf411c02a",
  measurementId: "G-P3CND0P152"
  };

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export {storage,firebase as default}