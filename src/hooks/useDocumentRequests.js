import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { firestore } from '../firebase-init';

export function useDocumentRequests() {
  // TODO pagination
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const q = query(collection(firestore, 'documentRequest'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const requestSnapshots = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        requestSnapshots.push({ ...data, id: doc.id, datetime: data.datetime.toDate() });
      });

      setRequests(requestSnapshots);
    });

    return () => {
      return unsubscribe;
    };
  }, []);

  return requests;
}
