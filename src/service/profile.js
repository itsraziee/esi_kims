import { doc, getDoc, setDoc } from 'firebase/firestore';
import { firestore } from '../firebase-init';

export function updateProfile(uid, profileData) {
  console.log({ uid, profileData });
  return setDoc(doc(firestore, `profile/${uid}`), profileData);
}

export async function getProfile(uid) {
  return getDoc(doc(firestore, `profile/${uid}`));
}
