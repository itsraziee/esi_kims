import { collection, onSnapshot, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { firestore } from '../firebase-init';

export function useFeedbacks() {
  const [feedbacks, setFeedbacks] = useState(null);

  useEffect(() => {
    const q = query(collection(firestore, 'feedback'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const feedbackSnapshots = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        feedbackSnapshots.push({ ...data, id: doc.id });
      });

      setFeedbacks(feedbackSnapshots);
    });

    return () => {
      return unsubscribe;
    };
  }, []);

  return feedbacks;
}
