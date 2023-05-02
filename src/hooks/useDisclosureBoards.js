import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { firestore } from '../firebase-init';

export function useDisclosureBoards() {
  const [disclosureBoards, setDisclosureBoards] = useState(null);

  useEffect(() => {
    const q = query(collection(firestore, 'disclosureBoard'), orderBy('title'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const disclosureBoardSnapshots = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        disclosureBoardSnapshots.push({ ...data, id: doc.id });
      });

      setDisclosureBoards(disclosureBoardSnapshots);
    });

    return () => {
      return unsubscribe;
    };
  }, []);

  return disclosureBoards;
}
