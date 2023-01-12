import { addDoc, collection,  doc, getDoc, updateDoc } from 'firebase/firestore';
import { firestore, storage } from '../firebase-init';

export async function createFeedback(data) {
  return addDoc(collection(firestore, 'feedback'), { ...data, createdAt: new Date(), updatedAt: new Date() });
}

export function getFeedback(uid) {
  return getDoc(doc(firestore, `feedback/${uid}`));
}
