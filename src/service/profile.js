import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { firestore, storage } from '../firebase-init';

export function updateProfile(uid, profileData) {
  console.log({ uid, profileData });
  return updateDoc(doc(firestore, `profile/${uid}`), profileData);
}

export async function getProfile(uid) {
  return getDoc(doc(firestore, `profile/${uid}`));
}

export async function uploadProfilePicture(uid, file) {
  const segments = file.name.split('.');
  const extension = segments[segments.length - 1];
  const profileRef = ref(storage, `profiles/${uid}.${extension}`);

  return uploadBytes(profileRef, file);
}

export async function updateProfilePicture(uid, file) {
  const segments = file.name.split('.');
  const extension = segments[segments.length - 1];

  const profilePicRef = ref(storage, `profiles/${uid}.${extension}`);
  return getDownloadURL(profilePicRef).then((url) => {
    const profileRef = doc(firestore, `profile/${uid}`);
    return updateDoc(profileRef, { photoURL: url });
  });
}
