import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCjQzPTxw9GuzpG789cANXKEhoIez6b-Ew",
    authDomain: "scriptengine-f031b.firebaseapp.com",
    databaseURL: "https://scriptengine-f031b.firebaseio.com",
    projectId: "scriptengine-f031b",
    storageBucket: "",
    messagingSenderId: "318348482425",
    appId: "1:318348482425:web:7be9e4bb7b5047cb"
  };
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig)

export default fire