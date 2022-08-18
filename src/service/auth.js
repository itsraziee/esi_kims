import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, firestore } from '../firebase-init';

export async function login(email, password) {
  console.log({ email, password });
  return signInWithEmailAndPassword(auth, email, password);
}

export async function resetUserPassword(email) {
  return sendPasswordResetEmail(auth, email);
}

export function createAccount(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function setProfile(uid, firstName, lastName) {
  return setDoc(doc(firestore, `profile/${uid}`), { firstName, lastName });
}
