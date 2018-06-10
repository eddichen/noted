import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAjjHAHTZ7_TBWivbzUeJh-JchNkhrhHKA",
  authDomain: "noted-a12ec.firebaseapp.com",
  databaseURL: "https://noted-a12ec.firebaseio.com",
  projectId: "noted-a12ec",
  storageBucket: "noted-a12ec.appspot.com",
  messagingSenderId: "1051198072164"
});

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

//this is a default export
export default base;
