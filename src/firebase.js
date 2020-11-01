import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAL8MSlduSOigWtfZFQ65hZTGQ4KRISk9M",
  authDomain: "todo-ish-7e328.firebaseapp.com",
  databaseURL: "https://todo-ish-7e328.firebaseio.com",
  projectId: "todo-ish-7e328",
  storageBucket: "todo-ish-7e328.appspot.com",
  messagingSenderId: "309642284936",
  appId: "1:309642284936:web:b7d67ddf5821298797743d",
  measurementId: "G-5015BYVXQY",
});

const db = firebaseApp.firestore();
export const auth = firebase.auth();
export default db;
