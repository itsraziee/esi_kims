import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const TITLE = [
    'Unresolved Case',
    'Solved Case',
];




// ----------------------------------------------------------------------

const blotters = [...Array(2)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: `/static/mock-images/blotter/blotter_${setIndex}.png`,
    title: TITLE[index],
  };
});

export default blotters;
