import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Stack, Button } from '@mui/material';
import { useEffect, useState } from 'react';
// components
import Page from '../components/Page';
// sections
import { DemographicsChart, DemographicsTable } from '../sections/@dashboard/demographics';
import { useResidents } from '../hooks/useResidents';
// ----------------------------------------------------------------------

export default function Demographics() {
  const theme = useTheme();

  const purok1 = useResidents('1');
  const purok2 = useResidents('2');
  const purok3a = useResidents('3a');
  const purok3b = useResidents('3b');
  const purok4 = useResidents('4');
  const purok5 = useResidents('5');
  const purok6 = useResidents('6');
  const purok7 = useResidents('7');
  const purok8 = useResidents('8');
  const purok9 = useResidents('9');
  const purok10a = useResidents('10a');
  const purok11b = useResidents('11b');
  const purok12 = useResidents('12');
  const purok13 = useResidents('13');

  const [populationData, setPopulationData] = useState([
    { label: 'Purok 1', value: 0 },
    { label: 'Purok 2', value: 0 },
    { label: 'Purok 3A', value: 0 },
    { label: 'Purok 3B', value: 0 },
    { label: 'Purok 4', value: 0 },
    { label: 'Purok 5', value: 0 },
    { label: 'Purok 6', value: 0 },
    { label: 'Purok 7', value: 0 },
    { label: 'Purok 8', value: 0 },
    { label: 'Purok 9', value: 0 },
    { label: 'Purok 10A', value: 0 },
    { label: 'Purok 11B', value: 0 },
    { label: 'Purok 12', value: 0 },
    { label: 'Purok 13', value: 0 },
  ]);

  useEffect(() => {
    setPopulationData([
      { label: 'Purok 1', value: purok1?.length ?? 0 },
      { label: 'Purok 2', value: purok2?.length ?? 0 },
      { label: 'Purok 3A', value: purok3a?.length ?? 0 },
      { label: 'Purok 3B', value: purok3b?.length ?? 0 },
      { label: 'Purok 4', value: purok4?.length ?? 0 },
      { label: 'Purok 5', value: purok5?.length ?? 0 },
      { label: 'Purok 6', value: purok6?.length ?? 0 },
      { label: 'Purok 7', value: purok7?.length ?? 0 },
      { label: 'Purok 8', value: purok8?.length ?? 0 },
      { label: 'Purok 9', value: purok9?.length ?? 0 },
      { label: 'Purok 10A', value: purok10a?.length ?? 0 },
      { label: 'Purok 11B', value: purok11b?.length ?? 0 },
      { label: 'Purok 12', value: purok12?.length ?? 0 },
      { label: 'Purok 13', value: purok13?.length ?? 0 },
    ]);
  }, [
    purok1,
    purok2,
    purok3a,
    purok3b,
    purok4,
    purok5,
    purok6,
    purok7,
    purok8,
    purok9,
    purok10a,
    purok11b,
    purok12,
    purok13,
  ]);

  const [residentPopulation, setResidentPopulation] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    setResidentPopulation([
      purok1?.length ?? 0,
      purok2?.length ?? 0,
      purok3a?.length ?? 0,
      purok3b?.length ?? 0,
      purok4?.length ?? 0,
      purok5?.length ?? 0,
      purok6?.length ?? 0,
      purok7?.length ?? 0,
      purok8?.length ?? 0,
      purok9?.length ?? 0,
      purok10a?.length ?? 0,
      purok11b?.length ?? 0,
      purok12?.length ?? 0,
      purok13?.length ?? 0,
    ]);
  }, [
    purok1,
    purok2,
    purok3a,
    purok3b,
    purok4,
    purok5,
    purok6,
    purok7,
    purok8,
    purok9,
    purok10a,
    purok11b,
    purok12,
    purok13,
  ]);

  // useEffect(() => {
  //   console.log({ malePopulation });
  // }, [malePopulation]);
  const [purok1Males, setPurok1Males] = useState(0);
  const [purok2Males, setPurok2Males] = useState(0);
  const [purok3aMales, setPurok3aMales] = useState(0);
  const [purok3bMales, setPurok3bMales] = useState(0);
  const [purok4Males, setPurok4Males] = useState(0);
  const [purok5Males, setPurok5Males] = useState(0);
  const [purok6Males, setPurok6Males] = useState(0);
  const [purok7Males, setPurok7Males] = useState(0);
  const [purok8Males, setPurok8Males] = useState(0);
  const [purok9Males, setPurok9Males] = useState(0);
  const [purok10aMales, setPurok10aMales] = useState(0);
  const [purok11bMales, setPurok11bMales] = useState(0);
  const [purok12Males, setPurok12Males] = useState(0);
  const [purok13Males, setPurok13Males] = useState(0);

  useEffect(() => {
    const p1Males = purok1?.filter((resident) => resident.sex === 'male') ?? [];

    setPurok1Males(p1Males.length);
  }, [purok1]);

  useEffect(() => {
    const p2Males = purok2?.filter((resident) => resident.sex === 'male') ?? [];

    setPurok2Males(p2Males.length);
  }, [purok2]);

  useEffect(() => {
    const p3aMales = purok3a?.filter((resident) => resident.sex === 'male') ?? [];

    setPurok3aMales(p3aMales.length);
  }, [purok3a]);

  useEffect(() => {
    const p3bMales = purok3b?.filter((resident) => resident.sex === 'male') ?? [];

    setPurok3bMales(p3bMales.length);
  }, [purok3b]);

  useEffect(() => {
    const p4Males = purok4?.filter((resident) => resident.sex === 'male') ?? [];

    setPurok4Males(p4Males.length);
  }, [purok4]);

  useEffect(() => {
    const p5Males = purok5?.filter((resident) => resident.sex === 'male') ?? [];

    setPurok5Males(p5Males.length);
  }, [purok5]);

  useEffect(() => {
    const p6Males = purok6?.filter((resident) => resident.sex === 'male') ?? [];

    setPurok6Males(p6Males.length);
  }, [purok6]);

  useEffect(() => {
    const p7Males = purok7?.filter((resident) => resident.sex === 'male') ?? [];

    setPurok7Males(p7Males.length);
  }, [purok7]);

  useEffect(() => {
    const p8Males = purok8?.filter((resident) => resident.sex === 'male') ?? [];

    setPurok8Males(p8Males.length);
  }, [purok8]);

  useEffect(() => {
    const p9Males = purok9?.filter((resident) => resident.sex === 'male') ?? [];

    setPurok9Males(p9Males.length);
  }, [purok9]);

  useEffect(() => {
    const p10aMales = purok10a?.filter((resident) => resident.sex === 'male') ?? [];

    setPurok10aMales(p10aMales.length);
  }, [purok10a]);

  useEffect(() => {
    const p11bMales = purok11b?.filter((resident) => resident.sex === 'male') ?? [];

    setPurok11bMales(p11bMales.length);
  }, [purok11b]);

  useEffect(() => {
    const p12Males = purok12?.filter((resident) => resident.sex === 'male') ?? [];

    setPurok12Males(p12Males.length);
  }, [purok12]);

  useEffect(() => {
    const p13Males = purok13?.filter((resident) => resident.sex === 'male') ?? [];

    setPurok13Males(p13Males.length);
  }, [purok13]);

  const [purok1Females, setPurok1Females] = useState(0);
  const [purok2Females, setPurok2Females] = useState(0);
  const [purok3aFemales, setPurok3aFemales] = useState(0);
  const [purok3bFemales, setPurok3bFemales] = useState(0);
  const [purok4Females, setPurok4Females] = useState(0);
  const [purok5Females, setPurok5Females] = useState(0);
  const [purok6Females, setPurok6Females] = useState(0);
  const [purok7Females, setPurok7Females] = useState(0);
  const [purok8Females, setPurok8Females] = useState(0);
  const [purok9Females, setPurok9Females] = useState(0);
  const [purok10aFemales, setPurok10aFemales] = useState(0);
  const [purok11bFemales, setPurok11bFemales] = useState(0);
  const [purok12Females, setPurok12Females] = useState(0);
  const [purok13Females, setPurok13Females] = useState(0);

  useEffect(() => {
    const p1Females = purok1?.filter((resident) => resident.sex === 'female') ?? [];

    setPurok1Females(p1Females.length);
  }, [purok1]);

  useEffect(() => {
    const p2Females = purok2?.filter((resident) => resident.sex === 'female') ?? [];

    setPurok2Females(p2Females.length);
  }, [purok2]);

  useEffect(() => {
    const p3aFemales = purok3a?.filter((resident) => resident.sex === 'female') ?? [];

    setPurok3aFemales(p3aFemales.length);
  }, [purok3a]);

  useEffect(() => {
    const p3bFemales = purok3b?.filter((resident) => resident.sex === 'female') ?? [];

    setPurok3bFemales(p3bFemales.length);
  }, [purok3b]);

  useEffect(() => {
    const p4Females = purok4?.filter((resident) => resident.sex === 'female') ?? [];

    setPurok4Females(p4Females.length);
  }, [purok4]);

  useEffect(() => {
    const p5Females = purok5?.filter((resident) => resident.sex === 'female') ?? [];

    setPurok5Females(p5Females.length);
  }, [purok5]);

  useEffect(() => {
    const p6Females = purok6?.filter((resident) => resident.sex === 'female') ?? [];

    setPurok6Females(p6Females.length);
  }, [purok6]);

  useEffect(() => {
    const p7Females = purok7?.filter((resident) => resident.sex === 'female') ?? [];

    setPurok7Females(p7Females.length);
  }, [purok7]);

  useEffect(() => {
    const p8Females = purok8?.filter((resident) => resident.sex === 'female') ?? [];

    setPurok8Females(p8Females.length);
  }, [purok8]);

  useEffect(() => {
    const p9Females = purok9?.filter((resident) => resident.sex === 'female') ?? [];

    setPurok9Females(p9Females.length);
  }, [purok9]);

  useEffect(() => {
    const p10aFemales = purok10a?.filter((resident) => resident.sex === 'female') ?? [];

    setPurok10aFemales(p10aFemales.length);
  }, [purok10a]);

  useEffect(() => {
    const p11bFemales = purok11b?.filter((resident) => resident.sex === 'female') ?? [];

    setPurok11bFemales(p11bFemales.length);
  }, [purok11b]);

  useEffect(() => {
    const p12Females = purok12?.filter((resident) => resident.sex === 'female') ?? [];

    setPurok12Females(p12Females.length);
  }, [purok12]);

  useEffect(() => {
    const p13Females = purok13?.filter((resident) => resident.sex === 'female') ?? [];

    setPurok13Females(p13Females.length);
  }, [purok13]);

  useEffect(() => {
    console.log({
      purok1,
      purok2,
      purok3a,
      purok3b,
      purok4,
      purok5,
      purok6,
      purok7,
      purok8,
      purok9,
      purok10a,
      purok11b,
      purok12,
      purok13,
    });
  }, [
    purok1,
    purok2,
    purok3a,
    purok3b,
    purok4,
    purok5,
    purok6,
    purok7,
    purok8,
    purok9,
    purok10a,
    purok11b,
    purok12,
    purok13,
  ]);

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Demographics
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <DemographicsTable
              title="Population"
              chartLabels={[
                'Purok 1',
                'Purok 2',
                'Purok 3a',
                'Purok 3b',
                'Purok 4',
                'Purok 5',
                'Purok 6',
                'Purok 7',
                'Purok 8',
                'Purok 9',
                'Purok 10a',
                'Purok 11b',
                'Purok 12',
                'Purok 13',
              ]}
              chartData={[
                {
                  name: 'Residents',
                  type: 'column',
                  fill: 'solid',
                  data: residentPopulation,
                },
                {
                  name: 'Male',
                  type: 'area',
                  fill: 'gradient',
                  data: [
                    purok1Males,
                    purok2Males,
                    purok3aMales,
                    purok3bMales,
                    purok4Males,
                    purok5Males,
                    purok6Males,
                    purok7Males,
                    purok8Males,
                    purok9Males,
                    purok10aMales,
                    purok11bMales,
                    purok12Males,
                    purok13Males,
                  ],
                },
                {
                  name: 'Female',
                  type: 'line',
                  fill: 'solid',
                  data: [
                    purok1Females,
                    purok2Females,
                    purok3aFemales,
                    purok3bFemales,
                    purok4Females,
                    purok5Females,
                    purok6Females,
                    purok7Females,
                    purok8Females,
                    purok9Females,
                    purok10aFemales,
                    purok11bFemales,
                    purok12Females,
                    purok13Females,
                  ],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <DemographicsChart
              title="Current Population"
              chartData={populationData}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.chart.blue[0],
                theme.palette.chart.violet[0],
                theme.palette.chart.yellow[0],
                theme.palette.chart.green[0],
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
