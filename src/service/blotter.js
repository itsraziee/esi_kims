import { addDoc, collection } from 'firebase/firestore';
import { firestore } from '../firebase-init';

export function createBlotter(caseNumber, caseType) {
  return addDoc(collection(firestore, 'blotter'), { caseNumber, caseType });
}
