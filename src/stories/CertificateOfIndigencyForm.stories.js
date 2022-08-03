import React from 'react';
import { default as CertificateOfIndigencyFormComponent } from '../sections/@dashboard/forms/CertificateOfIndigencyForm';
export default {
  title: 'Documents/Certificate Of Indigency Form',
  component: CertificateOfIndigencyFormComponent,
};

const Template = (args) => <CertificateOfIndigencyFormComponent {...args} />;

export const CertificateOfIndigencyForm = Template.bind({});
CertificateOfIndigencyForm.args = {};
