// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAYAWgmUwRwQCwhDgLUKcs1DWuXBDtyU44',
  authDomain: 'curso-reat.firebaseapp.com',
  projectId: 'curso-reat',
  storageBucket: 'curso-reat.appspot.com',
  messagingSenderId: '199900477234',
  appId: '1:199900477234:web:c8fbbdcfa8318a5507c92b',
  measurementId: 'G-CKJGM038JM',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
