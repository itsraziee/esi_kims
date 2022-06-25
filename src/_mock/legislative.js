import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const TITLE = [
    'Ordinance No.12 s. 2012',
    'Ordinance No.12 s. 2012',
    'Ordinance No.12 s. 2012',
    'Ordinance No.12 s. 2012',
    'Ordinance No.12 s. 2012',
    'Ordinance No.12 s. 2012',
    'Ordinance No.12 s. 2012',
    'Ordinance No.12 s. 2012',
    'Ordinance No.12 s. 2012',
    'Ordinance No.12 s. 2012',
];

const YEAR = [
    's. 2012',
    's. 2023',
    's. 2025',
    's. 2025',
    's. 2025',
    's. 2025',
    's. 2025',
    's. 2025',
    's. 2025',
    's. 2025',
];
// ----------------------------------------------------------------------

const legislatives = [...Array(10)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: `/static/mock-images/legislative/legislative_${setIndex}.png`,
    title: TITLE[index],
    year: YEAR[index],
  };
});

export default legislatives;
