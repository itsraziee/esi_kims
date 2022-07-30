import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Container } from '@mui/material';
import Page from '../components/Page';

export default function BillingTransaction() {
  const rows = [
    {
      id: 1,
      name: 'Jessel',
      datetime: '12/12/22',
      type: 'Barangay Certification',
      amount: '150',
      status: 'completed',
      remarks: 'Done',
    },
    {
      id: 2,
      name: 'Jessel',
      datetime: '03/12/22',
      type: 'Barangay Certification',
      amount: '150',
      status: 'completed',
      remarks: 'Done',
    },
    {
      id: 3,
      name: 'Jessel',
      datetime: '04/12/22',
      type: 'Barangay Certification',
      amount: '150',
      status: 'completed',
      remarks: 'Done',
    },
    {
      id: 4,
      name: 'Jessel Rachel Anne Gooo',
      datetime: '10/12/22',
      type: 'Barangay Certification',
      amount: '150',
      status: 'completed',
      remarks: 'Done',
    },
    {
      id: 5,
      name: 'Jessel Pelarca Letragooooo',
      datetime: '05/12/22',
      type: 'Barangay Certification',
      amount: '150',
      status: 'completed',
      remarks: 'Done',
    },
  ];

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'datetime', headerName: 'Datetime' },
    { field: 'type', headerName: 'Type', flex: 1 },
    { field: 'amount', headerName: 'Amount' },
    {
      field: 'status',
      headerName: 'Status',
      editable: true,
      valueOptions: ['pending', 'inprogress', 'completed', 'declined'],
      type: 'singleSelect',
      description: 'Double click to edit',
      flex: 1,
    }, // pending, inprogress, completed, declined
    { field: 'remarks', headerName: 'Remarks', flex: 1, editable: true },
  ];

  return (
    <Page title="Billing Transaction">
      <Container sx={{ mt: 5, mb: 5 }}>
        <DataGrid
          experimentalFeatures={{ newEditingApi: true }}
          components={{ Toolbar: GridToolbar }}
          rows={rows}
          columns={columns}
          autoHeight
        />
      </Container>
    </Page>
  );
}
