import React, { Component } from 'react';
import { default as CertificateOfIndigencyComponent } from '../sections/documents/BarangayCertificateOfIndigency';

export default {
  title: 'Documents/Certificate Of Indigency',
  component: CertificateOfIndigencyComponent,
};

const Template = (args) => <CertificateOfIndigencyComponent {...args} />;

export const CertificateOfIndigency = Template.bind({});
CertificateOfIndigency.args = {
  fullName: 'Glenmark Pelarca',
  civilstatus:'married',
  day: 5,
  month: 'June',
  year: 2022,
  purok: 'Purok 5',
  bearer: 'Glen Lecaros',
  secretary: 'HAZEL JOY P. MANZAN',
  captain: 'JERRY P. PARADILLO',
};
