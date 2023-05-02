import { addDoc, collection, deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { deleteObject, ref, uploadBytes } from 'firebase/storage';
import { firestore, storage } from '../firebase-init';

export async function createOfficial({
  firstName,
  middleName,
  lastName,
  age,
  title,
  officialAddress,
  dateOfBirth,
  citizenship,
  civilStatus,
  fathersName,
  mothersName,
  numberOfChildren,
  occupation,
  phoneNumber,
  religion,
  sex,
  spouse,
  status,
  position,
  uploadImage = '',
  weight,
  height,
  collegeAddress,
  collegeSchool,
  collegeYearGrad,
  elementaryAddress,
  elementarySchool,
  elementaryYearGrad,
  fathersAddress,
  fathersOccupation,
  highschoolAddress,
  highschoolName,
  highschoolYearGrad,
  mothersAddress,
  mothersOccupation,
  spouseAddress,
  vocationalAddress,
  vocationalSchool,
  vocationalYearGrad,
}) {
  console.log({
    firstName,
    middleName,
    lastName,
    age,
    title,
    officialAddress,
    dateOfBirth,
    citizenship,
    civilStatus,
    fathersName,
    mothersName,
    numberOfChildren,
    occupation,
    phoneNumber,
    religion,
    sex,
    spouse,
    status,
    position,
    uploadImage,
    weight,
    height,
    collegeAddress,
    collegeSchool,
    collegeYearGrad,
    elementaryAddress,
    elementarySchool,
    elementaryYearGrad,
    fathersAddress,
    fathersOccupation,
    highschoolAddress,
    highschoolName,
    highschoolYearGrad,
    mothersAddress,
    mothersOccupation,
    spouseAddress,
    vocationalAddress,
    vocationalSchool,
    vocationalYearGrad,
  });
  return addDoc(collection(firestore, 'official'), {
    firstName,
    middleName,
    lastName,
    age,
    title,
    officialAddress,
    dateOfBirth,
    citizenship,
    civilStatus,
    fathersName,
    mothersName,
    numberOfChildren,
    occupation,
    phoneNumber,
    religion,
    sex,
    spouse,
    status,
    position,
    uploadImage,
    weight,
    height,
    collegeAddress,
    collegeSchool,
    collegeYearGrad,
    elementaryAddress,
    elementarySchool,
    elementaryYearGrad,
    fathersAddress,
    fathersOccupation,
    highschoolAddress,
    highschoolName,
    highschoolYearGrad,
    mothersAddress,
    mothersOccupation,
    spouseAddress,
    vocationalAddress,
    vocationalSchool,
    vocationalYearGrad,
  }).then((res) => {
    console.log({ res });
    return res;
  });
}

export async function updateOfficial(
  {
    firstName,
    middleName,
    lastName,
    age,
    title,
    officialAddress,
    dateOfBirth,
    citizenship,
    civilStatus,
    fathersName,
    mothersName,
    numberOfChildren,
    occupation,
    phoneNumber,
    religion,
    sex,
    spouse,
    status,
    position,
    uploadImage = '',
    weight,
    height,
    collegeAddress,
    collegeSchool,
    collegeYearGrad,
    elementaryAddress,
    elementarySchool,
    elementaryYearGrad,
    fathersAddress,
    fathersOccupation,
    highschoolAddress,
    highschoolName,
    highschoolYearGrad,
    mothersAddress,
    mothersOccupation,
    spouseAddress,
    vocationalAddress,
    vocationalSchool,
    vocationalYearGrad,
  },
  uid
) {
  console.log({
    firstName,
    middleName,
    lastName,
    age,
    title,
    officialAddress,
    dateOfBirth,
    citizenship,
    civilStatus,
    fathersName,
    mothersName,
    numberOfChildren,
    occupation,
    phoneNumber,
    religion,
    sex,
    spouse,
    status,
    position,
    uploadImage,
    weight,
    height,
    collegeAddress,
    collegeSchool,
    collegeYearGrad,
    elementaryAddress,
    elementarySchool,
    elementaryYearGrad,
    fathersAddress,
    fathersOccupation,
    highschoolAddress,
    highschoolName,
    highschoolYearGrad,
    mothersAddress,
    mothersOccupation,
    spouseAddress,
    vocationalAddress,
    vocationalSchool,
    vocationalYearGrad,
  });
  return updateDoc(doc(firestore, `official/${uid}`), {
    firstName,
    middleName,
    lastName,
    age,
    title,
    officialAddress,
    dateOfBirth,
    citizenship,
    civilStatus,
    fathersName,
    mothersName,
    numberOfChildren,
    occupation,
    phoneNumber,
    religion,
    sex,
    spouse,
    status,
    position,
    uploadImage,
    weight,
    height,
    collegeAddress,
    collegeSchool,
    collegeYearGrad,
    elementaryAddress,
    elementarySchool,
    elementaryYearGrad,
    fathersAddress,
    fathersOccupation,
    highschoolAddress,
    highschoolName,
    highschoolYearGrad,
    mothersAddress,
    mothersOccupation,
    spouseAddress,
    vocationalAddress,
    vocationalSchool,
    vocationalYearGrad,
  }).then((res) => {
    console.log({ res });
    return res;
  });
}

export function updateOfficialImage(uid, url) {
  const officialDoc = doc(firestore, `official/${uid}`);
  return updateDoc(officialDoc, { uploadImage: url });
}

export async function uploadOfficialPhoto(file, uid) {
  console.log({ file });
  const filenameSegments = file.name.split('.');
  console.log({ filenameSegments });
  const filenameExtension = filenameSegments[filenameSegments.length - 1];
  console.log({ filenameExtension });

  const storageRef = ref(storage, `official/${uid}.${filenameExtension}`);

  return uploadBytes(storageRef, file);
}

export async function getOfficialData(uid) {
  return getDoc(doc(firestore, `official/${uid}`));
}

export async function deleteOfficial(officialUid) {
  const officialRef = doc(firestore, `official/${officialUid}`);

  return getDoc(officialRef).then((res) => {
    const officialData = res.data();
    console.log({ officialData });

    const imageRef = ref(storage, officialData.uploadImage);
    try {
      return deleteObject(imageRef).then(() => deleteDoc(officialRef));
    } catch (err) {
      console.error({ err });
      return deleteDoc(officialRef);
    }
  });
}
