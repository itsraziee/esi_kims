import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
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
