import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const TITLE = [
    'Barangay Clearance',
    'Barangay Birth Certification',
    'Barangay Death Certification',
    'Barangay Certification',
    'Certificate of Indigency',
    'Certificate of Residency',
];

// ----------------------------------------------------------------------

const documentServices = [...Array(6)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: `/static/mock-images/document services/ds_${setIndex}.jpg`,
    title: TITLE[index],
  };
});

export default documentServices;
