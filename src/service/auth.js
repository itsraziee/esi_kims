import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-init';

export async function login(email, password) {
  console.log({ email, password });
  return signInWithEmailAndPassword(auth, email, password);
}

export async function resetUserPassword(email) {
  return sendPasswordResetEmail(auth, email);
}
