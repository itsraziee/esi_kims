import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'HON. JERRY P. PARADILLO',
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

const POST_SUBTITLES = [
  'Barangay Captain',
  'Barangay Captain',
  'Barangay Captain',
]

const posts = [...Array(23)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: `/static/mock-images/covers/cover_${index + 1}.jpg`,
  title: POST_TITLES[index + 1],
  subtitle: POST_SUBTITLES[index],
  author: {
    name: faker.name.findName(),
    avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  },
}));

export default posts;
