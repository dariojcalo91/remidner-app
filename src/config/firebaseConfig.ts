import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAmg6PuWOViY29SMEK47_8MW25ygTMQYPE",
  authDomain: "reminder-back.firebaseapp.com",
  databaseURL: "https://reminder-back.firebaseio.com",
  projectId: "reminder-back",
  storageBucket: "reminder-back.appspot.com",
  messagingSenderId: "749292818287",
  appId: "1:749292818287:web:c2659cbd6238a8c991629a"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
