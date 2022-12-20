import React from 'react';
import { default as RequestStatusComponent } from '../sections/@dashboard/request/status/RequestStatus';
export default {
  title: 'Documents/Request Status',
  component: RequestStatusComponent,
};

const Template = (args) => <RequestStatusComponent {...args} />;

export const RequestStatus = Template.bind({});
RequestStatus.args = {
  referenceNumber: '721tUNSDhCBFzub0jOcM',
  status: 'Pending',
  remarks: 'To Be Delivered',
  requestorName: 'Lance Luy',
  typeOfDocument: 'Barangay Death Certificate',
};
