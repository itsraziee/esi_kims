import React from 'react';
import { default as BarangayCertificateFormComponent } from '../sections/@dashboard/forms/BarangayClearanceForm';

export default {
  title: 'Documents/Barangay Certificate Form',
  component: BarangayCertificateFormComponent,
};

const Template = (args) => <BarangayCertificateFormComponent {...args} />;

export const BarangayCertificateForm = Template.bind({});
BarangayCertificateForm.args = {};
