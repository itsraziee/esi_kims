import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { firestore } from '../firebase-init';

export function useProfile(uid) {
  const [profile, setProfile] = useState();

  useEffect(() => {
    console.log({ uid });
    if (!uid) return;
    const unsub = onSnapshot(doc(firestore, 'profile', uid), { includeMetadataChanges: true }, (doc) => {
      console.log({ doc, exists: doc.exists() });
      if (!doc.exists()) {
        return setProfile(null);
      }
      setProfile(doc.data());
    });

    return () => {
      return unsub;
    };
  }, [uid]);

  return profile;
}
