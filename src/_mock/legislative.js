import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const TITLE = [
    'TEST1',
    'TEST2',
    'TEST3',
    'TEST4',
    'TEST5',
    'TEST6',
    'TEST7',
    'TEST8',
    'TEST9',
    'TEST10',
];

const YEAR = [
    '2012',
    '2023',
    '2025',
    '2025',
    '2025',
    '2025',
    '2025',
    '2025',
    '2025',
    '2025',
];
// ----------------------------------------------------------------------

const legislatives = [...Array(10)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: `/static/mock-images/legislative/legislative_${setIndex}.jpg`,
    title: TITLE[index],
    year: YEAR[index],
  };
});

export default legislatives;
