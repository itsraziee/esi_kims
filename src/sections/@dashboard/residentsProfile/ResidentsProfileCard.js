import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField, InputAdornment, Card, CardContent, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// ----------------------------------------------------------------------

export default function ResidentsProfileCard() {
  const navigate = useNavigate();

  const ResidentsProfileSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('First name is required'),
    middleName: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Middle name is required'),
    lastName: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Last name is required'),
    age: Yup.number().typeError('Age must be a number').integer('Age must be an integer').required('Age is required'),
    sex: Yup.string().oneOf(['male', 'female']).required('Required'),
    dateOfBirth: '',
    civilStatus: Yup.string().oneOf(['single', 'married', 'widowed']).required('Required'),
    citizenship: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Citizenship is required'),
    religion: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Religion is required'),
    height: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Height is required'),
    weight: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Weight is required'),
    // phone:  Yup.string().typeError("Phone must be a number").integer("Age must be an integer").matches ((\+[0-9]{2})|0)[.\- ]?9[0-9]{2}[.\- ]?[0-9]{3}[.\- ]?[0-9]{4}.required('Age required'),
    occupation: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Occupation is required'),
    status: Yup.string().oneOf(['active', 'inactive']).required('Status is required'),
    spouse: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Spouse is required'),
    spouseAddress: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Address is required'),
    numberOfChildren: Yup.number()
      .typeError('Number of Children must be a number')
      .integer('Number of Children must be an integer')
      .required('Number of Children is required'),
    fathersName: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Father Name is required'),
    fathersOccupation: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Occupation is required'),
    mothersName: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Mother Name is required'),
    mothersOccupation: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Occupation is required'),
    elementaryNameOfSchool: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Name of School is required'),
    elementaryAddressOfSchool: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Address of School is required'),
    elementaryYearGraduated: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Year of Graduated is required'),
    highSchoolNameOfSchool: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Name of School is required'),
    highSchoolAddressOfSchool: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Address of School is required'),
    highSchoolYearGraduated: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Year of Graduated is required'),
    vocationalNameOfSchool: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Name of School is required'),
    vocationalAddressOfSchool: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Address of School is required'),
    vocationalYearGraduated: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Year of Graduated is required'),
    collegeNameOfSchool: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Name of School is required'),
    collegeAddressOfSchool: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Address of School is required'),
    collegeYearGraduated: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Year of Graduated is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      middleName: '',
      lastName: '',
      age: '',
      sex: '',
      dateOfBirth: '',
      civilStatus: '',
      citizenship: '',
      religion: '',
      height: '',
      weight: '',
      phone: '',
      occupation: '',
      address: '',
      status: '',
      spouse: '',
      spouseAddress: '',
      numberOfChildren: '',
      fathersName: '',
      fathersOccupation: '',
      mothersName: '',
      mothersOccupation: '',
      elementaryNameOfSchool: '',
      elementaryAddressOfSchool: '',
      elementaryYearGraduated: '',
      highSchoolNameOfSchool: '',
      highSchoolAddressOfSchool: '',
      highSchoolYearGraduated: '',
      vocationalNameOfSchool: '',
      vocationalAddressOfSchool: '',
      vocationalYearGraduated: '',
      collegeNameOfSchool: '',
      collegeAddressOfSchool: '',
      collegeYearGraduated: '',
    },
    validationSchema: ResidentsProfileSchema,
    onSubmit: () => {
      navigate('/dashboard', { replace: true });
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, sex, civilStatus, handleChange } = formik;

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
                  label="First name"
                  {...getFieldProps('firstName')}
                  error={Boolean(touched.firstName && errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />

                <TextField
                  fullWidth
                  label="Middle name"
                  {...getFieldProps('middleName')}
                  error={Boolean(touched.middleName && errors.middleName)}
                  helperText={touched.middleName && errors.middleName}
                />

                <TextField
                  fullWidth
                  label="Last name"
                  {...getFieldProps('lastName')}
                  error={Boolean(touched.lastName && errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />

                <TextField
                  label="Age"
                  {...getFieldProps('age')}
                  error={Boolean(touched.age && errors.age)}
                  helperText={touched.age && errors.age}
                />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <FormControl fullWidth>
              <InputLabel id="sex-select-label">Sex</InputLabel>
                <Select
                  labelId="sex-select-label"
                  id="sex-select"
                  value={sex}
                  label="sex" 
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Male</MenuItem>
                  <MenuItem value={20}>Female</MenuItem>
                </Select>
                </FormControl>
                
                <TextField
                  fullWidth
                  id="dateOfBirth"
                  label="Date of Birth"
                  type="date"
                  defaultValue="2022-05-24"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {/* <TextField
                  fullWidth
                  label="Date of Birth"
                  {...getFieldProps('dateOfBirth')}
                  error={Boolean(touched.dateOfBirth && errors.dateOfBirth)}
                  helperText={touched.dateOfBirth && errors.dateOfBirth}
                /> */}

              <FormControl fullWidth>
              <InputLabel id="status-select-label">Civil Status</InputLabel>
                <Select
                  labelId="status-select-label"
                  id="status-select"
                  value={civilStatus}
                  label="civilStatus" 
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Single</MenuItem>
                  <MenuItem value={20}>Married</MenuItem>
                  <MenuItem value={10}>Separated</MenuItem>
                  <MenuItem value={10}>Widow</MenuItem>
                </Select>
              </FormControl>

                <TextField
                  fullWidth
                  label="Citizenship"
                  {...getFieldProps('citizenship')}
                  error={Boolean(touched.citizenship && errors.citizenship)}
                  helperText={touched.citizenship && errors.citizenship}
                />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField
                  fullWidth
                  label="Religion"
                  {...getFieldProps('religion')}
                  error={Boolean(touched.religion && errors.religion)}
                  helperText={touched.religion && errors.religion}
                />

                <TextField
                  fullWidth
                  label="Height"
                  {...getFieldProps('height')}
                  error={Boolean(touched.height && errors.height)}
                  helperText={touched.height && errors.height}
                />

                <TextField
                  fullWidth
                  label="Weight"
                  {...getFieldProps('weight')}
                  error={Boolean(touched.weight && errors.weight)}
                  helperText={touched.weight && errors.weight}
                />

                <TextField
                  fullWidth
                  label="Phone number"
                  id="outlined-start-adornment"
                  {...getFieldProps('phone')}
                  error={Boolean(touched.phone && errors.phone)}
                  helperText={touched.phone && errors.phone}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">+63</InputAdornment>,
                  }}
                />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField
                  fullWidth
                  label="Occupation"
                  {...getFieldProps('occupation')}
                  error={Boolean(touched.occupation && errors.occupation)}
                  helperText={touched.occupation && errors.occupation}
                />

                <TextField
                  fullWidth
                  label="Address"
                  {...getFieldProps('address')}
                  error={Boolean(touched.address && errors.address)}
                  helperText={touched.address && errors.address}
                />

                <TextField
                  fullWidth
                  label="Status"
                  select
                  {...getFieldProps('status')}
                  error={Boolean(touched.status && errors.status)}
                  helperText={touched.status && errors.status}
                >
                  <option value="">Please select a status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </TextField>
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField
                  fullWidth
                  label="Spouse"
                  {...getFieldProps('spouse')}
                  error={Boolean(touched.spouse && errors.spouse)}
                  helperText={touched.spouse && errors.spouse}
                />

                <TextField
                  fullWidth
                  label="Address"
                  {...getFieldProps('spouseAddress')}
                  error={Boolean(touched.spouseAddress && errors.spouseAddress)}
                  helperText={touched.spouseAddress && errors.spouseAddress}
                />

                <TextField
                  fullWidth
                  label="Number of Children"
                  {...getFieldProps('numberOfChildren')}
                  error={Boolean(touched.numberOfChildren && errors.numberOfChildren)}
                  helperText={touched.numberOfChildren && errors.numberOfChildren}
                />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField
                  fullWidth
                  label="Father's Name"
                  {...getFieldProps('fathersName')}
                  error={Boolean(touched.fathersName && errors.fathersName)}
                  helperText={touched.fathersName && errors.fathersName}
                />

                <TextField
                  fullWidth
                  label="Occupation"
                  {...getFieldProps('fathersOccupation')}
                  error={Boolean(touched.fathersOccupation && errors.fathersOccupation)}
                  helperText={touched.fathersOccupation && errors.fathersOccupation}
                />

                <TextField
                  fullWidth
                  label="Address"
                  {...getFieldProps('fathersAddress')}
                  error={Boolean(touched.fathersAddress && errors.fathersAddress)}
                  helperText={touched.fathersAddress && errors.fathersAddress}
                />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField
                  fullWidth
                  label="Mother's Name"
                  {...getFieldProps('mothersName')}
                  error={Boolean(touched.mothersName && errors.mothersName)}
                  helperText={touched.mothersName && errors.mothersName}
                />

                <TextField
                  fullWidth
                  label="Occupation"
                  {...getFieldProps('mothersOccupation')}
                  error={Boolean(touched.mothersOccupation && errors.mothersOccupation)}
                  helperText={touched.mothersOccupation && errors.mothersOccupation}
                />

                <TextField
                  fullWidth
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
                <TextField sx={{ minWidth: 175 }}
                  disabled
                  label="Elementary"
                  {...getFieldProps('elementary')}
                  error={Boolean(touched.elementary && errors.elementary)}
                  helperText={touched.elementary && errors.elementary}
                />

                <TextField
                  fullWidth
                  label="Name of School"
                  {...getFieldProps('elementaryNameOfSchool')}
                  error={Boolean(touched.elementaryNameOfSchool && errors.elementaryNameOfSchool)}
                  helperText={touched.elementaryNameOfSchool && errors.elementaryNameOfSchool}
                />

                <TextField
                  fullWidth
                  label="Address of School"
                  {...getFieldProps('elementaryAddressOfSchool')}
                  error={Boolean(touched.elementaryAddressOfSchool && errors.elementaryAddressOfSchool)}
                  helperText={touched.elementaryAddressOfSchool && errors.elementaryAddressOfSchool}
                />

                <TextField sx={{ minWidth: 150 }}
                  label="Year Graduated"
                  {...getFieldProps('elementaryYearGraduated')}
                  error={Boolean(touched.elementaryYearGraduated && errors.elementaryYearGraduated)}
                  helperText={touched.year && errors.year}
                />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField sx={{ minWidth: 175 }}
                  disabled
                  label="High school"
                  {...getFieldProps('highSchool')}
                  error={Boolean(touched.highSchool && errors.highSchool)}
                  helperText={touched.highSchool && errors.highSchool}
                />

                <TextField
                  fullWidth
                  label="Name of School"
                  {...getFieldProps('highSchoolNameOfSchool')}
                  error={Boolean(touched.highSchoolNameOfSchool && errors.highSchoolNameOfSchool)}
                  helperText={touched.highSchoolNameOfSchool && errors.highSchoolNameOfSchool}
                />

                <TextField
                  fullWidth
                  label="Address of School"
                  {...getFieldProps('highSchoolAddressOfSchool')}
                  error={Boolean(touched.highSchoolAddressOfSchool && errors.highSchoolAddressOfSchool)}
                  helperText={touched.highSchoolAddressOfSchool && errors.highSchoolAddressOfSchool}
                />

                <TextField sx={{ minWidth: 150 }}
                  label="Year Graduated"
                  {...getFieldProps('highSchoolYearGraduated')}
                  error={Boolean(touched.highSchoolYearGraduated && errors.highSchoolYearGraduated)}
                  helperText={touched.highSchoolYearGraduated && errors.highSchoolYearGraduated}
                />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField sx={{ minWidth: 175 }}
                  disabled
                  label="College"
                  {...getFieldProps('college')}
                  error={Boolean(touched.college && errors.college)}
                  helperText={touched.college && errors.college}
                />

                <TextField
                  fullWidth
                  label="Name of School"
                  {...getFieldProps('collegeNameOfSchool')}
                  error={Boolean(touched.collegeNameOfSchool && errors.collegeNameOfSchool)}
                  helperText={touched.collegeNameOfSchool && errors.collegeNameOfSchool}
                />

                <TextField
                  fullWidth
                  label="Address of School"
                  {...getFieldProps(' collegeAddressOfSchool')}
                  error={Boolean(touched.collegeAddressOfSchool && errors.collegeAddressOfSchool)}
                  helperText={touched.collegeAddressOfSchool && errors.collegeAddressOfSchool}
                />

                <TextField sx={{ minWidth: 150 }}
                  label="Year Graduated"
                  {...getFieldProps('collegeYearGraduated')}
                  error={Boolean(touched.collegeYearGraduated && errors.collegeYearGraduated)}
                  helperText={touched.collegeYearGraduated && errors.collegeYearGraduated}
                />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField sx={{ minWidth: 175 }}
                  disabled
                  label="Vocational"
                  {...getFieldProps('vocational')}
                  error={Boolean(touched.vocational && errors.vocational)}
                  helperText={touched.vocational && errors.vocational}
                />

                <TextField
                  fullWidth
                  label="Name of School"
                  {...getFieldProps('vocationalNameOfSchool')}
                  error={Boolean(touched.vocationalNameOfSchool && errors.vocationalNameOfSchool)}
                  helperText={touched.vocationalNameOfSchool && errors.vocationalNameOfSchool}
                />

                <TextField
                  fullWidth
                  label="Address of School"
                  {...getFieldProps(' vocationalAddressOfSchool')}
                  error={Boolean(touched.vocationalAddressOfSchool && errors.vocationalAddressOfSchool)}
                  helperText={touched.vocationalAddressOfSchool && errors.vocationalAddressOfSchool}
                />

                <TextField sx={{ minWidth: 150 }}
                  label="Year Graduated"
                  {...getFieldProps('vocationalYearGraduated')}
                  error={Boolean(touched.vocationalYearGraduated && errors.vocationalYearGraduated)}
                  helperText={touched.vocationalYearGraduated && errors.vocationalYearGraduated}
                />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button sx={{ minWidth: 275 }}
                variant="outlined"
                component="label"
              >
                Upload Image
                <input
                  type="file"
                  hidden
                />
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
