// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCoPZ1x5D52Pbp3euTV65aLXMf7n891CXA',
  authDomain: 'react-netflix-clone-khushal.firebaseapp.com',
  projectId: 'react-netflix-clone-khushal',
  storageBucket: 'react-netflix-clone-khushal.appspot.com',
  messagingSenderId: '574753574397',
  appId: '1:574753574397:web:b4e661f401f5685f375d94',
  measurementId: 'G-63JY42T34H',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);
