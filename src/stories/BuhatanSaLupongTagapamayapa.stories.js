import React from 'react';
import { default as BuhatanSaLupongTagapamayapaComponent } from '../sections/documents/BuhatanSaLupongTagapamayapa';

export default {
  title: 'Documents/Buhatan Sa Lupong Tagapamayapa',
  component: BuhatanSaLupongTagapamayapaComponent,
};

const Template = (args) => <BuhatanSaLupongTagapamayapaComponent {...args} />;

export const BuhatansaLupongTagapamayapa = Template.bind({});
BuhatansaLupongTagapamayapa.args = {
  nagsumbong: 'Glenmark',
  sinumbong: 'Jessel',
  casenumber: '101',
  about: 'theft',
  ngadtokang: 'Glen',
  date: '12',
  month: 'August',
  year: '2022',
  time: '3pm',
  day1: '22',
  month1: 'August',
  year1: '2022',
  captain: 'JERRY P. PARADILLO',
};
