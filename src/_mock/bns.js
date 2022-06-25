import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const NAMES = [
    'PHOEBE B. ALBEOS',
    'MERLINDA A. BORDAJE',
];

const bnsposts = [...Array(2)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: `/static/mock-images/bns/bns_${index + 1}.jpg`,
  name: NAMES[index],
  author: {
    name: faker.name.findName(),
    avatarUrl: `/static/mock-images/bns/bns_${index + 1}.jpg`,
  },
}));

export default bnsposts;
