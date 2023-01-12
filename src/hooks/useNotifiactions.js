import { collection, limit, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { firestore } from '../firebase-init';

export function useNotifications(lim = 10) {
  // TODO pagination
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const q = query(collection(firestore, 'requestNotifications'), limit(lim), where('read', '==', false));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const notificationSnapshots = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        notificationSnapshots.push({
          ...data,
          id: doc.id,
        });
      });

      setNotifications(notificationSnapshots);
    });

    return () => {
      return unsubscribe;
    };
  }, []);

  return notifications;
}
