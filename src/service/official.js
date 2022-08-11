import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { firestore, storage } from '../firebase-init';

export async function createOfficial({
  firstName,
  middleName,
  lastName,
  age,
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

export async function uploadOfficialPhoto(file) {
  console.log({ file });
  const filenameSegments = file.name.split('.');
  console.log({ filenameSegments });
  const filenameExtension = filenameSegments[filenameSegments.length - 1];
  console.log({ filenameExtension });

  const storageRef = ref(storage, `official/${uuidv4()}.${filenameExtension}`);

  return uploadBytes(storageRef, file);
}
