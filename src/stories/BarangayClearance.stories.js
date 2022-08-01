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
  date: '7-Feb-22',
  description: 'NO DEROGATORY OR CRIMINAL RECORD and HAS GOOD MORAL AND GOOD REPUTATION as per record of this office',
  year: 2022,
  firstname: 'GLENMARK',
    middlename: 'TUNDAG',
    lastname: 'ARTIAGA',
    suffix: 'N/A',
  address: 'P-1 Kimanait, Pangantucan, Bukidnon',
  citizenship: 'FILIPINO',
    sex: 'MALE',
    age: '21 Years Old',
    religion: 'Roman Catholic',
    status: 'Single',
    birthdate: '5-MAY-2001',
    placeofbirth: 'Kimananit, Pangantucan, Bukidnon',
    height: '5^3',
    weight: '45',
    validity: '7-Feb-23',
    resCertNo: '26896461',
    dateIssued: ' 2/7/2022',
    placeIssued: 'KIMANAIT, PANG., BUK.',
    punongbarangay: 'HON. JERRY P. PARADILLO',
    barangayKagawad: 'HON. JESSEL MARIE L. PELARCA',
};
