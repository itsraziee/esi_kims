import { addDoc, collection, deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { firestore, storage } from '../firebase-init';

export async function createDisclosureBoard(data) {
  return addDoc(collection(firestore, 'disclosureBoard'), { ...data, createdAt: new Date(), updatedAt: new Date() });
}
export async function uploadDisclosureBoardPdf(uid, file) {
  const pdfRef = ref(storage, `disclosureBoard/${uid}.pdf`);

  return uploadBytes(pdfRef, file);
}
export async function updateDisclosureBoardPdf(uid) {
  const disclosureBoardRef = doc(firestore, `disclosureBoard/${uid}`);
  const pdfRef = ref(storage, `disclosureBoard/${uid}.pdf`);
  return getDownloadURL(pdfRef).then((url) => {
    return updateDoc(disclosureBoardRef, { pdfUrl: url });
  });
}

export function getDisclosureBoard(uid) {
  return getDoc(doc(firestore, `disclosureBoard/${uid}`));
}

export async function deleteDisclosureBoard(uid) {
  const disclosureBoardRef = doc(firestore, `disclosureBoard/${uid}`);

  return getDoc(disclosureBoardRef).then((res) => {
    const disclosureBoardData = res.data();
    console.log({ disclosureBoardData });

    const pdfRef = ref(storage, disclosureBoardData.pdfUrl);
    return deleteObject(pdfRef).then(() => {
      return deleteDoc(disclosureBoardRef);
    });
  });
}

export async function updateDisclosureBoard(uid, { title }) {
  console.log({ uid, title });
  return updateDoc(doc(firestore, `disclosureBoard/${uid}`), { title });
}
