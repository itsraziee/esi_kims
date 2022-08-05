import React from 'react';
import { default as BarangayDeathCertificateFormComponent } from '../sections/@dashboard/forms/BarangayDeathCertificateForm';
export default {
  title: 'Documents/Barangay Death Certificate Form',
  component: BarangayDeathCertificateFormComponent,
};

const Template = (args) => <BarangayDeathCertificateFormComponent {...args} />;

export const BarangayDeathCertificateForm = Template.bind({});
BarangayDeathCertificateForm.args = {};
