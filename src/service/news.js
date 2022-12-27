import { addDoc, collection, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { firestore, storage } from '../firebase-init';

export async function createNews({ title, description }) {
  return addDoc(collection(firestore, 'news'), { title, description, createdAt: new Date(), updatedAt: new Date() });
}

export async function updateNewsPdfUrl(ref, pdfUrl) {
  return updateDoc(ref, { pdfUrl });
}

export async function getNewsPdfUrl(pdfRef) {
  return getDownloadURL(pdfRef);
}

export async function uploadNewsPdf(file, uid) {
  console.log({ file });
  const requirementRef = ref(storage, `newsPdf/${uid}/${file.name}`);
  return uploadBytes(requirementRef, file);
}

export async function updateNewsImageUrl(ref, imageUrl) {
  return updateDoc(ref, { imageUrl });
}

export async function getNewsImageUrl(imageRef) {
  return getDownloadURL(imageRef);
}

export async function uploadNewsImage(file, uid) {
  console.log({ file });
  const requirementRef = ref(storage, `newsPdf/${uid}/${file.name}`);
  return uploadBytes(requirementRef, file);
}
