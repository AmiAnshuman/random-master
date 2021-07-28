import firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: 'AIzaSyCBayM-kchGEJzCbes2xmAke-7IMA39Xd0',
//   authDomain: 'randomfinance-225dd.firebaseapp.com',
//   projectId: 'randomfinance-225dd',
//   storageBucket: 'randomfinance-225dd.appspot.com',
//   messagingSenderId: '957952851468',
//   appId: '1:957952851468:web:5a2016ff5dfa4df50a7829',
// };

var firebaseConfig = {
  apiKey: "AIzaSyDqFVZDEfoqpbOnxUOdN_mUX6G9K5Ob_o8",
  authDomain: "rand-33e26.firebaseapp.com",
  projectId: "rand-33e26",
  storageBucket: "rand-33e26.appspot.com",
  messagingSenderId: "615069424099",
  appId: "1:615069424099:web:e877d4df8c8a6185f4a8d6",
  measurementId: "G-8RVD09J6MM"
};
// Initialize Firebase
const firebaseinit = firebase.initializeApp(firebaseConfig);

export { firebaseinit };
