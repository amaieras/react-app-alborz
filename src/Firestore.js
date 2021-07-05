import firebase from "@firebase/app";

const config = {
  apiKey: "AIzaSyDmXKQrZJIdL1p9RYIdqC0swfTR3TC9fX8",
  authDomain: "react-app-alborz.firebaseapp.com",
  databaseURL: "https://react-app-alborz-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-app-alborz",
  storageBucket: "react-app-alborz.appspot.com",
  messagingSenderId: "406132303401",
  appId: "1:406132303401:web:753224be926b2e0a4d1e38",
  measurementId: "G-54YM7E9CC6"
};

firebase.initializeApp(config);

export default firebase;
