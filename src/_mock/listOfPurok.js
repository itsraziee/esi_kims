import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const PUROK_NUMBER = [
  'PUROK 1',
  'PUROK 2',
  'PUROK 3A',
  'PUROK 3B',
  'PUROK 4',
  'PUROK 5',
  'PUROK 6',
  'PUROK 7',
  'PUROK 8',
  'PUROK 9',
  'PUROK 10A',
  'PUROK 11B',
  'PUROK 12',
  'PUROK 13',
];

const PUROK_NAME = [
    'BRGY. PROPER',
    'BRGY. PROPER',
    'BRGY. PROPER',
    'BRGY. PROPER',
    'BRGY. PROPER',
    'SITIO MALAPINGGAN',
    'SITIO BALANGCAO 2',
    'SITIO BALANGCAO 2',
    'SITIO BALANGCAO 1',
    'SITIO BALANGCAO 1',
    'SITIO PALO',
    'SITIO PALO',
    'SITIO SINILOAN',
    'SITIO KIRAMONG',
];
// ----------------------------------------------------------------------

const puroks = [...Array(14)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: `/static/mock-images/puroks/purok_${setIndex}.png`,
    name: PUROK_NUMBER[index],
    purokname: PUROK_NAME[index],
  };
});

export default puroks;
