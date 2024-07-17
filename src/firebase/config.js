import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD3KIV7Oa9Fk8g3_yLirC_EgfIubOPnOCY",
  authDomain: "olxs-7876e.firebaseapp.com",
  projectId: "olxs-7876e",
  storageBucket: "olxs-7876e.appspot.com",
  messagingSenderId: "535459522418",
  appId: "1:535459522418:web:b1c8c695c60d5f26b41feb",
  measurementId: "G-YWMHLEMMXG",
};
export { firebaseConfig };
export default firebase.initializeApp(firebaseConfig);
