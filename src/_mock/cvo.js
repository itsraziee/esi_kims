import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const NAMES = [
    'NEPTHALIE GUNGOB',
    'ROMEO GABILAN',
    'LAURO OFNGOL',
    'ROLANDO SALDO',
    'JULIE DELA TORRE',
    'YOLANDO TAPALING',
    'ALEX ONGGA',
    'RUFINO PRESORES',
    'ROGER MANZAN',
    'SANTIAGO ECHENIQUE',
    'TIMOTEO NAPARAN JR.',
    'ANALITO AREMALA',
    'FREDIE NAPARAN',
    'GAUDENCIO LIWAT JR.',
    'ALMARIO YPARAGUIRE',
    'RONALD NAPARAN',
    'EUGENE LERION',
    'ARNOLD NAPARAN',
    'ARMANDO DALES',
    'MAMERTO LUMBATAN',
];

const POSITIONS = [
    'Chief Tanod',
    'Auxiliary',
    'Auxiliary',
    'Auxiliary',
];



const cvoposts = [...Array(20)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: `/static/mock-images/cvo/cvo_${index + 1}.jpg`,
  name: NAMES[index],
  position: POSITIONS[index],
  author: {
    name: faker.name.findName(),
    avatarUrl: `/static/mock-images/cvo/cvo_${index + 1}.jpg`,
  },
}));

export default cvoposts;
