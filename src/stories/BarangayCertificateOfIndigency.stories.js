import React, { Component } from 'react';
import { default as BarangayCertificateOfIndigencyComponent } from '../sections/documents/BarangayCertificateOfIndigency';

export default {
  title: 'Documents/Barangay Certificate Of Indigency',
  component: BarangayCertificateOfIndigencyComponent,
};

const Template = (args) => <BarangayCertificateOfIndigencyComponent {...args} />;

export const BarangayCertificateOfIndigency = Template.bind({});
BarangayCertificateOfIndigency.args = {
  name: 'Glenmark Pelarca',
  day: 5,
  month: 'June',
  year: 2022,
  purok: 'Purok 5',
  bearer: 'Glen Lecaros',
  secretary: 'HAZEL JOY P. MANZAN',
  captain: 'JERRY P. PARADILLO',
};
