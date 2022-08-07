import React, { Component } from 'react';
import { default as BarangayTreePlantingCertificateComponent } from '../sections/documents/BarangayTreePlantingCertificate';

export default {
  title: 'Documents/Barangay TreePlanting Certificate',
  component: BarangayTreePlantingCertificateComponent,
};

const Template = (args) => <BarangayTreePlantingCertificateComponent {...args} />;

export const BarangayTreePlantingCertificate = Template.bind({});
BarangayTreePlantingCertificate.args = {
  name: 'Glenmark Pelarca',
  day: 5,
  month: 'June',
  year: 2022,
  age: 21,
  purok: 'Purok 5',
  ctc: '89329273',
  date: '05/03/2021',
  bearer: 'Glen Lecaros',
  secretary: 'HAZEL JOY M. MANZAN',
  captain: 'JERRY P. PARADILLO',
};
