import { addDoc, collection, deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { firestore, storage } from '../firebase-init';

export async function createSummon(caseNumber, caseType) {
  return addDoc(collection(firestore, 'summon'), { caseNumber, caseType });
}

export async function uploadSummonPdf(uid, file) {
  console.log({ path: `summon/${uid}.pdf`, file });
  const summonPdfRef = ref(storage, `summon/${uid}.pdf`);
  return uploadBytes(summonPdfRef, file);
}

export async function updatePdfURL(uid, pdfRef) {
  const summonRef = doc(firestore, `summon/${uid}`);
  return getDownloadURL(pdfRef).then((pdfURL) => {
    return updateDoc(summonRef, { pdfURL });
  });
}

export function getSummon(uid) {
  return getDoc(doc(firestore, `summon/${uid}`));
}

export function solveSummon(uid, checked) {
  const summonRef = doc(firestore, `summon/${uid}`);

  if (checked) {
    return updateDoc(summonRef, { caseType: 'solved' });
  }
  return updateDoc(summonRef, { caseType: 'unsolved' });
}

export async function deleteSummon(summonUid) {
  const summonRef = doc(firestore, `summon/${summonUid}`);

  return getDoc(summonRef).then((res) => {
    const summonData = res.data();
    console.log({ summonData });

    const pdfRef = ref(storage, summonData.pdfURL);
    return deleteObject(pdfRef).then(() => {
      return deleteDoc(summonRef);
    });
  });
}

export async function updateSummon(uid, { caseNumber, caseType }) {
  console.log({ uid, caseNumber, caseType });
  return updateDoc(doc(firestore, `summon/${uid}`), { caseNumber, caseType });
}
