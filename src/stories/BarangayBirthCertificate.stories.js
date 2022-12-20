import React from 'react';
import { default as BarangayBirthCertificateComponent } from '../sections/documents/BarangayBirthCertificate';

export default {
  title: 'Documents/Barangay Birth Certificate',
  component: BarangayBirthCertificateComponent,
};

const Template = (args) => <BarangayBirthCertificateComponent {...args} />;

export const BarangayBirthCertificate = Template.bind({});
BarangayBirthCertificate.args = {
  name: 'John Doe',
  purok: '5',
  nameofchild: 'Stuart Shih',
  sex: 'Cousin',
  dateAndTimeOfBirth: 'October 23, 1997, 10:23 am',
  weight: '29',
  birthorder: 'August',
  death: '2022',
  placeofbirth: 'Kimanait, Pangantucan, Bukidnon',
  nameofmother: 'Jessica Shih',
  mothercitizenship: 'Chinese',
  motheroccupation: 'Businesswoman',
  nameoffather: 'Lance Shih',
  fathercitizenship: 'Chinese',
  fatheroccupation: 'Businessman',
  dateofmarriage: 'October 23, 2017',
  placeofmarriage: 'Beijing, China',
  nameofattendant: 'Jenny Smith',
  addressofattendant: 'London',
  since: '2021',
  namerequest: 'John Doe',
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
