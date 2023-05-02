import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { firestore } from '../firebase-init';

export function useOfficials(position) {
  // TODO pagination
  const [officials, setOfficials] = useState(null);

  useEffect(() => {
    const q = query(collection(firestore, 'official'), where('position', '==', position));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const officialSnapshots = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        officialSnapshots.push({ ...data, id: doc.id, name: `${data.firstName} ${data.middleName} ${data.lastName}` });
      });

      setOfficials(officialSnapshots);
    });

    return () => {
      return unsubscribe;
    };
  }, []);

  return officials;
}
