import React, { Component } from 'react';
import { default as BarangayCertificateOfResidencyComponent } from '../sections/documents/BarangayCertificateOfResidency';

export default {
  title: 'Documents/Barangay Certificate Of Residency',
  component: BarangayCertificateOfResidencyComponent,
};

const Template = (args) => <BarangayCertificateOfResidencyComponent {...args} />;

export const BarangayCertificateOfResidency = Template.bind({});
BarangayCertificateOfResidency.args = {
  name: 'Glenmark Pelarca',
  day: 5,
  citizenship: 'Filipino',
  month: 'June',
  year: 2022,
  purok: 'Purok 5',
  bearer: 'Glen Lecaros',
  secretary: 'HAZEL JOY M. MANZAN',
  captain: 'JERRY P. PARADILLO',
};
