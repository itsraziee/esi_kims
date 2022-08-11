import { Container, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
// components
import { useLocation } from 'react-router-dom';
import Page from '../components/Page';
import EditOfficialsFormCard from '../sections/@dashboard/officialsForms/EditOfficialFormCard';
import { getOfficialData } from '../service/official';

export default function EditOfficialsProfile() {
  const [officialData, setOfficialData] = useState();
  const location = useLocation();
  console.log({ location });
  const uid = new URLSearchParams(location.search).get('uid');

  useEffect(() => {
    getOfficialData(uid).then((res) => {
      console.log({ officialData: res.data() });
      setOfficialData(res.data());
    });
  }, []);

  return (
    <Page title="Officials Profile">
      <Container sx={{ mt: 5, mb: 5 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <EditOfficialsFormCard initialValues={officialData} uid={uid} />
        </Stack>
      </Container>
    </Page>
  );
}
