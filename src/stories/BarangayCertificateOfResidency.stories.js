import React, { Component } from 'react';
import { default as BarangayCertificateOfResidencyComponent } from '../sections/documents/BarangayCertificateOfResidency';

export default {
  title: 'Documents/Barangay Certificate Of Residency',
  component: BarangayCertificateOfResidencyComponent,
};

const Template = (args) => <BarangayCertificateOfResidencyComponent {...args} />;

export const BarangayCertificateOfResidency = Template.bind({});
BarangayCertificateOfResidency.args = {
  citizenship: 'Filipino',
  name: 'Lance Luy',
  day: 23,
  month: 'October',
  year: 2022,
  purok: 'Purok 5',
  bearer: 'Lance Luy',
  secretary: 'HAZEL JOY M. MANZAN',
  captain: 'JERRY P. PARADILLO',
};
