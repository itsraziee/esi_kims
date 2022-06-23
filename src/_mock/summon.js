import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const TITLE = [
    'Unresolved Case',
    'Solved Case',
];


// ----------------------------------------------------------------------

const summons = [...Array(2)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: `/static/mock-images/summon/summon_${setIndex}.png`,
    title: TITLE[index],
  };
});

export default summons;
