import { Form, FormikProvider, useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
// material
import { LoadingButton } from '@mui/lab';
import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { createResident } from '../../../service/residents';
// ----------------------------------------------------------------------

export default function ResidentsProfileCard() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const ResidentsProfileSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('First name is required'),
    middleName: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Middle name is required'),
    lastName: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Last name is required'),
    sex: Yup.string().oneOf(['male', 'female']).required('Sex is Required'),
    civilStatus: Yup.string().oneOf(['single', 'married', 'widowed', 'separated']).required('Civil Status is required'),
    dateOfBirth: Yup.date().required('Date of Birth is required'),
    citizenship: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Citizenship is required'),
    religion: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Religion is required'),
    height: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Height is required'),
    weight: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Weight is required'),
    phoneNumber: Yup.string().typeError('phoneNumber must be a number').required('Phone number is required'),
    occupation: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Occupation is required'),
    officialAddress: Yup.string().required('Address is required'),
    status: Yup.string().oneOf(['active', 'inactive']).required('Status is required'),
    spouse: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Spouse is required'),
    tribe: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Tribe is required'),
    spouseAddress: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Spouse Address is required'),
    numberOfChildren: Yup.number()
      .typeError('Number of Children must be a number')
      .integer('Number of Children must be an integer')
      .required('Number of Children is required'),
    purok: Yup.string()
      .oneOf(['1', '2', '3a', '3b', '4', '5', '6', '7', '8', '9', '10a', '11b', '12', '13'])
      .required('Purok is required'),
    fathersName: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Father Name is required'),
    fathersOccupation: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Occupation is required'),
    fathersAddress: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Father Address is required'),
    mothersName: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Mother Name is required'),
    mothersOccupation: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Occupation is required'),
    mothersAddress: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Mother Address is required'),
    elementarySchool: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Name of School is required'),
    elementaryAddress: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Address of School is required'),
    elementaryYearGrad: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Year of Graduated is required'),
    highschoolName: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Name of School is required'),
    highschoolAddress: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Address of School is required'),
    highschoolYearGrad: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Year of Graduated is required'),
    vocationalSchool: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Name of School is required'),
    vocationalAddress: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Address of School is required'),
    vocationalYearGrad: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Year of Graduated is required'),
    collegeSchool: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Name of School is required'),
    collegeAddress: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Address of School is required'),
    collegeYearGrad: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Year of Graduated is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      middleName: '',
      lastName: '',
      officialAddress: '',
      sex: '',
      dateOfBirth: '',
      civilStatus: '',
      citizenship: '',
      religion: '',
      height: '',
      weight: '',
      phoneNumber: '',
      occupation: '',
      status: '',
      spouse: '',
      tribe: '',
      spouseAddress: '',
      numberOfChildren: '',
      purok: '',
      fathersName: '',
      fathersOccupation: '',
      fathersAddress: '',
      mothersName: '',
      mothersOccupation: '',
      mothersAddress: '',
      elementarySchool: '',
      elementaryAddress: '',
      elementaryYearGrad: '',
      highschoolName: '',
      highschoolAddress: '',
      highschoolYearGrad: '',
      vocationalSchool: '',
      vocationalAddress: '',
      vocationalYearGrad: '',
      collegeSchool: '',
      collegeAddress: '',
      collegeYearGrad: '',
    },
    validationSchema: ResidentsProfileSchema,
    onSubmit: (data) => {
      console.log({ data });
      createResident(data)
        .then((res) => {
          console.log({ res });
          if (res) {
            enqueueSnackbar('Resident Added successfully', {
              variant: 'success',
            });
            navigate('/dashboard/app', { replace: true });
          }
        })
        .catch((err) => {
          console.log({ err });
          enqueueSnackbar('Invalid input', { variant: 'error' });
        });
      navigate('/dashboard/app', { replace: true });
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, handleChange } = formik;

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Typography variant="subtitle3" noWrap>
                Personal Data
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField
                  fullWidth
                  name="firstName"
                  label="First name"
                  {...getFieldProps('firstName')}
                  error={Boolean(touched.firstName && errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />

                <TextField
                  fullWidth
                  name="middleName"
                  label="Middle name"
                  {...getFieldProps('middleName')}
                  error={Boolean(touched.middleName && errors.middleName)}
                  helperText={touched.middleName && errors.middleName}
                />

                <TextField
                  fullWidth
                  name="lastName"
                  label="Last name"
                  {...getFieldProps('lastName')}
                  error={Boolean(touched.lastName && errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <FormControl helperText={touched.sex && errors.sex} fullWidth error={Boolean(errors.sex)}>
                  <InputLabel id="status-select-label">Sex</InputLabel>
                  <Select
                    name="sex"
                    labelId="sex"
                    id="sex"
                    value={formik.values.sex}
                    label="Select a Sex"
                    onChange={handleChange}
                    {...getFieldProps('sex')}
                    error={Boolean(touched.sex && errors.sex)}
                    helperText={touched.sex && errors.sex}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                  </Select>
                  {Boolean(errors.sex) && <FormHelperText>Please select a Sex.</FormHelperText>}
                </FormControl>

                {/* <FormControl helperText={touched.sex && errors.sex} fullWidth>
                  <InputLabel id="sex-select-label">Sex</InputLabel>
                  <Select
                    name="sex"
                    labelId="sex-select-label"
                    id="sex-select"
                    value={formik.values.sex}
                    label="Sex"
                    onChange={handleChange}
                    {...getFieldProps('sex')}
                    error={Boolean(touched.sex && errors.sex)}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                  </Select>
                </FormControl> */}

                <TextField
                  fullWidth
                  name="dateOfBirth"
                  id="dateOfBirth"
                  label="Date of Birth"
                  type="date"
                  {...getFieldProps('dateOfBirth')}
                  error={Boolean(touched.dateOfBirth && errors.dateOfBirth)}
                  helperText={touched.dateOfBirth && errors.dateOfBirth}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <FormControl helperText={touched.civilStatus && errors.civilStatus} fullWidth>
                  <InputLabel id="status-select-label">Civil Status</InputLabel>
                  <Select
                    name="civilStatus"
                    labelId="status-select-label"
                    id="status-select"
                    value={formik.values.civilStatus}
                    label="civilStatus"
                    onChange={handleChange}
                    {...getFieldProps('civilStatus')}
                    error={Boolean(touched.civilStatus && errors.civilStatus)}
                  >
                    <MenuItem value="single">Single</MenuItem>
                    <MenuItem value="married">Married</MenuItem>
                    <MenuItem value="separated">Separated</MenuItem>
                    <MenuItem value="widowed">Widowed</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  fullWidth
                  name="citizenship"
                  label="Citizenship"
                  {...getFieldProps('citizenship')}
                  error={Boolean(touched.citizenship && errors.citizenship)}
                  helperText={touched.citizenship && errors.citizenship}
                />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField
                  fullWidth
                  name="religion"
                  label="Religion"
                  {...getFieldProps('religion')}
                  error={Boolean(touched.religion && errors.religion)}
                  helperText={touched.religion && errors.religion}
                />

                <TextField
                  fullWidth
                  name="height"
                  label="Height"
                  {...getFieldProps('height')}
                  error={Boolean(touched.height && errors.height)}
                  helperText={touched.height && errors.height}
                />

                <TextField
                  fullWidth
                  name="weight"
                  label="Weight"
                  {...getFieldProps('weight')}
                  error={Boolean(touched.weight && errors.weight)}
                  helperText={touched.weight && errors.weight}
                />

                <TextField
                  fullWidth
                  name="phone_number"
                  label="Phone Number"
                  id="outlined-start-adornment"
                  {...getFieldProps('phoneNumber')}
                  error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                  helperText={touched.phoneNumber && errors.phoneNumber}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">+63</InputAdornment>,
                  }}
                />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField
                  fullWidth
                  name="occupation"
                  label="Occupation"
                  {...getFieldProps('occupation')}
                  error={Boolean(touched.occupation && errors.occupation)}
                  helperText={touched.occupation && errors.occupation}
                />

                <TextField
                  fullWidth
                  name="officialAddress"
                  label="Address"
                  {...getFieldProps('officialAddress')}
                  error={Boolean(touched.officialAddress && errors.officialAddress)}
                  helperText={touched.officialAddress && errors.officialAddress}
                />

                <FormControl helperText={touched.status && errors.status} fullWidth>
                  <InputLabel id="status-select-label">Status</InputLabel>
                  <Select
                    name="status"
                    labelId="status-select-label"
                    id="status-select"
                    value={formik.values.status}
                    label="Status"
                    onChange={handleChange}
                    {...getFieldProps('status')}
                    error={Boolean(touched.status && errors.status)}
                  >
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="inactive">Inactive</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  fullWidth
                  name="tribe"
                  label="Tribe"
                  {...getFieldProps('tribe')}
                  error={Boolean(touched.tribe && errors.tribe)}
                  helperText={touched.tribe && errors.tribe}
                />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField
                  fullWidth
                  name="spouse"
                  label="Spouse"
                  {...getFieldProps('spouse')}
                  error={Boolean(touched.spouse && errors.spouse)}
                  helperText={touched.spouse && errors.spouse}
                />

                <TextField
                  fullWidth
                  name="spouseAddress"
                  label="Spouse Address"
                  {...getFieldProps('spouseAddress')}
                  error={Boolean(touched.spouseAddress && errors.spouseAddress)}
                  helperText={touched.spouseAddress && errors.spouseAddress}
                />

                <TextField
                  fullWidth
                  name="numberOfChildren"
                  label="Number of Children"
                  {...getFieldProps('numberOfChildren')}
                  error={Boolean(touched.numberOfChildren && errors.numberOfChildren)}
                  helperText={touched.numberOfChildren && errors.numberOfChildren}
                />

                <FormControl helperText={touched.purok && errors.purok} fullWidth>
                  <InputLabel id="purok-select-label">Purok</InputLabel>
                  <Select
                    name="purok"
                    labelId="purok-select-label"
                    id="purok-select"
                    value={formik.values.purok}
                    label="Purok"
                    onChange={handleChange}
                    {...getFieldProps('purok')}
                    error={Boolean(touched.purok && errors.purok)}
                  >
                    <MenuItem value="1">Purok 1</MenuItem>
                    <MenuItem value="2">Purok 2</MenuItem>
                    <MenuItem value="3a">Purok 3A</MenuItem>
                    <MenuItem value="3b">Purok 3B</MenuItem>
                    <MenuItem value="4">Purok 4</MenuItem>
                    <MenuItem value="5">Purok 5</MenuItem>
                    <MenuItem value="6">Purok 6</MenuItem>
                    <MenuItem value="7">Purok 7</MenuItem>
                    <MenuItem value="8">Purok 8</MenuItem>
                    <MenuItem value="9">Purok 9</MenuItem>
                    <MenuItem value="10a">Purok 10A</MenuItem>
                    <MenuItem value="11b">Purok 11B</MenuItem>
                    <MenuItem value="12">Purok 12</MenuItem>
                    <MenuItem value="13">Purok 13</MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField
                  fullWidth
                  name="fathersName"
                  label="Father's Name"
                  {...getFieldProps('fathersName')}
                  error={Boolean(touched.fathersName && errors.fathersName)}
                  helperText={touched.fathersName && errors.fathersName}
                />

                <TextField
                  fullWidth
                  name="fathersOccupation"
                  label="Occupation"
                  {...getFieldProps('fathersOccupation')}
                  error={Boolean(touched.fathersOccupation && errors.fathersOccupation)}
                  helperText={touched.fathersOccupation && errors.fathersOccupation}
                />

                <TextField
                  fullWidth
                  name="fathersAddress"
                  label="Address"
                  {...getFieldProps('fathersAddress')}
                  error={Boolean(touched.fathersAddress && errors.fathersAddress)}
                  helperText={touched.fathersAddress && errors.fathersAddress}
                />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField
                  fullWidth
                  name="mothersName"
                  label="Mother's Name"
                  {...getFieldProps('mothersName')}
                  error={Boolean(touched.mothersName && errors.mothersName)}
                  helperText={touched.mothersName && errors.mothersName}
                />

                <TextField
                  fullWidth
                  name="mothersOccupation"
                  label="Occupation"
                  {...getFieldProps('mothersOccupation')}
                  error={Boolean(touched.mothersOccupation && errors.mothersOccupation)}
                  helperText={touched.mothersOccupation && errors.mothersOccupation}
                />

                <TextField
                  fullWidth
                  name="mothersAddress"
                  label="Address"
                  {...getFieldProps('mothersAddress')}
                  error={Boolean(touched.mothersAddress && errors.mothersAddress)}
                  helperText={touched.mothersAddress && errors.mothersAddress}
                />
              </Stack>

              <Typography variant="subtitle3" noWrap>
                Educational Background
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Typography sx={{ minWidth: 91, mt: 2 }}>Elementary</Typography>

                <TextField
                  fullWidth
                  name="elementarySchool"
                  label="Name of School"
                  {...getFieldProps('elementarySchool')}
                  error={Boolean(touched.elementarySchool && errors.elementarySchool)}
                  helperText={touched.elementarySchool && errors.elementarySchool}
                />

                <TextField
                  fullWidth
                  name="elementaryAddress"
                  label="Address of School"
                  {...getFieldProps('elementaryAddress')}
                  error={Boolean(touched.elementaryAddress && errors.elementaryAddress)}
                  helperText={touched.elementaryAddress && errors.elementaryAddress}
                />

                <TextField
                  fullWidth
                  name="elementaryYearGrad"
                  label="Year Graduated"
                  {...getFieldProps('elementaryYearGrad')}
                  error={Boolean(touched.elementaryYearGrad && errors.elementaryYearGrad)}
                  helperText={touched.year && errors.year}
                />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Typography sx={{ minWidth: 91, mt: 2 }}>High School</Typography>
                <TextField
                  fullWidth
                  name="highschoolName"
                  label="Name of School"
                  {...getFieldProps('highschoolName')}
                  error={Boolean(touched.highschoolName && errors.highschoolName)}
                  helperText={touched.highschoolName && errors.highschoolName}
                />

                <TextField
                  fullWidth
                  name="highschoolAddress"
                  label="Address of School"
                  {...getFieldProps('highschoolAddress')}
                  error={Boolean(touched.highschoolAddress && errors.highschoolAddress)}
                  helperText={touched.highschoolAddress && errors.highschoolAddress}
                />

                <TextField
                  fullWidth
                  name="highschoolYearGrad"
                  label="Year Graduated"
                  {...getFieldProps('highschoolYearGrad')}
                  error={Boolean(touched.highschoolYearGrad && errors.highschoolYearGrad)}
                  helperText={touched.highschoolYearGrad && errors.highschoolYearGrad}
                />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Typography sx={{ minWidth: 91, mt: 2 }}>College</Typography>

                <TextField
                  fullWidth
                  name="collegeName"
                  label="Name of School"
                  {...getFieldProps('collegeSchool')}
                  error={Boolean(touched.collegeSchool && errors.collegeSchool)}
                  helperText={touched.collegeSchool && errors.collegeSchool}
                />

                <TextField
                  fullWidth
                  name="collegeAddress"
                  label="Address of School"
                  {...getFieldProps('collegeAddress')}
                  error={Boolean(touched.collegeAddress && errors.collegeAddress)}
                  helperText={touched.collegeAddress && errors.collegeAddress}
                />

                <TextField
                  fullWidth
                  name="collegeYearGrad"
                  label="Year Graduated"
                  {...getFieldProps('collegeYearGrad')}
                  error={Boolean(touched.collegeYearGrad && errors.collegeYearGrad)}
                  helperText={touched.collegeYearGrad && errors.collegeYearGrad}
                />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Typography sx={{ minWidth: 91, mt: 2 }}>Vocational</Typography>

                <TextField
                  fullWidth
                  name="vocationalName"
                  label="Name of School"
                  {...getFieldProps('vocationalSchool')}
                  error={Boolean(touched.vocationalSchool && errors.vocationalSchool)}
                  helperText={touched.vocationalSchool && errors.vocationalSchool}
                />

                <TextField
                  fullWidth
                  name="vocationalAddress"
                  label="Address of School"
                  {...getFieldProps('vocationalAddress')}
                  error={Boolean(touched.vocationalAddress && errors.vocationalAddress)}
                  helperText={touched.vocationalAddress && errors.vocationalAddress}
                />

                <TextField
                  fullWidth
                  name="vocationalYearGrad"
                  label="Year Graduated"
                  {...getFieldProps('vocationalYearGrad')}
                  error={Boolean(touched.vocationalYearGrad && errors.vocationalYearGrad)}
                  helperText={touched.vocationalYearGrad && errors.vocationalYearGrad}
                />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button sx={{ minWidth: 275 }} variant="outlined" component="label">
                  Upload Image
                  <input type="file" hidden />
                </Button>

                <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
                  Submit
                </LoadingButton>
              </Stack>
            </Stack>
          </Form>
        </FormikProvider>
      </CardContent>
    </Card>
  );
}
