import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { firestore } from '../firebase-init';

export function useSummons(solved = false) {
  const [summons, setSummons] = useState(null);

  useEffect(() => {
    const q = query(collection(firestore, 'summon'), where('caseType', '==', solved ? 'solved' : 'unsolved'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const summonSnapshots = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        summonSnapshots.push({ ...data, id: doc.id });
      });

      setSummons(summonSnapshots);
    });

    return () => {
      return unsubscribe;
    };
  }, [solved]);

  return summons;
}
