import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { firestore } from '../firebase-init';

export function useLegislatives() {
  const [legislatives, setLegislatives] = useState(null);

  useEffect(() => {
    const q = query(collection(firestore, 'legislative'), orderBy('title'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const legislativeSnapshots = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        legislativeSnapshots.push({ ...data, id: doc.id });
      });

      setLegislatives(legislativeSnapshots);
    });

    return () => {
      return unsubscribe;
    };
  }, []);

  return legislatives;
}
