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
  day: '7',
  month: 'Feb',
  year: '2022',
  description: 'NO DEROGATORY OR CRIMINAL RECORD and HAS GOOD MORAL AND GOOD REPUTATION as per record of this office',
  firstname: 'GLENMARK',
  middlename: 'TUNDAG',
  lastname: 'ARTIAGA',
  suffix: 'N/A',
  address: 'P-1 Kimanait, Pangantucan, Bukidnon',
  citizenship: 'FILIPINO',
  sex: 'MALE',
  age: '21 Years Old',
  religion: 'Roman Catholic',
  civilstatus: 'Single',
  birthday: '5',
  birthmonth: 'May',
  birthyear: '2001',
  placeofbirth: 'Kimananit, Pangantucan, Bukidnon',
  height: "5'3",
  weight: '45kg',
  valday: '1',
  valmonth: 'July',
  valyear: '2023',
  purpose: 'Requirement to Board Examination',
  resCertNo: '26896461',
  placeIssued: 'KIMANAIT, PANG., BUK.',
  punongbarangay: 'HON. JERRY P. PARADILLO',
  barangayKagawad: 'HON. JESSEL MARIE L. PELARCA',
};
