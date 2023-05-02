import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { firestore } from '../firebase-init';

export function useDocumentRequests({ keyword }) {
  // TODO pagination
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    console.log({ keyword });
    let q = query(collection(firestore, 'documentRequest'));
    if (keyword) {
      q = query(collection(firestore, 'documentRequest'), where('keywords', 'array-contains', keyword.toLowerCase()));
    }
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const requestSnapshots = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        requestSnapshots.push({ ...data, id: doc.id, datetime: data.datetime.toDate() });
      });

      setRequests(requestSnapshots);
    });

    return () => unsubscribe;
  }, [keyword]);

  return requests;
}
