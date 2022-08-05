import React from 'react';
import { default as BarangayBirthCertificateComponent } from '../sections/documents/BarangayBirthCertificate';

export default {
  title: 'Documents/Barangay Birth Certificate',
  component: BarangayBirthCertificateComponent,
};

const Template = (args) => <BarangayBirthCertificateComponent {...args} />;

export const BarangayBirthCertificate = Template.bind({});
BarangayBirthCertificate.args = {
  name: 'Glenamark',
  purok: '5',
  nameofchild: 'Glenmark Pelarca',
  sex: 'Cousin',
  dateofbirth: 'Balangcao',
  weight: '29',
  birthorder: 'August',
  death: '2022',
  placeofbirth: 'HAZEL JOY M. MANZAN',
  nameofmother: 'JERRY P. PARADILLO',
  mothercitizenship: 'Tampulano Tampulana',
  motheroccupation: '45 St. Fallen',
  nameoffather: 'July 05, 1320',
  fathercitizenship: 'June 20, 2000',
  fatheroccupation: '90',
  dateofmarriage: 'Ghosting',
  placeofmarriage: 'New York',
  nameofattendant: 'Married',
  addressofattendant: 'London',
  since: '2021',
  namerequest: 'Glenmark',
  day: '3',
  month: 'June',
  year: '2022',
  or: '32343123',
  dateissued: '09/88/54',
  placeissued: 'Kimanait',
  captain: 'JERRY P. PARADILLO',
  secretary: 'HAZEL JOY P. MANZAN',
  amountpaid: '50.00',
};
