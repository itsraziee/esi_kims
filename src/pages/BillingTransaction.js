import Close from '@mui/icons-material/Close';
import { AppBar, Button, Chip, Container, Dialog, Grid, IconButton, Slide, Toolbar, Typography } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import moment from 'moment';
import * as React from 'react';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Page from '../components/Page';
import { useDocumentRequests } from '../hooks/useDocumentRequests';
import AuthRequired from '../layouts/auth/AuthRequired';
import BarangayBirthCertificate from '../sections/documents/BarangayBirthCertificate';
import BarangayCertificateOfIndigency from '../sections/documents/BarangayCertificateOfIndigency';
import BarangayCertificateOfResidency from '../sections/documents/BarangayCertificateOfResidency';
import BarangayCertification from '../sections/documents/BarangayCertification';
import BarangayClearance from '../sections/documents/BarangayClearance';
import BarangayDeathCertificate from '../sections/documents/BarangayDeathCertificate';
import BarangayTreePlantingCertificate from '../sections/documents/BarangayTreePlantingCertificate';
import { updateRemarks, updateStatus } from '../service/documentRequest';

export default function BillingTransaction() {
  const rows = useDocumentRequests() ?? [];
  const [printOpen, setPrintOpen] = React.useState(false);
  const [documentType, setDocumentType] = React.useState();
  const [currentRow, setCurrentRow] = React.useState();
  const [previewSrc, setPreviewSrc] = React.useState();

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

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'requestorName', headerName: 'Name', flex: 1 },
    {
      field: 'datetime',
      headerName: 'Datetime',
      valueFormatter: (params) => {
        if (params.value == null) {
          return 'N/A';
        }

        return moment(params.value).format('L');
      },
    },
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
      valueSetter: (params) => {
        console.log({ params });
        updateStatus(params.row.id, params.value).then((res) => {
          console.log({ res });
        });
        return { ...params.row, status: params.value };
      },
    }, // pending, inprogress, completed, declined
    {
      field: 'remarks',
      headerName: 'Remarks',
      flex: 1,
      editable: true,
      valueSetter: (params) => {
        console.log({ params });
        updateRemarks(params.row.id, params.value ?? '').then((res) => {
          console.log({ res });
        });
        return { ...params.row, remarks: params.value ?? '' };
      },
    },
    {
      field: 'none',
      headerName: 'Actions',
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <Button
          variant="text"
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
      ),
    },
  ];

  const Transition = React.forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <AuthRequired>
      <Page title="Billing Transaction">
        <Typography variant="h4" sx={{ mb: 5, ml: 4 }}>
          Billing Transaction
        </Typography>
        <Container sx={{ mt: 5, mb: 5 }}>
          <DataGrid
            experimentalFeatures={{ newEditingApi: true }}
            components={{ Toolbar: GridToolbar }}
            rows={rows}
            columns={columns}
            autoHeight
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
                />
              )}
              {documentType === 'Certificate of Indigency' && (
                <BarangayCertificateOfIndigency
                  {...currentRow.data}
                  secretary="HAZEL JOY P. MANZAN"
                  captain="JERRY P. PARADILLO"
                  requestorName={currentRow.requestorName}
                  ref={componentRef}
                />
              )}
              {documentType === 'Certificate of Residency' && (
                <BarangayCertificateOfResidency
                  {...currentRow.data}
                  secretary="HAZEL JOY P. MANZAN"
                  captain="JERRY P. PARADILLO"
                  requestorName={currentRow.requestorName}
                  ref={componentRef}
                />
              )}
              {documentType === 'Certificate of Tree Planting' && (
                <BarangayTreePlantingCertificate
                  {...currentRow.data}
                  secretary="HAZEL JOY P. MANZAN"
                  captain="JERRY P. PARADILLO"
                  requestorName={currentRow.requestorName}
                  ref={componentRef}
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
        </Container>
      </Page>
    </AuthRequired>
  );
}
