import React from 'react';
import { default as BarangayDeathCertificateComponent } from '../sections/documents/BarangayDeathCertificate';

export default {
  title: 'Documents/Barangay Death Certificate',
  component: BarangayDeathCertificateComponent,
};

const Template = (args) => <BarangayDeathCertificateComponent {...args} />;

export const BarangayDeathCertificate = Template.bind({});
BarangayDeathCertificate.args = {
  name: 'Glenmark Pelarca',
  relationship: 'Cousin',
  residence: 'Balangcao',
  day: 29,
  month: 'August',
  year: 2022,
  secretary: 'HAZEL JOY M. MANZAN',
  punongbarnagay: 'JERRY P. PARADILLO',
  deceasedname: 'Tampulano Tampulana',
  placeofdeath: '45 St. Fallen',
  dateofbirth: 'July 05, 1320',
  dateofdeath: 'June 20, 2000',
  age: '90',
  causeofdeath: 'Ghosting',
  address: 'New York',
  civilstatus: 'Married',
  placeburried: 'London',
  religion: 'Catholic',
  occupation: 'Instructor',
  nameoffather: 'Shello',
  maiden: 'Indian',
  captain: 'JERRY P. PARADILLO',
  barangay: 'Punong Barangay',
  secretary: 'HAZEL JOY P. MANZAN',
  sec: 'Secretary',
};
