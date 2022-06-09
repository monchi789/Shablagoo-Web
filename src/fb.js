import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

export const app = firebase.initializeApp({
  projectId: "shablagoo-db-9ae20",
  appId: "1:333683042020:web:0438e6848f1385f58b2ef1",
  databaseURL: "https://shablagoo-db-9ae20-default-rtdb.firebaseio.com",
  storageBucket: "shablagoo-db-9ae20.appspot.com",
  locationId: "us-central",
  apiKey: "AIzaSyA9zPZVSHtKdqaEg9PDtVkSFbhkWZFA7YE",
  authDomain: "shablagoo-db-9ae20.firebaseapp.com",
  messagingSenderId: "333683042020",
});
