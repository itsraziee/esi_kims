import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const TITLE = [
  'Covid-19 vaccination schedules',
  'International Integration Associate',
  'District Data Agent',
  'Legacy Factors Liaison',
  'Forward Applications Analyst',
];

const DESCRIPTION = [
  'Kimanait Barangay Hall',
  'National Solutions Agent',
  'Product Integration Specialist',
  'Direct Integration Director',
  'Product Markets Producer',
];

const newsUpdates = [...Array(5)].map((_, index) => {
  return {
    id: faker.datatype.uuid(),
    title: TITLE[index],
    description: DESCRIPTION[index],
    image: `/static/mock-images/covers/cover_${index + 1}.jpg`,
    postedAt: faker.date.recent(),
  };
});

export default newsUpdates;
