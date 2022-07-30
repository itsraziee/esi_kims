import React from 'react';
import { default as BarangayElectrificationCertificateComponent } from '../sections/documents/BarangayElectrificationCertificate';

export default {
  title: 'Documents/Barangay Electrification Certificate',
  component: BarangayElectrificationCertificateComponent,
};

const Template = (args) => <BarangayElectrificationCertificateComponent {...args} />;

export const BarangayElectrificationCertificate = Template.bind({});
BarangayElectrificationCertificate.args = {
  name: 'Glenmark Pelarca',
  address: 'Purok 5, Malapinggan, Kimanait, Pangantucan, Bukidnon',
  day: 29,
  month: 'August',
  year: 2022,
  secretary: 'HAZEL JOY M. MANZAN',
  barangayCaptain: 'JERRY P. PARADILLO',
};
