import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import dotenv from 'dotenv';
dotenv.config();

const firebaseConfig = {
  apiKey: "AIzaSyA8Ype9SokF89tdoETXVmxIjyXVG-I-KME",
  authDomain: "trendz-auth-staging.firebaseapp.com",
  projectId: "trendz-auth-staging",
  storageBucket: "trendz-auth-staging.appspot.com",
  messagingSenderId: "102245650023",
  appId: "1:102245650023:web:911e0a4d270720eed24ec2",
  measurementId: "G-HTYPV1E22V"
};

// console.log({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// });

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = (beforeFn, afterFn) => {
  beforeFn();
  auth.signInWithPopup(googleProvider).then((res) => {
    const localData = {
      googleAuthResult: res,
      currentUser: res.user,
    };
    localStorage.setItem('data', JSON.stringify(localData));
    localStorage.setItem('cart', JSON.stringify({}));
    localStorage.setItem('wishlist', JSON.stringify([]));
    afterFn(localData);
  }).catch((error) => {
    console.log(error.message);
  });
};

export const currentUser = () => {
  auth.onAuthStateChanged( user => user);
};

export const logOut = (beforeFn, afterFn) => {
  beforeFn();
  auth.signOut().then(() => {
    console.log('logged out');

    afterFn();
  }).catch((error) => {
    console.log(error.message);
  });
};
