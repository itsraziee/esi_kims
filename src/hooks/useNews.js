import { collection, limit, onSnapshot, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { firestore } from '../firebase-init';

export function useNews(newsLimit) {
  const [news, setNews] = useState(null);

  useEffect(() => {
    const q = query(collection(firestore, 'news'), limit(newsLimit));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newsSnapshots = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        newsSnapshots.push({ ...data, id: doc.id });
      });

      setNews(newsSnapshots);
    });

    return () => {
      return unsubscribe;
    };
  }, [newsLimit]);

  return news;
}
