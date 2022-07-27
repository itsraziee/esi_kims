import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../firebase-init';

export function useAuth() {
  const [user, setUser] = useState();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      setUser(user);
      // ...
    } else {
      // User is signed out
      // ...
      setUser(null);
    }
  });

  return user;
}
