import { addDoc, collection, deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { firestore, storage } from '../firebase-init';

export async function createCommitteeReport(data) {
  return addDoc(collection(firestore, 'committeeReport'), { ...data, createdAt: new Date(), updatedAt: new Date() });
}
export async function uploadCommitteeReportPdf(uid, file) {
  const pdfRef = ref(storage, `committeeReport/${uid}.pdf`);

  return uploadBytes(pdfRef, file);
}
export async function updateCommitteeReportPdf(uid) {
  const committeeReportRef = doc(firestore, `committeeReport/${uid}`);
  const pdfRef = ref(storage, `committeeReport/${uid}.pdf`);
  return getDownloadURL(pdfRef).then((url) => {
    return updateDoc(committeeReportRef, { pdfUrl: url });
  });
}

export function getCommitteeReport(uid) {
  return getDoc(doc(firestore, `committeeReport/${uid}`));
}

export async function deleteCommitteeReport(uid) {
  const committeeReportRef = doc(firestore, `committeeReport/${uid}`);

  return getDoc(committeeReportRef).then((res) => {
    const committeeReportData = res.data();
    console.log({ committeeReportData });

    const pdfRef = ref(storage, committeeReportData.pdfUrl);
    return deleteObject(pdfRef).then(() => {
      return deleteDoc(committeeReportRef);
    });
  });
}

export async function updateCommitteeReport(uid, { committeeReportNumber, series, subject, date, submittedBy }) {
  console.log({ uid, committeeReportNumber, series, subject, date, submittedBy });
  return updateDoc(doc(firestore, `committeeReport/${uid}`), { committeeReportNumber, series, subject, date, submittedBy});
}
