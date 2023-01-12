import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import moment from 'moment';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { firestore } from '../firebase-init';
import { useAuth } from '../hooks/useAuth';

export default function DocumentRequestNotification({ children }) {
  const [notifDate, setNotifDate] = useState(moment().subtract(1, 'minute').toDate());
  const [lastRequest, setLastRequest] = useState();
  const { enqueueSnackbar } = useSnackbar();
  const user = useAuth();

  useEffect(() => {
    const q = query(collection(firestore, 'requestNotifications'), orderBy('datetime', 'desc'), limit(1));

    let subscribe = true;

    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = { id: doc.id, ...doc.data() };

        if (subscribe) {
          setLastRequest(data);
        }
      });
    });

    return () => {
      subscribe = false;
    };
  }, [notifDate]);

  useEffect(() => {
    if (!lastRequest) return;

    console.log({ lastRequest });
    if (!user) return;
    enqueueSnackbar(lastRequest.description, { variant: 'success' });
  }, [lastRequest]);

  return <>{children}</>;
}
