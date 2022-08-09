import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { firestore } from '../firebase-init';

export function useResidents(purok) {
  // TODO pagination
  const [residents, setResidents] = useState(null);

  useEffect(() => {
    const q = purok
      ? query(collection(firestore, 'resident'), where('purok', '==', purok))
      : query(collection(firestore, 'resident'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const residentSnapshots = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        residentSnapshots.push({ ...data, id: doc.id });
      });

      setResidents(residentSnapshots);
    });

    return () => {
      return unsubscribe;
    };
  }, []);

  return residents;
}
