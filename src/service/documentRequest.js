import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { firestore } from '../firebase-init';

export function createRequest(type, data, requestorName, amount) {
  return addDoc(collection(firestore, 'documentRequest'), {
    type,
    data,
    status: 'pending',
    requestorName,
    datetime: new Date(),
    amount,
  });
}

export function updateRemarks(uid, remarks) {
  return updateDoc(doc(firestore, `documentRequest/${uid}`), { remarks });
}

export function updateStatus(uid, status) {
  return updateDoc(doc(firestore, `documentRequest/${uid}`), { status });
}

export function getDocumentRequest(referenceNumber) {
  return getDoc(doc(firestore, `documentRequest/${referenceNumber}`));
}
