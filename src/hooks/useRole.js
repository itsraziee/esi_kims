import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { firestore } from '../firebase-init';

export function useUser(role) {
  // TODO pagination
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!role) return;

    const userRef = doc(firestore, 'users', role);
    const unsubscribe = onSnapshot(userRef, (res) => {
      setUser(res.data());
    });

    return () => {
      return unsubscribe;
    };
  }, [role]);

  return user;
}
