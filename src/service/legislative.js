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

export function solveLegislative(uid, checked) {
  const LegislativeRef = doc(firestore, `legislative/${uid}`);

  if (checked) {
    return updateDoc(LegislativeRef, { caseType: 'solved' });
  }
  return updateDoc(LegislativeRef, { caseType: 'unsolved' });
}

export async function deleteLegislative(uid) {
  const legislativeRef = doc(firestore, `legislative/${uid}`);

  return getDoc(legislativeRef).then((res) => {
    const legislativeData = res.data();
    console.log({ legislativeData });

    const pdfRef = ref(storage, legislativeData.pdfURL);
    return deleteObject(pdfRef).then(() => {
      return deleteDoc(legislativeRef);
    });
  });
}

export async function updateLegislative(uid, { caseNumber, caseType }) {
  console.log({ uid, caseNumber, caseType });
  return updateDoc(doc(firestore, `legislative/${uid}`), { caseNumber, caseType });
}
