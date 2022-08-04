import { addDoc, collection } from 'firebase/firestore';
import { firestore } from '../firebase-init';

export function createRequest(type, data) {
  return addDoc(collection(firestore, 'documentRequest'), { type, data });
}
