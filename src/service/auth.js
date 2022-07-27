import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-init';

export async function login(email, password) {
  console.log({ email, password });
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log({ userCredential });
      // ...
      return userCredential;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log({ error });
    });
}
