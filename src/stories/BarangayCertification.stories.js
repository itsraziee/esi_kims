import React from 'react';
import { default as BarangayCertificationComponent } from '../sections/documents/BarangayCertification';

export default {
  title: 'Documents/Barangay Certification',
  component: BarangayCertificationComponent,
};

const Template = (args) => <BarangayCertificationComponent {...args} />;

export const BarangayCertification = Template.bind({});
BarangayCertification.args = {
  name: 'Glenmark Pelarca',
  address: 'Purok 5, Malapinggan, Kimanait, Pangantucan, Bukidnon',
  day: 29,
  month: 'August',
  year: 2022,
  or: 2900260,
  ordateissued: '1-17-2022',
  placeissued: 'Kimanait, Pangantucan, Bukidnon',
  ctc: 123,
  ctcdateissued: '1-17-2022',
  secretary: 'HAZEL JOY M. MANZAN',
  barangayCaptain: 'JERRY P. PARADILLO',
};
