import { addDoc, collection, deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
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

export async function deleteLegislative(uid) {
  const legislativeRef = doc(firestore, `legislative/${uid}`);

  return getDoc(legislativeRef).then((res) => {
    const legislativeData = res.data();
    console.log({ legislativeData });

    const pdfRef = ref(storage, legislativeData.pdfUrl);
    return deleteObject(pdfRef).then(() => {
      return deleteDoc(legislativeRef);
    });
  });
}

export async function updateLegislative(uid, { ordinanceNumber, series, title, authors }) {
  console.log({ uid, ordinanceNumber, series, title, authors });
  return updateDoc(doc(firestore, `legislative/${uid}`), { ordinanceNumber, series, title, authors });
}
