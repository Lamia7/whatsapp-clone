// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAx-6_a-OIoA5POY7kLCyLIzQmOGwiXpWI",
  authDomain: "whatsapp-clone-e2d56.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-e2d56.firebaseio.com",
  projectId: "whatsapp-clone-e2d56",
  storageBucket: "whatsapp-clone-e2d56.appspot.com",
  messagingSenderId: "987067951407",
  appId: "1:987067951407:web:2ae384b759880fc2edd9da",
  measurementId: "G-N175TCKXT3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {  auth, provider };  // export explicitly
export default db;  // we are going to use the db more often