import Close from '@mui/icons-material/Close';
import {
  AppBar,
  Box,
  Button,
  Chip,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Slide,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';
import moment from 'moment';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import Page from '../components/Page';
import { useAuth } from '../hooks/useAuth';
import { useDocumentRequests } from '../hooks/useDocumentRequests';
import { useProfile } from '../hooks/useProfile';
import AuthRequired from '../layouts/auth/AuthRequired';
import RequestStatus from '../sections/@dashboard/request/status/RequestStatus';
import BarangayBirthCertificate from '../sections/documents/BarangayBirthCertificate';
import BarangayCertificateOfIndigency from '../sections/documents/BarangayCertificateOfIndigency';
import BarangayCertificateOfResidency from '../sections/documents/BarangayCertificateOfResidency';
import BarangayCertification from '../sections/documents/BarangayCertification';
import BarangayClearance from '../sections/documents/BarangayClearance';
import BarangayDeathCertificate from '../sections/documents/BarangayDeathCertificate';
import BarangayTreePlantingCertificate from '../sections/documents/BarangayTreePlantingCertificate';
import { updateAmount, updateSecretaryRemarks, updateStatus, updateTreasurerRemarks } from '../service/documentRequest';
import { sendSMS } from '../service/sms';

const accountSid = 'AC1723ddff52489c0cb0ecbcd973fac96d';
const authToken = '666cbf3cb2cf781ef40849ba3b41cdc3';
// const client = new require('twilio')(accountSid, authToken);
// const client = new Twilio(accountSid, authToken);

// function sendMessage(number, message) {
//   client.messages
//     .create({
//       body: message,
//       messagingServiceSid: 'MG1f9927e9193377907f98fd658cb76c87',
//       to: number,
//     })
//     .then((message) => console.log(message.sid))
//     .done();
// }

// function CustomFooterRevenueComponent(props) {
//   return <Box sx={{ p: 1, display: 'flex' }}>Total Revenue {props.totalRevenue}</Box>;
// }

// CustomFooterRevenueComponent.propTypes = {
//   totalRevenue: PropTypes.oneOf(['completed']).isRequired,
// };

// export { CustomFooterRevenueComponent };

function RatingInputValue(props) {
  const { item, applyValue, focusElementRef } = props;
  const [from, setFrom] = useState(typeof item.value?.from === 'object' ? item.value.from : Date.now());
  const [to, setTo] = useState(typeof item.value?.to === 'object' ? item.value.to : from);
  // const [from, setFrom] = useState(Date.now());
  // const [to, setTo] = useState(from);

  console.log({ item });
  console.log({ from: typeof item.value?.from, to: typeof item.value?.to });

  // const ratingRef = React.useRef(null);
  // React.useImperativeHandle(focusElementRef, () => ({
  //   focus: () => {
  //     ratingRef.current.querySelector(`input[value="${Number(item.value) || ''}"]`).focus();
  //   },
  // }));

  React.useEffect(() => {
    applyValue({ ...item, value: { from, to } });

    console.table({ from, to });
  }, [from, to]);

  return (
    <Box>
      <TextField
        type="date"
        variant="standard"
        label="from"
        fullWidth
        value={moment(from).format('yyyy-MM-DD')}
        onChange={(event) => {
          const newValue = new Date(event.target.value);
          console.log("value to set 'from': ", newValue, typeof newValue);
          setFrom((previews) => {
            if (newValue > to) {
              return previews;
            }
            return newValue;
          });
        }}
      />
      <TextField
        type="date"
        variant="standard"
        label="to"
        fullWidth
        value={moment(to).format('yyyy-MM-DD')}
        onChange={(event) => {
          const newValue = new Date(event.target.value);
          console.log("value to set 'to': ", newValue, typeof newValue);
          setTo((previews) => {
            if (newValue < from) {
              return previews;
            }
            return newValue;
          });
        }}
      />
    </Box>
  );
}

RatingInputValue.propTypes = {
  applyValue: PropTypes.func.isRequired,
  focusElementRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired,
    }),
  ]),
  item: PropTypes.shape({
    /**
     * The column from which we want to filter the rows.
     */
    field: PropTypes.string,
    /**
     * Must be unique.
     * Only useful when the model contains several items.
     */
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**
     * The name of the operator we want to apply.
     */
    operator: PropTypes.string,
    /**
     * The filtering value.
     * The operator filtering function will decide for each row if the row values is correct compared to this value.
     */
    value: PropTypes.any,
  }).isRequired,
};

