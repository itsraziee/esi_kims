import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { firestore } from '../firebase-init';

export function useBlotters(solved = false) {
  const [blotters, setBlotters] = useState(null);

  useEffect(() => {
    const q = query(collection(firestore, 'blotter'), where('caseType', '==', solved ? 'solved' : 'unsolved'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const blotterSnapshots = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        blotterSnapshots.push({ ...data, id: doc.id });
      });

      setBlotters(blotterSnapshots);
    });

    return () => {
      return unsubscribe;
    };
  }, [solved]);

  return blotters;
}
