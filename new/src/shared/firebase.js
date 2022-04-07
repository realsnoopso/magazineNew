import firebase from 'firebase/app';
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8KeV-U1FMjvQerxhrkX-77BVoGiYaZlY",
  authDomain: "magazine-96826.firebaseapp.com",
  projectId: "magazine-96826",
  storageBucket: "magazine-96826.appspot.com",
  messagingSenderId: "1044331772324",
  appId: "1:1044331772324:web:20faefd76bbff3c8d56931",
  measurementId: "G-VF7723BV20"
};

const apiKey = firebaseConfig.apiKey;

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth, apiKey };