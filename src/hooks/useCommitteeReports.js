import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { firestore } from '../firebase-init';

export function useCommitteeReports() {
  const [committeeReports, setCommitteeReports] = useState(null);

  useEffect(() => {
    const q = query(collection(firestore, 'committeeReport'), orderBy('subject'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const committeeReportSnapshots = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        committeeReportSnapshots.push({ ...data, id: doc.id });
      });

      setCommitteeReports(committeeReportSnapshots);
    });

    return () => {
      return unsubscribe;
    };
  }, []);

  return committeeReports;
}
