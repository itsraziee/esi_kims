import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
// components
// sections
import { useResidents } from '../../hooks/useResidents';
import { DemographicsChart } from '../../sections/@dashboard/demographics';

export default function PopulationPieChart() {
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
    <DemographicsChart
      title="Current Population"
      chartData={populationData}
      chartColors={[
        theme.palette.primary.main,
        theme.palette.chart.blue[0],
        theme.palette.chart.violet[0],
        theme.palette.chart.yellow[0],
        theme.palette.chart.green[0],
        theme.palette.chart.red[0],
        theme.palette.chart.water,
        theme.palette.chart.babyBlue,
        theme.palette.chart.oceanBlue,
        theme.palette.chart.crayola,
        theme.palette.chart.architectureblue,
        theme.palette.chart.indianorange,
        theme.palette.chart.americanred,
        theme.palette.chart.vividpurple,
      ]}
    />
  );
}
