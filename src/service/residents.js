import { addDoc, collection } from 'firebase/firestore';
import { firestore } from '../firebase-init';

export async function createResident({
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
  purok,
  occupation,
  phoneNumber,
  religion,
  sex,
  spouse,
  status,
  tribe,
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
    tribe,
    purok,
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
  return addDoc(collection(firestore, 'resident'), {
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
    tribe,
    purok,
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
