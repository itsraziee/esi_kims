import React from 'react';
import { default as CertificateOfResidencyFormComponent } from '../sections/@dashboard/forms/BarangayDeathCertificateForm';
export default {
  title: 'Documents/Certificate Of Residency Form',
  component: CertificateOfResidencyFormComponent,
};

const Template = (args) => <CertificateOfResidencyFormComponent {...args} />;

export const CertificateOfResidencyForm = Template.bind({});
CertificateOfResidencyForm.args = {};
