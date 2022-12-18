import { useTheme } from '@mui/material/styles';
import moment from 'moment';
import { useEffect, useState } from 'react';
// components
// sections
import { useResidents } from '../../hooks/useResidents';
import { DemographicsTable } from '../../sections/@dashboard/demographics';

export default function PopulationLineGraph() {
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

  const [purok1Infants, setPurok1Infants] = useState(0);
  const [purok2Infants, setPurok2Infants] = useState(0);
  const [purok3aInfants, setPurok3aInfants] = useState(0);
  const [purok3bInfants, setPurok3bInfants] = useState(0);
  const [purok4Infants, setPurok4Infants] = useState(0);
  const [purok5Infants, setPurok5Infants] = useState(0);
  const [purok6Infants, setPurok6Infants] = useState(0);
  const [purok7Infants, setPurok7Infants] = useState(0);
  const [purok8Infants, setPurok8Infants] = useState(0);
  const [purok9Infants, setPurok9Infants] = useState(0);
  const [purok10aInfants, setPurok10aInfants] = useState(0);
  const [purok11bInfants, setPurok11bInfants] = useState(0);
  const [purok12Infants, setPurok12Infants] = useState(0);
  const [purok13Infants, setPurok13Infants] = useState(0);

  useEffect(() => {
    const p1Infants =
      purok1?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 1 && age >= 0;
      }) ?? [];

    setPurok1Infants(p1Infants.length);
  }, [purok1]);

  useEffect(() => {
    const p2Infants =
      purok2?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');
        console.log({ age });
        return age <= 1 && age >= 0;
      }) ?? [];

    setPurok2Infants(p2Infants.length);
  }, [purok2]);

  useEffect(() => {
    const p3aInfants =
      purok3a?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 1 && age >= 0;
      }) ?? [];

    setPurok3aInfants(p3aInfants.length);
  }, [purok3a]);

  useEffect(() => {
    const p3bInfants =
      purok3b?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 1 && age >= 0;
      }) ?? [];

    setPurok3bInfants(p3bInfants.length);
  }, [purok3b]);

  useEffect(() => {
    const p4Infants =
      purok4?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 1 && age >= 0;
      }) ?? [];

    setPurok4Infants(p4Infants.length);
  }, [purok4]);

  useEffect(() => {
    const p5Infants =
      purok5?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 1 && age >= 0;
      }) ?? [];

    setPurok5Infants(p5Infants.length);
  }, [purok5]);

  useEffect(() => {
    const p6Infants =
      purok6?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 1 && age >= 0;
      }) ?? [];

    setPurok6Infants(p6Infants.length);
  }, [purok6]);

  useEffect(() => {
    const p7Infants =
      purok7?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 1 && age >= 0;
      }) ?? [];

    setPurok7Infants(p7Infants.length);
  }, [purok7]);

  useEffect(() => {
    const p8Infants =
      purok8?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 1 && age >= 0;
      }) ?? [];

    setPurok8Infants(p8Infants.length);
  }, [purok8]);

  useEffect(() => {
    const p9Infants =
      purok9?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 1 && age >= 0;
      }) ?? [];

    setPurok9Infants(p9Infants.length);
  }, [purok9]);

  useEffect(() => {
    const p10aInfants =
      purok10a?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 1 && age >= 0;
      }) ?? [];

    setPurok10aInfants(p10aInfants.length);
  }, [purok10a]);

  useEffect(() => {
    const p11bInfants =
      purok11b?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 1 && age >= 0;
      }) ?? [];

    setPurok11bInfants(p11bInfants.length);
  }, [purok11b]);

  useEffect(() => {
    const p12Infants =
      purok12?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 1 && age >= 0;
      }) ?? [];

    setPurok12Infants(p12Infants.length);
  }, [purok12]);

  useEffect(() => {
    const p13Infants =
      purok13?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 1 && age >= 0;
      }) ?? [];

    setPurok13Infants(p13Infants.length);
  }, [purok13]);

  const [purok1Children, setPurok1Children] = useState(0);
  const [purok2Children, setPurok2Children] = useState(0);
  const [purok3aChildren, setPurok3aChildren] = useState(0);
  const [purok3bChildren, setPurok3bChildren] = useState(0);
  const [purok4Children, setPurok4Children] = useState(0);
  const [purok5Children, setPurok5Children] = useState(0);
  const [purok6Children, setPurok6Children] = useState(0);
  const [purok7Children, setPurok7Children] = useState(0);
  const [purok8Children, setPurok8Children] = useState(0);
  const [purok9Children, setPurok9Children] = useState(0);
  const [purok10aChildren, setPurok10aChildren] = useState(0);
  const [purok11bChildren, setPurok11bChildren] = useState(0);
  const [purok12Children, setPurok12Children] = useState(0);
  const [purok13Children, setPurok13Children] = useState(0);

  useEffect(() => {
    const p1Children =
      purok1?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 12 && age >= 2;
      }) ?? [];

    setPurok1Children(p1Children.length);
  }, [purok1]);

  useEffect(() => {
    const p2Children =
      purok2?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');
        console.log({ age });
        return age <= 12 && age >= 2;
      }) ?? [];

    setPurok2Children(p2Children.length);
  }, [purok2]);

  useEffect(() => {
    const p3aChildren =
      purok3a?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 12 && age >= 2;
      }) ?? [];

    setPurok3aChildren(p3aChildren.length);
  }, [purok3a]);

  useEffect(() => {
    const p3bChildren =
      purok3b?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 12 && age >= 2;
      }) ?? [];

    setPurok3bChildren(p3bChildren.length);
  }, [purok3b]);

  useEffect(() => {
    const p4Children =
      purok4?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 12 && age >= 2;
      }) ?? [];

    setPurok4Children(p4Children.length);
  }, [purok4]);

  useEffect(() => {
    const p5Children =
      purok5?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 12 && age >= 2;
      }) ?? [];

    setPurok5Children(p5Children.length);
  }, [purok5]);

  useEffect(() => {
    const p6Children =
      purok6?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 12 && age >= 2;
      }) ?? [];

    setPurok6Children(p6Children.length);
  }, [purok6]);

  useEffect(() => {
    const p7Children =
      purok7?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 12 && age >= 2;
      }) ?? [];

    setPurok7Children(p7Children.length);
  }, [purok7]);

  useEffect(() => {
    const p8Children =
      purok8?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 12 && age >= 2;
      }) ?? [];

    setPurok8Children(p8Children.length);
  }, [purok8]);

  useEffect(() => {
    const p9Children =
      purok9?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 12 && age >= 2;
      }) ?? [];

    setPurok9Children(p9Children.length);
  }, [purok9]);

  useEffect(() => {
    const p10aChildren =
      purok10a?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 12 && age >= 2;
      }) ?? [];

    setPurok10aChildren(p10aChildren.length);
  }, [purok10a]);

  useEffect(() => {
    const p11bChildren =
      purok11b?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 12 && age >= 2;
      }) ?? [];

    setPurok11bChildren(p11bChildren.length);
  }, [purok11b]);

  useEffect(() => {
    const p12Children =
      purok12?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 12 && age >= 2;
      }) ?? [];

    setPurok12Children(p12Children.length);
  }, [purok12]);

  useEffect(() => {
    const p13Children =
      purok13?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 12 && age >= 2;
      }) ?? [];

    setPurok13Children(p13Children.length);
  }, [purok13]);

  const [purok1Teens, setPurok1Teens] = useState(0);
  const [purok2Teens, setPurok2Teens] = useState(0);
  const [purok3aTeens, setPurok3aTeens] = useState(0);
  const [purok3bTeens, setPurok3bTeens] = useState(0);
  const [purok4Teens, setPurok4Teens] = useState(0);
  const [purok5Teens, setPurok5Teens] = useState(0);
  const [purok6Teens, setPurok6Teens] = useState(0);
  const [purok7Teens, setPurok7Teens] = useState(0);
  const [purok8Teens, setPurok8Teens] = useState(0);
  const [purok9Teens, setPurok9Teens] = useState(0);
  const [purok10aTeens, setPurok10aTeens] = useState(0);
  const [purok11bTeens, setPurok11bTeens] = useState(0);
  const [purok12Teens, setPurok12Teens] = useState(0);
  const [purok13Teens, setPurok13Teens] = useState(0);

  useEffect(() => {
    const p1Teens =
      purok1?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 19 && age >= 13;
      }) ?? [];

    setPurok1Teens(p1Teens.length);
  }, [purok1]);

  useEffect(() => {
    const p2Teens =
      purok2?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');
        console.log({ age });
        return age <= 19 && age >= 13;
      }) ?? [];

    setPurok2Teens(p2Teens.length);
  }, [purok2]);

  useEffect(() => {
    const p3aTeens =
      purok3a?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 19 && age >= 13;
      }) ?? [];

    setPurok3aTeens(p3aTeens.length);
  }, [purok3a]);

  useEffect(() => {
    const p3bTeens =
      purok3b?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 19 && age >= 13;
      }) ?? [];

    setPurok3bTeens(p3bTeens.length);
  }, [purok3b]);

  useEffect(() => {
    const p4Teens =
      purok4?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 19 && age >= 13;
      }) ?? [];

    setPurok4Teens(p4Teens.length);
  }, [purok4]);

  useEffect(() => {
    const p5Teens =
      purok5?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 19 && age >= 13;
      }) ?? [];

    setPurok5Teens(p5Teens.length);
  }, [purok5]);

  useEffect(() => {
    const p6Teens =
      purok6?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 19 && age >= 13;
      }) ?? [];

    setPurok6Teens(p6Teens.length);
  }, [purok6]);

  useEffect(() => {
    const p7Teens =
      purok7?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 19 && age >= 13;
      }) ?? [];

    setPurok7Teens(p7Teens.length);
  }, [purok7]);

  useEffect(() => {
    const p8Teens =
      purok8?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 19 && age >= 13;
      }) ?? [];

    setPurok8Teens(p8Teens.length);
  }, [purok8]);

  useEffect(() => {
    const p9Teens =
      purok9?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 19 && age >= 13;
      }) ?? [];

    setPurok9Teens(p9Teens.length);
  }, [purok9]);

  useEffect(() => {
    const p10aTeens =
      purok10a?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 19 && age >= 13;
      }) ?? [];

    setPurok10aTeens(p10aTeens.length);
  }, [purok10a]);

  useEffect(() => {
    const p11bTeens =
      purok11b?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 19 && age >= 13;
      }) ?? [];

    setPurok11bTeens(p11bTeens.length);
  }, [purok11b]);

  useEffect(() => {
    const p12Teens =
      purok12?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 19 && age >= 13;
      }) ?? [];

    setPurok12Teens(p12Teens.length);
  }, [purok12]);

  useEffect(() => {
    const p13Teens =
      purok13?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 19 && age >= 13;
      }) ?? [];

    setPurok13Teens(p13Teens.length);
  }, [purok13]);

  const [purok1Adult, setPurok1Adult] = useState(0);
  const [purok2Adult, setPurok2Adult] = useState(0);
  const [purok3aAdult, setPurok3aAdult] = useState(0);
  const [purok3bAdult, setPurok3bAdult] = useState(0);
  const [purok4Adult, setPurok4Adult] = useState(0);
  const [purok5Adult, setPurok5Adult] = useState(0);
  const [purok6Adult, setPurok6Adult] = useState(0);
  const [purok7Adult, setPurok7Adult] = useState(0);
  const [purok8Adult, setPurok8Adult] = useState(0);
  const [purok9Adult, setPurok9Adult] = useState(0);
  const [purok10aAdult, setPurok10aAdult] = useState(0);
  const [purok11bAdult, setPurok11bAdult] = useState(0);
  const [purok12Adult, setPurok12Adult] = useState(0);
  const [purok13Adult, setPurok13Adult] = useState(0);

  useEffect(() => {
    const p1Adult =
      purok1?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 59 && age >= 20;
      }) ?? [];

    setPurok1Adult(p1Adult.length);
  }, [purok1]);

  useEffect(() => {
    const p2Adult =
      purok2?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');
        console.log({ age });
        return age <= 59 && age >= 20;
      }) ?? [];

    setPurok2Adult(p2Adult.length);
  }, [purok2]);

  useEffect(() => {
    const p3aAdult =
      purok3a?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 59 && age >= 20;
      }) ?? [];

    setPurok3aAdult(p3aAdult.length);
  }, [purok3a]);

  useEffect(() => {
    const p3bAdult =
      purok3b?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 59 && age >= 20;
      }) ?? [];

    setPurok3bAdult(p3bAdult.length);
  }, [purok3b]);

  useEffect(() => {
    const p4Adult =
      purok4?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 59 && age >= 20;
      }) ?? [];

    setPurok4Adult(p4Adult.length);
  }, [purok4]);

  useEffect(() => {
    const p5Adult =
      purok5?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 59 && age >= 20;
      }) ?? [];

    setPurok5Adult(p5Adult.length);
  }, [purok5]);

  useEffect(() => {
    const p6Adult =
      purok6?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 59 && age >= 20;
      }) ?? [];

    setPurok6Adult(p6Adult.length);
  }, [purok6]);

  useEffect(() => {
    const p7Adult =
      purok7?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 59 && age >= 20;
      }) ?? [];

    setPurok7Adult(p7Adult.length);
  }, [purok7]);

  useEffect(() => {
    const p8Adult =
      purok8?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 59 && age >= 20;
      }) ?? [];

    setPurok8Adult(p8Adult.length);
  }, [purok8]);

  useEffect(() => {
    const p9Adult =
      purok9?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 59 && age >= 20;
      }) ?? [];

    setPurok9Adult(p9Adult.length);
  }, [purok9]);

  useEffect(() => {
    const p10aAdult =
      purok10a?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 59 && age >= 20;
      }) ?? [];

    setPurok10aAdult(p10aAdult.length);
  }, [purok10a]);

  useEffect(() => {
    const p11bAdult =
      purok11b?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 59 && age >= 20;
      }) ?? [];

    setPurok11bAdult(p11bAdult.length);
  }, [purok11b]);

  useEffect(() => {
    const p12Adult =
      purok12?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 59 && age >= 20;
      }) ?? [];

    setPurok12Adult(p12Adult.length);
  }, [purok12]);

  useEffect(() => {
    const p13Adult =
      purok13?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age <= 59 && age >= 20;
      }) ?? [];

    setPurok13Adult(p13Adult.length);
  }, [purok13]);

  const [purok1Senior, setPurok1Senior] = useState(0);
  const [purok2Senior, setPurok2Senior] = useState(0);
  const [purok3aSenior, setPurok3aSenior] = useState(0);
  const [purok3bSenior, setPurok3bSenior] = useState(0);
  const [purok4Senior, setPurok4Senior] = useState(0);
  const [purok5Senior, setPurok5Senior] = useState(0);
  const [purok6Senior, setPurok6Senior] = useState(0);
  const [purok7Senior, setPurok7Senior] = useState(0);
  const [purok8Senior, setPurok8Senior] = useState(0);
  const [purok9Senior, setPurok9Senior] = useState(0);
  const [purok10aSenior, setPurok10aSenior] = useState(0);
  const [purok11bSenior, setPurok11bSenior] = useState(0);
  const [purok12Senior, setPurok12Senior] = useState(0);
  const [purok13Senior, setPurok13Senior] = useState(0);

  useEffect(() => {
    const p1Senior =
      purok1?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age >= 60;
      }) ?? [];

    setPurok1Senior(p1Senior.length);
  }, [purok1]);

  useEffect(() => {
    const p2Senior =
      purok2?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');
        console.log({ age });
        return age >= 60;
      }) ?? [];

    setPurok2Senior(p2Senior.length);
  }, [purok2]);

  useEffect(() => {
    const p3aSenior =
      purok3a?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age >= 60;
      }) ?? [];

    setPurok3aSenior(p3aSenior.length);
  }, [purok3a]);

  useEffect(() => {
    const p3bSenior =
      purok3b?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age >= 60;
      }) ?? [];

    setPurok3bSenior(p3bSenior.length);
  }, [purok3b]);

  useEffect(() => {
    const p4Senior =
      purok4?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age >= 60;
      }) ?? [];

    setPurok4Senior(p4Senior.length);
  }, [purok4]);

  useEffect(() => {
    const p5Senior =
      purok5?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age >= 60;
      }) ?? [];

    setPurok5Senior(p5Senior.length);
  }, [purok5]);

  useEffect(() => {
    const p6Senior =
      purok6?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age >= 60;
      }) ?? [];

    setPurok6Senior(p6Senior.length);
  }, [purok6]);

  useEffect(() => {
    const p7Senior =
      purok7?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age >= 60;
      }) ?? [];

    setPurok7Senior(p7Senior.length);
  }, [purok7]);

  useEffect(() => {
    const p8Senior =
      purok8?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age >= 60;
      }) ?? [];

    setPurok8Senior(p8Senior.length);
  }, [purok8]);

  useEffect(() => {
    const p9Senior =
      purok9?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age >= 60;
      }) ?? [];

    setPurok9Senior(p9Senior.length);
  }, [purok9]);

  useEffect(() => {
    const p10aSenior =
      purok10a?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age >= 60;
      }) ?? [];

    setPurok10aSenior(p10aSenior.length);
  }, [purok10a]);

  useEffect(() => {
    const p11bSenior =
      purok11b?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age >= 60;
      }) ?? [];

    setPurok11bSenior(p11bSenior.length);
  }, [purok11b]);

  useEffect(() => {
    const p12Senior =
      purok12?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age >= 60;
      }) ?? [];

    setPurok12Senior(p12Senior.length);
  }, [purok12]);

  useEffect(() => {
    const p13Senior =
      purok13?.filter((resident) => {
        const age = moment().diff(resident.dateOfBirth, 'years');

        return age >= 60;
      }) ?? [];

    setPurok13Senior(p13Senior.length);
  }, [purok13]);

  return (
    <DemographicsTable
      title="Population"
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
      ]}
      // subheader="(+43%) than last year"
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
          type: 'line',
          fill: 'solid',
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
        {
          name: 'Infant',
          type: 'line',
          fill: 'solid',
          data: [
            purok1Infants,
            purok2Infants,
            purok3aInfants,
            purok3bInfants,
            purok4Infants,
            purok5Infants,
            purok6Infants,
            purok7Infants,
            purok8Infants,
            purok9Infants,
            purok10aInfants,
            purok11bInfants,
            purok12Infants,
            purok13Infants,
          ],
        },
        {
          name: 'Children',
          type: 'line',
          fill: 'solid',
          data: [
            purok1Children,
            purok2Children,
            purok3aChildren,
            purok3bChildren,
            purok4Children,
            purok5Children,
            purok6Children,
            purok7Children,
            purok8Children,
            purok9Children,
            purok10aChildren,
            purok11bChildren,
            purok12Children,
            purok13Children,
          ],
        },
        {
          name: 'Teens',
          type: 'line',
          fill: 'solid',
          data: [
            purok1Teens,
            purok2Teens,
            purok3aTeens,
            purok3bTeens,
            purok4Teens,
            purok5Teens,
            purok6Teens,
            purok7Teens,
            purok8Teens,
            purok9Teens,
            purok10aTeens,
            purok11bTeens,
            purok12Teens,
            purok13Teens,
          ],
        },
        {
          name: 'Adult',
          type: 'line',
          fill: 'solid',
          data: [
            purok1Adult,
            purok2Adult,
            purok3aAdult,
            purok3bAdult,
            purok4Adult,
            purok5Adult,
            purok6Adult,
            purok7Adult,
            purok8Adult,
            purok9Adult,
            purok10aAdult,
            purok11bAdult,
            purok12Adult,
            purok13Adult,
          ],
        },
        {
          name: 'Senior',
          type: 'line',
          fill: 'solid',
          data: [
            purok1Senior,
            purok2Senior,
            purok3aSenior,
            purok3bSenior,
            purok4Senior,
            purok5Senior,
            purok6Senior,
            purok7Senior,
            purok8Senior,
            purok9Senior,
            purok10aSenior,
            purok11bSenior,
            purok12Senior,
            purok13Senior,
          ],
        },
      ]}
    />
  );
}
