import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const NAMES = [
    'CRISANTA NAPARAN',
    'LEONARDA TEODORO',
    'JOSEPHINE TALUN-OD',
    'ESTRELLA NAPARAN',
    'HELEN LLANTO',
    'JEAN NAMANTUCAN',
    'JEROME CASANGO-AN',
    'ROSENDA CODEROS',
    'LIEZEL NAPARAN',
];

const bspoposts = [...Array(9)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  name: NAMES[index],
  author: {
    name: faker.name.findName(),
    avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  },
}));

export default bspoposts;
