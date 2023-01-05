// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: 'AIzaSyC9BMWQRmPOcIhTYohMw8tNkf6edayu1BU',
  authDomain: 'kimanait-ims.firebaseapp.com',
  projectId: 'kimanait-ims',
  storageBucket: 'kimanait-ims.appspot.com',
  messagingSenderId: '870432104147',
  appId: '1:870432104147:web:d36e450f77000a4bd37e26',
  measurementId: 'G-61MPPB9X8S',
};

console.log({ env: process.env });
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

console.log({ app });
