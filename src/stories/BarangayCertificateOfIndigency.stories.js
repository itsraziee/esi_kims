import React from 'react';
import { default as BarangayCertificateOfIndigencyComponent } from '../sections/documents/BarangayCertificateOfIndigency';

export default {
  title: 'Documents/Barangay Certificate Of Indigency',
  component: BarangayCertificateOfIndigencyComponent,
};

const Template = (args) => <BarangayCertificateOfIndigencyComponent {...args} />;

export const BarangayCertificateOfIndigency = Template.bind({});
BarangayCertificateOfIndigency.args = {
  name: 'Lance Luy',
  civilStatus: 'single',
  day: 23,
  month: 'October',
  year: 2022,
  purok: 5,
  bearer: 'Lance Luy',
  secretary: 'HAZEL JOY M. MANZAN',
  captain: 'JERRY P. PARADILLO',
};
