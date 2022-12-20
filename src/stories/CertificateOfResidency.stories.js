import React, { Component } from 'react';
import { default as CertificateOfResidencyComponent } from '../sections/documents/BarangayCertificateOfResidency';

export default {
  title: 'Documents/Certificate Of Residency',
  component: CertificateOfResidencyComponent,
};

const Template = (args) => <CertificateOfResidencyComponent {...args} />;

export const CertificateOfResidency = Template.bind({});
CertificateOfResidency.args = {
  fullName: 'Lance Luy',
  day: 23,
  month: 'October',
  year: 2022,
  purok: 'Purok 5',
  bearer: 'Lance Luy',
  secretary: 'HAZEL JOY P. MANZAN',
  captain: 'JERRY P. PARADILLO',
};
