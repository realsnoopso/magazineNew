import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"



const firebaseConfig = {
  apiKey: "AIzaSyD8KeV-U1FMjvQerxhrkX-77BVoGiYaZlY",
  authDomain: "magazine-96826.firebaseapp.com",
  projectId: "magazine-96826",
  storageBucket: "magazine-96826.appspot.com",
  messagingSenderId: "1044331772324",
  appId: "1:1044331772324:web:20faefd76bbff3c8d56931",
  measurementId: "G-VF7723BV20"
};


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const apiKey = firebaseConfig.apiKey;
const firestore = firebase.firestore();
const storage = firebase.storage();


export { auth, apiKey, firestore, storage };