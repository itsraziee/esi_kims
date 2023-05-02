import { addDoc, collection, deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
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

export async function deleteNews(uid) {
  const newsRef = doc(firestore, `news/${uid}`);

  return getDoc(newsRef).then(async (res) => {
    const newsData = res.data();
    console.log({ newsData });

    const pdfRef = ref(storage, newsData.pdfUrl);
    await deleteObject(pdfRef).catch((err) => {
      console.error(err);
    });

    const imageRef = ref(storage, newsData.imageUrl);
    await deleteObject(imageRef).catch((err) => {
      console.error(err);
    });

    return deleteDoc(newsRef);
  });
}

export async function updateNews(uid, { title, description }) {
  console.log({ uid, title, description });
  return updateDoc(doc(firestore, `news/${uid}`), { title, description });
}
