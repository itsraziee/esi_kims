import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import React from 'react';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import { useResidents } from '../hooks/useResidents';

export default function User() {
  const location = useLocation();
  console.log({ location });
  const purok = new URLSearchParams(location.search).get('purok');
  console.log({ purok });
  const rows = useResidents(purok);

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1, minWidth: 100 },
    {
      field: 'firstName',
      headerName: 'First Name',
      flex: 1,
      minWidth: 150,
      editable: true,
    },
    {
      field: 'middleName',
      headerName: 'Middle Name',
      flex: 1,
      minWidth: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last Name',
      flex: 1,
      minWidth: 150,
      editable: true,
    },
    {
      field: 'purok',
      headerName: 'Purok',
      flex: 1,
      minWidth: 150,
      editable: true,
    },
    {
      field: '',
      headerName: 'Age',
      valueGetter: (params) => moment().diff(params.row.dateOfBirth, 'years'),
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'citizenship',
      headerName: 'Citizenship',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'collegeAddress',
      headerName: 'College Address',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'collegeSchool',
      headerName: 'College School',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'collegeYearGrad',
      headerName: 'College Year Graduated',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'dateOfBirth',
      headerName: 'Date of Birth',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'elementaryAddress',
      headerName: 'Elementary Address',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'elementarySchool',
      headerName: 'Elementary School',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'fathersName',
      headerName: 'Fathers Name',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'fathersOccupation',
      headerName: 'Fathers Occupation',
      flex: 1,
      minWidth: 150,
    },

    {
      field: 'height',
      headerName: 'Height',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'highschoolAddress',
      headerName: 'Highschool Address',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'highschoolName',
      headerName: 'Highschool Name',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'highschoolYearGrad',
      headerName: 'Highschool Year Grad',
      flex: 1,
      minWidth: 150,
    },

    {
      field: 'mothersAddress',
      headerName: 'Mothers Address',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'mothersName',
      headerName: 'Mothers Name',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'mothersOccupation',
      headerName: 'Mothers Occupation',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'numberOfChildren',
      headerName: 'Number Of Children',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'occupation',
      headerName: 'Occupation',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'officialAddress',
      headerName: 'Official Address',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'phoneNumber',
      headerName: 'Phone Number',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'religion',
      headerName: 'Religion',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'sex',
      headerName: 'Sex',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'spouse',
      headerName: 'Spouse',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'spouseAddress',
      headerName: 'Spouse Address',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'uploadImage',
      headerName: 'Upload Image',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'vocationalAddress',
      headerName: 'Vocational Address',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'vocationalSchool',
      headerName: 'Vocational School',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'vocationalYearGrad',
      headerName: 'Vocational Year Grad',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'weight',
      headerName: 'Weight',
      flex: 1,
      minWidth: 150,
    },
  ];

  // const rows = [
  //   {
  //     id: '1bzWoVvEn2fk173B4cab',
  //     age: 21,
  //     citizenship: 'Filipino',
  //     collegeAddress: 'Fortich Street, Malaybalay City, Bukidon',
  //     collegeSchool: 'Bukidnon State University',
  //     collegeYearGrad: 2022,
  //     dateOfBirth: '11/07/2000',
  //     elementaryAddress: 'Sumpong, Malaybalay City, Bukidnon',
  //     elementarySchool: 'Sumpong Elementary School',
  //     elementaryYearGrad: '2012-2013',
  //     fathersAddress: 'Purok 8, Sumpong, Malaybalay City, Bukidnon',
  //     fathersName: 'Agapito D. Acaso',
  //     fathersOccupation: 'Mechanic',
  //     firstName: 'John Bryan Pit',
  //     height: '175 cm',
  //     highschoolAddress: 'Fortich St., Malaybalay City, Bukidnon',
  //     highschoolName: 'Bukidnon National Highschool',
  //     highschoolYearGrad: '2019-2020',
  //     lastName: 'Acaso',
  //     middleName: 'Maturan',
  //     mothersAddress: 'Purok 8, Sumpong Malaybalay City, Bukidnon',
  //     mothersName: 'Jenefer M. Acaso',
  //     mothersOccupation: 'Housewife',
  //     numberOfChildren: 0,
  //     occupation: 'Web Developer',
  //     officialAddress: 'Purok 8, Sumpong, Malaybalay City, Bukidnon',
  //     phoneNumber: '09123456789',
  //     religion: 'Catholic',
  //     sex: 'Male',
  //     spouse: 'N/A',
  //     spouseAddress: 'N/A',
  //     status: 'active',
  //     uploadImage: '',
  //     vocationalAddress: 'Fortich St., Malaybalay City, Bukidnon',
  //     vocationalSchool: 'Alternative Learning System',
  //     vocationalYearGrad: '2022-2023',
  //     weight: '45 kg',
  //   },
  // ];
  return (
    <DataGrid
      autoHeight
      rows={rows ?? []}
      columns={columns}
      components={{ Toolbar: GridToolbar }}
      experimentalFeatures={{ newEditingApi: true }}
      disableSelectionOnClick
      loading={!rows}
      rowsPerPageOptions={[5, 10, 20]}
      pagination
    />
  );
}
