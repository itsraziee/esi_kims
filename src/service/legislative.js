import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { firestore, storage } from '../firebase-init';

export async function createLegislative(data) {
  return addDoc(collection(firestore, 'legislative'), { ...data, createdAt: new Date(), updatedAt: new Date() });
}
export async function uploadLegislativePdf(uid, file) {
  const pdfRef = ref(storage, `legislative/${uid}.pdf`);

  return uploadBytes(pdfRef, file);
}
export async function updateLegislativePdf(uid) {
  const legislativeRef = doc(firestore, `legislative/${uid}`);
  const pdfRef = ref(storage, `legislative/${uid}.pdf`);
  return getDownloadURL(pdfRef).then((url) => {
    return updateDoc(legislativeRef, { pdfUrl: url });
  });
}

export function getLegislative(uid) {
  return getDoc(doc(firestore, `legislative/${uid}`));
}
