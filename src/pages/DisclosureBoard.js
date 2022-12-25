import { Link as RouterLink } from 'react-router-dom';
// material
import { Button, Container, Grid, List, Stack, Typography } from '@mui/material';
// components
import { useEffect } from 'react';
import Page from '../components/Page';

import Iconify from '../components/Iconify';
import { DisclosureBoardList } from '../sections/@dashboard/disclosureBoard';

import { useAuth } from '../hooks/useAuth';
import { useDisclosureBoards } from '../hooks/useDisclosureBoards';
// ----------------------------------------------------------------------

export default function DisclosureBoard() {
  const user = useAuth();

  const disclosureBoards = useDisclosureBoards();

  useEffect(() => {
    console.log({ disclosureBoards });
  }, [disclosureBoards]);

  return (
    <Page title="Disclosure Board">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Disclosure Board
          </Typography>
          {user && (
            <Button
              variant="contained"
              component={RouterLink}
              to="/dashboard/disclosureBoardForm"
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              Add Full Disclosure File
            </Button>
          )}
        </Stack>
        <Grid container spacing={3}>
        <Grid item xs={12}>
              <List dense>
                {disclosureBoards?.map((disclosureBoard) => (
                  <DisclosureBoardList
                    title={disclosureBoard.title}
                    url={`/dashboard/viewDisclosureBoard/?uid=${disclosureBoard.id}`}
                    icon={'clarity:document-solid'}
                  />
                ))}
              </List>
            </Grid>
          {/* {disclosureBoards?.map((disclosureBoard) => {
            return (
              <Grid item xs={12} sm={8} md={3}>
                <DisclosureBoardCard
                  title={disclosureBoard.title}
                  url={`/dashboard/viewDisclosureBoard/?uid=${disclosureBoard.id}`}
                  icon={'clarity:document-solid'}
                />
              </Grid>
            );
          })} */}
        </Grid>
      </Container>
    </Page>
  );
}