export default function BillingTransaction() {
  // const apiRef = useGridApiContext();
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [filteredRows, setFilteredRows] = useState([]);
  const [keyword, setKeyword] = useState();
  const rows = useDocumentRequests({ keyword }) ?? [];
  const [printOpen, setPrintOpen] = React.useState(false);
  const [documentType, setDocumentType] = React.useState();
  const [currentRow, setCurrentRow] = React.useState();
  const [previewSrc, setPreviewSrc] = React.useState();
  const { enqueueSnackbar } = useSnackbar();
  const user = useAuth();
  const profile = useProfile(user?.uid);

  const [openCedulaView, setOpenCedulaView] = useState(false);
  const [cedulaData, setCedulaData] = useState();

  React.useEffect(() => {
    let newTotalRevenue = 0;
    console.log('filteredRows changed');

    if (filteredRows.length === 0) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        if (row.status === 'completed') {
          newTotalRevenue += Number(row.amount);
        }
      }

      setTotalRevenue(newTotalRevenue);
    } else {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < filteredRows.length; i++) {
        const row = filteredRows[i];
        if (row.status === 'completed') {
          newTotalRevenue += Number(row.amount);
        }
      }

      setTotalRevenue(newTotalRevenue);
    }
  }, [filteredRows, rows]);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handlePrintOpen = () => {
    setPrintOpen(true);
  };

  const handlePrintClose = () => {
    setPrintOpen(false);
  };

  React.useEffect(() => {
    console.log({ rows });
  }, [rows]);

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <Stack direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
          <Box>
            <GridToolbarColumnsButton />
            <GridToolbarFilterButton />
            <GridToolbarDensitySelector />
          </Box>
        </Stack>
        {user && profile?.accountRole && profile?.accountRole !== 'Secretary' && profile?.accountRole !== 'Captain' && (
          <GridToolbarExport />
        )}
        <Container sx={{ mt: 2 }}>
          {/* <Typography variant="body2" align="center">
            Republic of the Bukidnon
          </Typography>
          <Typography variant="body2" align="center">
            Province of Bukidnon
          </Typography>
          <Typography variant="body2" align="center">
            Municipality of Pangantucan
          </Typography>
          <Typography variant="body2" align="center">
            BARANGAY KIMANAIT
          </Typography>
          <Typography variant="body2" align="center">
            OFFICE OF THE BARANGAY TREASURER
          </Typography> */}
          <Typography variant="body3">Overall Revenue: {totalRevenue}</Typography>
        </Container>
      </GridToolbarContainer>
    );
  }

  const columns = [
    { field: 'id', headerName: 'Reference Number', flex: 1.5 },
    { field: 'requestorName', headerName: 'Name', flex: 1.5 },
    { field: 'number', headerName: 'Phone Number', flex: 1.5 },
    {
      field: 'datetime',
      headerName: 'Datetime',
      valueFormatter: (params) => {
        if (params.value == null) {
          return 'N/A';
        }

        return moment(params.value).format('L');
      },
      filterOperators: [
        {
          label: 'Range',
          value: 'range',
          getApplyFilterFn: (filterItem) => {
            console.log({ filterItem });
            if (!filterItem.value) {
              return null;
            }
            return (params) =>
              // return Number(params.value) >= Number(filterItem.value);
              moment(new Date(params.value)).isSameOrAfter(filterItem.value.from, 'day') &&
              moment(new Date(params.value)).isSameOrBefore(filterItem.value.to, 'day');
          },
          InputComponent: RatingInputValue,
          InputComponentProps: { type: 'date' },
        },
      ],
    },
    { field: 'type', headerName: 'Type', flex: 1.5 },
    {
      headerName: 'Amount',
      field: 'amount',
      flex: 1,
      editable:
        user && profile?.accountRole && profile?.accountRole !== 'Captain' && profile?.accountRole !== 'Secretary',
      valueSetter: (params) => {
        console.log({ params });
        updateAmount(params.row.id, params.value ?? '').then((res) => {
          console.log({ res });
        });
        return { ...params.row, amount: params.value ?? '' };
      },
      type: 'number',
    },
    {
      field: 'status',
      headerName: 'Status',
      editable:
        user && profile?.accountRole && profile?.accountRole !== 'Captain' && profile?.accountRole !== 'Treasurer',
      valueOptions: ['pending', 'inprogress', 'completed', 'declined'],
      type: 'singleSelect',
      description: 'Double click to edit',
      flex: 1,
      valueSetter: (params) => {
        console.log({ params });
        updateStatus(params.row.id, params.value).then((res) => {
          console.log({ res });
        });
        return { ...params.row, status: params.value };
      },
    }, // pending, inprogress, completed, declined

    {
      field: 'secretaryRemarks',
      headerName: 'Secretary Remarks',
      flex: 1,
      editable:
        user && profile?.accountRole && profile?.accountRole !== 'Captain' && profile?.accountRole !== 'Treasurer',
      valueSetter: (params) => {
        console.log({ params });
        updateSecretaryRemarks(params.row.id, params.value ?? '').then((res) => {
          console.log({ res });
        });
        return { ...params.row, secretaryRemarks: params.value ?? '' };
      },
    },

    {
      field: 'treasurerRemarks',
      headerName: 'Treasurer Remarks',
      flex: 1,
      editable:
        user && profile?.accountRole && profile?.accountRole !== 'Captain' && profile?.accountRole !== 'Secretary',
      valueSetter: (params) => {
        console.log({ params });
        updateTreasurerRemarks(params.row.id, params.value ?? '').then((res) => {
          console.log({ res });
        });
        return { ...params.row, treasurerRemarks: params.value ?? '' };
      },
    },
  ];

  if (user && profile?.accountRole && profile?.accountRole === 'Secretary') {
    columns.push({
      field: 'none',
      headerName: 'Actions',
      flex: 1.5,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) =>
        params.row.type !== 'Cedula' ? (
          <Stack direction="row" spacing={1}>
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                console.log({ params });
                setDocumentType(params.row.type);
                setCurrentRow(params.row);
                handlePrintOpen();
              }}
            >
              Print
            </Button>

            <Button
              disabled={params.row.status !== 'inprogress'}
              variant="contained"
              size="small"
              // onClick={() => {
              //   sendMessage(
              //     '+639169235853',
              //     'Maayong Adlaw! Kini nga mensahe gikan sa ESI-KIMS buot mupahibalo nga andam na ug pwede ng makuha ang imong gikinihanglan nga dokumento. Atol sa imong pagkuha sa maong dokumento palihog sa pagdala sa imong kompleto nga bayad. Daghang Salamat'
              //   );
              // }}
              onClick={() => {
                sendSMS({
                  number: `63${params.row.number}`,
                  /* TODO REPLACE WITH NUMBER FROM BILLING TRANSACTION
                MIGHT BE: params.row.number, GIVEN THAT "number" IS THE FIREBASE PROPERTY NAME.
                */
                  message: `The ${params.row.type} you requested was ready to be claimed.`,
                })
                  .then(() => {
                    enqueueSnackbar('SMS sent successfully', { variant: 'success' });
                  })
                  .catch((err) => {
                    enqueueSnackbar('SMS failed sending', { variant: 'error' });
                    console.log({ err });
                  });
                console.log({ params });
              }}
            >
              SMS
            </Button>
          </Stack>
        ) : (
          <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                console.log({ params });
                // setDocumentType(params.row.type);
                // setCurrentRow(params.row);
                // handlePrintOpen();
                setCedulaData({ ...params.row, referenceNumber: params.row.id });
                setOpenCedulaView(true);
              }}
            >
              View
            </Button>
            <Button
              disabled={params.row.status !== 'inprogress'}
              variant="contained"
              size="small"
              // onClick={() => {
              //   sendMessage(
              //     '+639169235853',
              //     'Maayong Adlaw! Kini nga mensahe gikan sa ESI-KIMS buot mupahibalo nga andam na ug pwede ng makuha ang imong gikinihanglan nga dokumento. Atol sa imong pagkuha sa maong dokumento palihog sa pagdala sa imong kompleto nga bayad. Daghang Salamat'
              //   );
              // }}
              onClick={() => {
                sendSMS({
                  number: `63${params.row.number}`,
                  /* TODO REPLACE WITH NUMBER FROM BILLING TRANSACTION
                MIGHT BE: params.row.number, GIVEN THAT "number" IS THE FIREBASE PROPERTY NAME.
                */
                  message: `The ${params.row.type} you requested was ready to be claimed.`,
                })
                  .then(() => {
                    enqueueSnackbar('SMS sent successfully', { variant: 'success' });
                  })
                  .catch((err) => {
                    enqueueSnackbar('SMS failed sending', { variant: 'error' });
                    console.log({ err });
                  });
                console.log({ params });
              }}
            >
              SMS
            </Button>
          </Stack>
        ),
    });
  }
  const Transition = React.forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <AuthRequired>
      <Page title="Billing Transaction">
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} sx={{ mb: 2, ml: 4 }}>
          <Typography variant="h4">Billing Transaction</Typography>{' '}
          <TextField
            size="small"
            label="Search"
            value={keyword}
            onChange={(e) => {
              console.log({ searchValue: e?.target?.value });
              setKeyword(e?.target?.value);
            }}
          />
        </Stack>
        <Container sx={{ mt: 5, mb: 5 }}>
          {/* <Typography>Overall Revenue: {totalRevenue}</Typography> */}

          <DataGrid
            experimentalFeatures={{ newEditingApi: true }}
            components={{
              Toolbar: () => <CustomToolbar />,
            }}
            rows={rows}
            columns={columns}
            autoHeight
            onStateChange={(state, event, details) => {
              console.log({ state, event, details });
              const rowIds = state.filter.filteredRowsLookup;
              console.log({ rowIds });
              // eslint-d1;
              const newFilteredRows = [];

              // NOTE: GETTING ALL FILTERED ROWS
              // eslint-disable-next-line no-restricted-syntax
              for (const rowId in rowIds) {
                if (rowIds[rowId]) {
                  // eslint-disable-next-line no-plusplus
                  const row = rows.find((row) => row.id === rowId);
                  newFilteredRows.push(row);
                }
              }
              // END_NOTE: GETTING ALL FILTERED ROWS

              console.log({ newFilteredRows });
              if (JSON.stringify(newFilteredRows) !== JSON.stringify(filteredRows)) {
                setFilteredRows(newFilteredRows);
              }
            }}
          />
          {printOpen && ( // Note: Important, button disables after closing dialog
            <Dialog fullScreen open={printOpen} onClose={handlePrintClose} TransitionComponent={Transition}>
              <AppBar sx={{ position: 'fixed' }}>
                <Toolbar>
                  <IconButton edge="start" color="inherit" onClick={handlePrintClose} aria-label="close">
                    <Close />
                  </IconButton>
                  <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                    Preview
                  </Typography>
                  <Button autoFocus color="inherit" onClick={handlePrint}>
                    Print
                  </Button>
                </Toolbar>
              </AppBar>
              {documentType === 'Barangay Clearance' && <BarangayClearance ref={componentRef} />}
              {documentType === 'Barangay Certificate' && (
                <BarangayCertification
                  {...currentRow.data}
                  secretary="HAZEL JOY P. MANZAN"
                  captain="JERRY P. PARADILLO"
                  requestorName={currentRow.requestorName}
                  ref={componentRef}
                  day={moment().format('Do')}
                  month={moment().format('MMMM')}
                  year={moment().format('YYYY')}
                />
              )}
              {documentType === 'Barangay Birth Certificate' && (
                <BarangayBirthCertificate
                  {...currentRow.data}
                  secretary="HAZEL JOY P. MANZAN"
                  captain="JERRY P. PARADILLO"
                  requestorName={currentRow.requestorName}
                  ref={componentRef}
                  day={moment().format('Do')}
                  month={moment().format('MMMM')}
                  year={moment().format('YYYY')}
                />
              )}
              {documentType === 'Barangay Death Certificate' && (
                <BarangayDeathCertificate
                  {...currentRow.data}
                  secretary="HAZEL JOY P. MANZAN"
                  captain="JERRY P. PARADILLO"
                  requestorName={currentRow.requestorName}
                  ref={componentRef}
                  day={moment().format('Do')}
                  month={moment().format('MMMM')}
                  year={moment().format('YYYY')}
                />
              )}
              {documentType === 'Tree Planting Certificate' && (
                <BarangayTreePlantingCertificate
                  {...currentRow.data}
                  secretary="HAZEL JOY P. MANZAN"
                  captain="JERRY P. PARADILLO"
                  requestorName={currentRow.requestorName}
                  ref={componentRef}
                  day={moment().format('Do')}
                  month={moment().format('MMMM')}
                  year={moment().format('YYYY')}
                />
              )}
              {documentType === 'Certificate of Indigency' && (
                <BarangayCertificateOfIndigency
                  {...currentRow.data}
                  secretary="HAZEL JOY P. MANZAN"
                  captain="JERRY P. PARADILLO"
                  requestorName={currentRow.requestorName}
                  ref={componentRef}
                  day={moment().format('Do')}
                  month={moment().format('MMMM')}
                  year={moment().format('YYYY')}
                />
              )}
              {documentType === 'Certificate of Residency' && (
                <BarangayCertificateOfResidency
                  {...currentRow.data}
                  secretary="HAZEL JOY P. MANZAN"
                  captain="JERRY P. PARADILLO"
                  requestorName={currentRow.requestorName}
                  ref={componentRef}
                  day={moment().format('Do')}
                  month={moment().format('MMMM')}
                  year={moment().format('YYYY')}
                />
              )}
              {documentType === 'Certificate of Tree Planting' && (
                <BarangayTreePlantingCertificate
                  {...currentRow.data}
                  secretary="HAZEL JOY P. MANZAN"
                  captain="JERRY P. PARADILLO"
                  requestorName={currentRow.requestorName}
                  ref={componentRef}
                  day={moment().format('Do')}
                  month={moment().format('MMMM')}
                  year={moment().format('YYYY')}
                />
              )}
              <Grid container sx={{ p: 5 }} spacing={1}>
                <Grid item xs={12}>
                  <Typography>Requirements:</Typography>
                </Grid>
                {!(currentRow?.urls?.length > 0) && <Chip color="warning" label="None" key="no-req" />}
                {currentRow?.urls?.map((url) => (
                  <Grid item>
                    <Chip
                      color="primary"
                      onClick={() => {
                        setPreviewSrc(url.url);
                      }}
                      label={url.filename}
                      key={url.url}
                    />
                  </Grid>
                ))}
              </Grid>
            </Dialog>
          )}

          <Dialog onClose={() => setPreviewSrc(null)} open={previewSrc} fullScreen>
            <AppBar sx={{ position: 'relative' }}>
              <Toolbar>
                <IconButton edge="start" color="inherit" onClick={() => setPreviewSrc(null)} aria-label="close">
                  <Close />
                </IconButton>
                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                  Preview
                </Typography>
              </Toolbar>
            </AppBar>
            <iframe title="preview" src={previewSrc} style={{ height: '100vh' }} />
          </Dialog>

          <Dialog
            open={openCedulaView}
            onClose={() => setOpenCedulaView(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Cedula View</DialogTitle>
            <DialogContent>
              <RequestStatus
                referenceNumber={cedulaData?.referenceNumber}
                remarks={cedulaData?.remarks ?? 'N/A'}
                requestorName={cedulaData?.requestorName}
                status={cedulaData?.status}
                typeOfDocument={cedulaData?.type}
                number={cedulaData?.number}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenCedulaView(false)}>Close</Button>
            </DialogActions>
          </Dialog>
        </Container>
      </Page>
    </AuthRequired>
  );
}
