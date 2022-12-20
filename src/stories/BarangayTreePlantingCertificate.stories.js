import React, { Component } from 'react';
import { default as BarangayTreePlantingCertificateComponent } from '../sections/documents/BarangayTreePlantingCertificate';

export default {
  title: 'Documents/Barangay TreePlanting Certificate',
  component: BarangayTreePlantingCertificateComponent,
};

const Template = (args) => <BarangayTreePlantingCertificateComponent {...args} />;

export const BarangayTreePlantingCertificate = Template.bind({});
BarangayTreePlantingCertificate.args = {
  name: 'Lance Luy',
  day: 23,
  month: 'October',
  year: 2022,
  age: 25,
  citizenship: 'Chinese',
  purok: 'Purok 5',
  ctc: '89329273',
  date: '05/03/2021',
  bearer: 'Lance Luy',
  secretary: 'HAZEL JOY M. MANZAN',
  captain: 'JERRY P. PARADILLO',
};
