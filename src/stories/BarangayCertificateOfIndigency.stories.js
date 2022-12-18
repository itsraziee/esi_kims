import React from 'react';
import { default as BarangayCertificateOfIndigencyComponent } from '../sections/documents/BarangayCertificateOfIndigency';

export default {
  title: 'Documents/Barangay Certificate Of Indigency',
  component: BarangayCertificateOfIndigencyComponent,
};

const Template = (args) => <BarangayCertificateOfIndigencyComponent {...args} />;

export const BarangayCertificateOfIndigency = Template.bind({});
BarangayCertificateOfIndigency.args = {
  name: 'Glenmark Pelarca',
  civilstatus: 'married',
  day: 5,
  month: 'June',
  year: 2022,
  purok: 5,
  bearer: 'Glen Lecaros',
  secretary: 'HAZEL JOY M. MANZAN',
  captain: 'JERRY P. PARADILLO',
};
