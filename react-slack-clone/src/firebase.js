import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


var firebaseConfig = {
  apiKey: "AIzaSyByNDS_IDFpTCnfKbOnKHcGmdTXOfFV1eM",
  authDomain: "slack-react-clone-46b09.firebaseapp.com",
  databaseURL: "https://slack-react-clone-46b09.firebaseio.com",
  projectId: "slack-react-clone-46b09",
  storageBucket: "slack-react-clone-46b09.appspot.com",
  messagingSenderId: "137657991322",
  appId: "1:137657991322:web:7b82ffa4e3954074a09f23",
  measurementId: "G-19Y7ZW1PL8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export default firebase;