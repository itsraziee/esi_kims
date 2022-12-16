import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { firestore, storage } from '../firebase-init';

export async function createBlotter(caseNumber, caseType) {
  return addDoc(collection(firestore, 'blotter'), { caseNumber, caseType });
}

export async function uploadBlotterPdf(uid, file) {
  console.log({ path: `blotter/${uid}.pdf`, file });
  const blotterPdfRef = ref(storage, `blotter/${uid}.pdf`);
  return uploadBytes(blotterPdfRef, file);
}

export async function updatePdfURL(uid, pdfRef) {
  const blotterRef = doc(firestore, `blotter/${uid}`);
  return getDownloadURL(pdfRef).then((pdfURL) => {
    return updateDoc(blotterRef, { pdfURL });
  });
}

export function getBlotter(uid) {
  return getDoc(doc(firestore, `blotter/${uid}`));
}

export function solveBlotter(uid, checked) {
  const blotterRef = doc(firestore, `blotter/${uid}`);

  if (checked) {
    return updateDoc(blotterRef, { caseType: 'solved' });
  }
  return updateDoc(blotterRef, { caseType: 'unsolved' });
}
