import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { firestore, storage } from '../firebase-init';

export function createRequest(type, data, requestorName, number, amount) {
  return addDoc(collection(firestore, 'documentRequest'), {
    type,
    data,
    status: 'pending',
    requestorName,
    number,
    datetime: new Date(),
    amount,
  });
}

export function updateSecretaryRemarks(uid, secretaryRemarks) {
  return updateDoc(doc(firestore, `documentRequest/${uid}`), { secretaryRemarks });
}

export function updateTreasurerRemarks(uid, treasurerRemarks) {
  return updateDoc(doc(firestore, `documentRequest/${uid}`), { treasurerRemarks });
}

export function updateAmount(uid, amount) {
  return updateDoc(doc(firestore, `documentRequest/${uid}`), { amount });
}

export function updateStatus(uid, status) {
  return updateDoc(doc(firestore, `documentRequest/${uid}`), { status });
}

export function getDocumentRequest(referenceNumber) {
  return getDoc(doc(firestore, `documentRequest/${referenceNumber}`));
}

export async function uploadRequirements(files, uid, index = 0) {
  console.log({ files, uid, index });
  const file = files[index].file;
  console.log({ file });
  const requirementRef = ref(storage, `requirements/${uid}/${file.name}`);
  return uploadBytes(requirementRef, file)
    .then((res) => {
      if (index < files.length - 1) {
        return uploadRequirements(files, uid, index + 1);
      }
    })
    .catch((err) => console.log({ err }));
}

export async function getRequirementsUrl(filenames, uid, urls = [], index = 0) {
  if (index > filenames.length - 1) {
    return urls;
  }

  console.log({ filenames, uid, urls, index });

  const filename = filenames[index];
  const requirementRef = ref(storage, `requirements/${uid}/${filename}`);

  return getDownloadURL(requirementRef)
    .then((url) => {
      return getRequirementsUrl(filenames, uid, [...urls, { filename, url }], index + 1);
    })
    .catch((err) => {
      console.log(err);
    });
}

export function updateRequestRequirements(uid, urls) {
  const requestRef = doc(firestore, `documentRequest/${uid}`);

  return updateDoc(requestRef, { urls });
}
