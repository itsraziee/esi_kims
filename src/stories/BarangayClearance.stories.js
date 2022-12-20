import React, { Component } from 'react';
import { default as BarangayClearanceComponent } from '../sections/documents/BarangayClearance';

export default {
  title: 'Documents/Barangay Clearance',
  component: BarangayClearanceComponent,
};

const Template = (args) => <BarangayClearanceComponent {...args} />;

export const BarangayClearance = Template.bind({});
BarangayClearance.args = {
  fileNo: '2022-1110',
  day: '23',
  month: 'October',
  year: '2022',
  description: 'NO DEROGATORY OR CRIMINAL RECORD and HAS GOOD MORAL AND GOOD REPUTATION as per record of this office',
  firstname: 'Lance',
  middlename: 'Lao',
  lastname: 'Luy',
  suffix: 'N/A',
  address: 'P-1 Kimanait, Pangantucan, Bukidnon',
  citizenship: 'Chinese',
  sex: 'MALE',
  age: '25 Years Old',
  religion: 'Buddhism',
  civilstatus: 'Single',
  birthday: '23',
  birthmonth: 'October',
  birthyear: '1997',
  placeofbirth: 'Capitol University Medical Center, Cagayan De Oro City, Misamis Oriental, Philippines',
  height: "5'3",
  weight: '45kg',
  valday: '1',
  valmonth: 'July',
  valyear: '2023',
  purpose: 'Scholarship',
  resCertNo: '26896461',
  placeIssued: 'KIMANAIT, PANG., BUK.',
  punongbarangay: 'HON. JERRY P. PARADILLO',
  barangayKagawad: 'HON. JESSEL MARIE L. PELARCA',
};
