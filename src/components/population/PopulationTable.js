import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import moment from 'moment';
import { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useProfile } from '../../hooks/useProfile';
import { useResidents } from '../../hooks/useResidents';
import { updateResident } from '../../service/residents';

export default function PopulationTable({ purok }) {
  const rows = useResidents(purok);
  const user = useAuth();
  const profile = useProfile(user?.uid);

  useEffect(() => {
    console.log({ user, profile, allowEdit: user && profile?.accountRole && profile?.accountRole !== 'Captain' });
  }, [user, profile]);

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1, minWidth: 100 },
    {
      field: 'firstName',
      headerName: 'First Name',
      flex: 1,
      minWidth: 150,
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          firstName: params.value,
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, firstName: params.value };
      },
    },
    {
      field: 'middleName',
      headerName: 'Middle Name',
      flex: 1,
      minWidth: 150,
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          middleName: params.value,
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, middleName: params.value };
      },
    },
    {
      field: 'lastName',
      headerName: 'Last Name',
      flex: 1,
      minWidth: 150,
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          lastName: params.value,
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, lastName: params.value };
      },
    },
    {
      field: 'purok',
      headerName: 'Purok',
      flex: 1,
      minWidth: 150,
      type: 'singleSelect',
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      valueOptions: ['1', '2', '3a', '3b', '4', '5', '6', '7', '8', '9', '10a', '11b', '12', '13'],
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          purok: params.value,
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, purok: params.value };
      },
    },
    {
      field: 'age',
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
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          citizenship: params.value,
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, citizenship: params.value };
      },
    },
    {
      field: 'collegeAddress',
      headerName: 'College Address',
      flex: 1,
      minWidth: 150,
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          collegeAddress: params.value,
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, collegeAddress: params.value };
      },
    },
    {
      field: 'collegeSchool',
      headerName: 'College School',
      flex: 1,
      minWidth: 150,
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          collegeSchool: params.value,
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, collegeSchool: params.value };
      },
    },
    {
      field: 'collegeYearGrad',
      headerName: 'College Year Graduated',
      flex: 1,
      minWidth: 150,
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          collegeYearGrad: params.value,
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, collegeYearGrad: params.value };
      },
    },
    {
      field: 'dateOfBirth',
      headerName: 'Date of Birth',
      flex: 1,
      minWidth: 150,
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      type: 'date',
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          dateOfBirth: params.value.toString(),
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, dateOfBirth: params.value };
      },
      valueGetter: (params) => moment(params.value).calendar(),
    },
    {
      field: 'elementaryAddress',
      headerName: 'Elementary Address',
      flex: 1,
      minWidth: 150,
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          elementaryAddress: params.value,
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, elementaryAddress: params.value };
      },
    },
    {
      field: 'elementarySchool',
      headerName: 'Elementary School',
      flex: 1,
      minWidth: 150,
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          elementarySchool: params.value,
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, elementarySchool: params.value };
      },
    },
    {
      field: 'fathersName',
      headerName: 'Fathers Name',
      flex: 1,
      minWidth: 150,
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          fathersName: params.value,
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, fathersName: params.value };
      },
    },
    {
      field: 'fathersOccupation',
      headerName: 'Fathers Occupation',
      flex: 1,
      minWidth: 150,
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          fathersOccupation: params.value,
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, fathersOccupation: params.value };
      },
    },

    {
      field: 'height',
      headerName: 'Height',
      flex: 1,
      minWidth: 150,
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          height: params.value,
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, height: params.value };
      },
    },
    {
      field: 'highschoolAddress',
      headerName: 'Highschool Address',
      flex: 1,
      minWidth: 150,
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          highschoolAddress: params.value,
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, highschoolAddress: params.value };
      },
    },
    {
      field: 'highschoolName',
      headerName: 'Highschool Name',
      flex: 1,
      minWidth: 150,
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          highschoolName: params.value,
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, highschoolName: params.value };
      },
    },
    {
      field: 'highschoolYearGrad',
      headerName: 'Highschool Year Grad',
      flex: 1,
      minWidth: 150,
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          highschoolYearGrad: params.value,
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, highschoolYearGrad: params.value };
      },
    },

    {
      field: 'mothersAddress',
      headerName: 'Mothers Address',
      flex: 1,
      minWidth: 150,
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          mothersAddress: params.value,
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, mothersAddress: params.value };
      },
    },
    {
      field: 'mothersName',
      headerName: 'Mothers Name',
      flex: 1,
      minWidth: 150,
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          mothersName: params.value,
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, mothersName: params.value };
      },
    },
    {
      field: 'mothersOccupation',
      headerName: 'Mothers Occupation',
      flex: 1,
      minWidth: 150,
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          mothersOccupation: params.value,
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, mothersOccupation: params.value };
      },
    },
    {
      field: 'numberOfChildren',
      headerName: 'Number Of Children',
      flex: 1,
      minWidth: 150,
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          numberOfChildren: params.value,
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, numberOfChildren: params.value };
      },
    },
    {
      field: 'occupation',
      headerName: 'Occupation',
      flex: 1,
      minWidth: 150,
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          occupation: params.value,
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, occupation: params.value };
      },
    },
    {
      field: 'permanentAddress',
      headerName: 'Permanent Address',
      flex: 1,
      minWidth: 150,
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          permanentAddress: params.value,
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, permanentAddress: params.value };
      },
    },
    {
      field: 'phoneNumber',
      headerName: 'Phone Number',
      flex: 1,
      minWidth: 150,
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          phoneNumber: params.value,
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, phoneNumber: params.value };
      },
    },
    {
      field: 'religion',
      headerName: 'Religion',
      flex: 1,
      minWidth: 150,
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          religion: params.value,
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, religion: params.value };
      },
    },
    {
      field: 'sex',
      headerName: 'Sex',
      flex: 1,
      minWidth: 150,
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          sex: params.value,
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, sex: params.value };
      },
    },
    {
      field: 'spouse',
      headerName: 'Spouse',
      flex: 1,
      minWidth: 150,
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          spouse: params.value,
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, spouse: params.value };
      },
    },
    {
      field: 'spouseAddress',
      headerName: 'Spouse Address',
      flex: 1,
      minWidth: 150,
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          spouseAddress: params.value,
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, spouseAddress: params.value };
      },
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      minWidth: 150,
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          status: params.value,
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, status: params.value };
      },
    },
    // {
    //   field: 'uploadImage',
    //   headerName: 'Upload Image',
    //   flex: 1,
    //   minWidth: 150,
    //   editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
    //   valueSetter: (params) => {
    //     console.log({ params });
    //     updateResident(params.row.id, {
    //       uploadImage: params.value,
    //     }).then((res) => {
    //       console.log({ res });
    //     });
    //     return { ...params.row, uploadImage: params.value };
    //   },
    // },
    {
      field: 'vocationalAddress',
      headerName: 'Vocational Address',
      flex: 1,
      minWidth: 150,
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          vocationalAddress: params.value,
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, vocationalAddress: params.value };
      },
    },
    {
      field: 'vocationalSchool',
      headerName: 'Vocational School',
      flex: 1,
      minWidth: 150,
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          vocationalSchool: params.value,
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, vocationalSchool: params.value };
      },
    },
    {
      field: 'vocationalYearGrad',
      headerName: 'Vocational Year Grad',
      flex: 1,
      minWidth: 150,
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          vocationalYearGrad: params.value,
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, vocationalYearGrad: params.value };
      },
    },
    {
      field: 'weight',
      headerName: 'Weight',
      flex: 1,
      minWidth: 150,
      editable: user && profile?.accountRole && profile?.accountRole !== 'Captain',
      valueSetter: (params) => {
        console.log({ params });
        updateResident(params.row.id, {
          weight: params.value,
        }).then((res) => {
          console.log({ res });
        });
        return { ...params.row, weight: params.value };
      },
    },
  ];

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