import React from 'react';
import { default as BarangayBirthCertificateFormComponent } from '../sections/@dashboard/forms/BarangayBirthCertificateForm';

export default {
  title: 'Documents/Barangay Birth Certificate Form',
  component: BarangayBirthCertificateFormComponent,
};

const Template = (args) => <BarangayBirthCertificateFormComponent {...args} />;

export const BarangayBirthCertificateForm = Template.bind({});
BarangayBirthCertificateForm.args = {};
