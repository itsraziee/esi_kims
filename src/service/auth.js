import { initializeApp } from '@firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, firebaseConfig, firestore } from '../firebase-init';

export async function login(email, password) {
  console.log({ email, password });
  return signInWithEmailAndPassword(auth, email, password);
}

export async function resetUserPassword(email) {
  return sendPasswordResetEmail(auth, email);
}

export function createAccount(email, password) {
  const secondaryApp = initializeApp(firebaseConfig, 'Secondary');
  const secondaryAuth = getAuth(secondaryApp);

  return createUserWithEmailAndPassword(secondaryAuth, email, password);
  // .then(function (firebaseUser) {
  //   console.log('User ' + firebaseUser.uid + ' created successfully!');
  //   //I don't know if the next statement is necessary
  //   secondaryApp.auth().signOut();
  // });
  // return createUserWithEmailAndPassword(auth, email, password);
}

export function setProfile(uid, firstName, lastName, accountRole) {
  return setDoc(doc(firestore, `profile/${uid}`), { firstName, lastName, accountRole });
}
