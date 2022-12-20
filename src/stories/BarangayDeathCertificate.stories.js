import React from 'react';
import { default as BarangayDeathCertificateComponent } from '../sections/documents/BarangayDeathCertificate';

export default {
  title: 'Documents/Barangay Death Certificate',
  component: BarangayDeathCertificateComponent,
};

const Template = (args) => <BarangayDeathCertificateComponent {...args} />;

export const BarangayDeathCertificate = Template.bind({});
BarangayDeathCertificate.args = {
  name: 'Lance Luy',
  relationship: 'Cousin',
  residence: 'Balangcao',
  day: 29,
  month: 'August',
  year: 2022,
  punongbarangay: 'JERRY P. PARADILLO',
  deceasedname: 'Juan Dela Cruz',
  placeofdeath: 'Cagayan De Oro City',
  dateofbirth: 'July 05, 1320',
  dateofdeath: 'June 20, 2000',
  age: '90',
  causeofdeath: 'Ghosting',
  address: 'New York',
  civilstatus: 'Married',
  placeburried: 'London',
  religion: 'Catholic',
  occupation: 'Instructor',
  nameoffather: 'Sean Luy',
  maidennameofmother: 'Jessica Luy',
  captain: 'JERRY P. PARADILLO',
  secretary: 'HAZEL JOY M. MANZAN',
  purok: 5,
  requestorName: 'John Doe',
};
