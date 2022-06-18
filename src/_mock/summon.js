import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const TITLE = [
    'TEST1',
    'TEST2',
    'TEST3',
];

const YEAR = [
    '2012',
    '2023',
    '2025',
];
// ----------------------------------------------------------------------

const summons = [...Array(3)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: `/static/mock-images/products/product_${setIndex}.jpg`,
    title: TITLE[index],
    year: YEAR[index],
  };
});

export default summons;
