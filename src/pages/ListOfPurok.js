import { useState } from 'react';
// material
import { Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { ListOfPurokList} from '../sections/@dashboard/listOfPurok';
// mock
import LISTOFPUROK from '../_mock/listOfPurok';

// ----------------------------------------------------------------------

export default function PurokList() {
//   const [openFilter, setOpenFilter] = useState(false);

//   const handleOpenFilter = () => {
//     setOpenFilter(true);
//   };

//   const handleCloseFilter = () => {
//     setOpenFilter(false);
//   };

  return (
    <Page title="List Of Purok">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          List of Purok
        </Typography>
        <ListOfPurokList puroks={LISTOFPUROK} />
      </Container>
    </Page>
  );
}
