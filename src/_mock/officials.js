import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const NAMES = [
  'HON. JERRY P. PARADILLO',
  'HON. ALEX P. COQUILLA',
  'HON. ANNABELLE F. CANTONAO',
  'HON. BARTOLOME D. SABADO JR.',
  'HON. MELY F. AMANDORON',
  'HON. EDWIN T. MAAGAD',
  'HON. ALMAR C. ALBEOS',
  'HON. WILSON B. GARCIA',
  'HON. MARVEN T. SAGANDILAN',
  'HON. CASTILLO L. DAGNO',
  'HAZEL JOY M. MANZAN',
  'REGINA F. CANTONAO',
  'JESSA T. PARADILLO',
];

const POSITIONS = [
  'Punong Barangay',
  'Barangay Kagawad',
  'Barangay Kagawad',
  'Barangay Kagawad',
  'Barangay Kagawad',
  'Barangay Kagawad',
  'Barangay Kagawad',
  'Barangay Kagawad',
  'SK Chairman',
  'IP Mandatory Representative',
  'Barangay Secretary',
  'Barangay Treasurer',
  'Barangay Record Keeper',
];



const posts = [...Array(13)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  name: NAMES[index],
  position: POSITIONS[index],
  author: {
    name: faker.name.findName(),
    avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  },
}));

export default posts;
