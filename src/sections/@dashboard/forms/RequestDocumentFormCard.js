import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
// material
import {
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Stack,
  TextField,
  Card,
  CardContent,
  Typography,
  Box,
  FormHelperText,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { createOfficial } from '../../../service/official';
// ----------------------------------------------------------------------

export default function RequestDocumentFormCard() {
  const navigate = useNavigate();

  const RequestDocumentFormSchema = Yup.object().shape({
    fullName: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('First name is required'),
    address: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Address is required'),
    phoneNumber: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Phone Number is required'),
    typeOfDocument: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required(),
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      phoneNumber: '',
      typeOfDocument: undefined,
      name: '',
      purok: '',
      nameofchild: '',
      sex: '',
      dateofbirth: '',
      weight: '',
      birthorder: '',
      death: '',
      placeofbirth: '',
      nameofmother: '',
      mothercitizenship: '',
      motheroccupation: '',
      nameoffather: '',
      fathercitizenship: '',
      fatheroccupation: '',
      dateofmarriage: '',
      placeofmarriage: '',
      nameofattendant: '',
      addressofattendant: '',
      since: '',
      relationship: '',
      deceasedname: '',
      placeofdeath: '',
      dateofdeath: '',
      causeofdeath: '',
      placeburried: '',
      religion: '',
      maiden: '',
    },
    validationSchema: RequestDocumentFormSchema,
    onSubmit: (data) => {
      console.log({ data });
      createOfficial(data)
        .then((res) => console.log({ res }))
        .catch((err) => console.log({ err }));
      navigate('/dashboard/app', { replace: true });
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, handleChange } = formik;

  return (
    <Card fullwidth>
      <CardContent>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={1}>
              <Typography variant="subtitle3">Personal Information</Typography>

              <Typography variant="subtitle7" sx={{ color: 'gray' }}>
                Please provide your personal information
              </Typography>

              <FormControl
                helperText={touched.civilStatus && errors.civilStatus}
                fullWidth
                error={Boolean(errors.typeOfDocument)}
              >
                <InputLabel id="status-select-label">Select Type of Document</InputLabel>
                <Select
                  name="typeOfDocument"
                  labelId="typeOfDocument"
                  id="typeOfDocument"
                  value={formik.values.typeOfDocument}
                  label="Select Type of Documents"
                  onChange={handleChange}
                  {...getFieldProps('typeOfDocument')}
                >
                  <MenuItem value="barangay-clearance">Barangay Clearance</MenuItem>
                  <MenuItem value="birth-certificate">Barangay Birth Certificate</MenuItem>
                  <MenuItem value="death-certificate">Barangay Death Certificate</MenuItem>
                  <MenuItem value="certification">Barangay Certification</MenuItem>
                  <MenuItem value="certificate-of-indigency">Certificate of Indigency</MenuItem>
                  <MenuItem value="certificate-of-residency">Certificate of Residency</MenuItem>
                  <MenuItem value="tree-planting-certificate">Tree Planting Certificate</MenuItem>
                </Select>
                {Boolean(errors.typeOfDocument) && <FormHelperText>Please select a type of document.</FormHelperText>}
              </FormControl>
              {formik.values.typeOfDocument === 'death-certificate' && (
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                  <>
                    <stack direction={{ xs: 'column' }}>
                      <TextField
                        fullWidth
                        name="fullName"
                        label="Full Name"
                        {...getFieldProps('fullName')}
                        error={Boolean(touched.fullName && errors.fullName)}
                        helperText={touched.fullName && errors.fullName}
                      />
                      <TextField
                        sx={{ minWidth: 91, mt: 2 }}
                        fullWidth
                        name="purok"
                        label="Purok"
                        {...getFieldProps('purok')}
                        error={Boolean(touched.purok && errors.purok)}
                        helperText={touched.purok && errors.purok}
                      />

                      <TextField
                        sx={{ minWidth: 91, mt: 2 }}
                        fullWidth
                        name="relationship"
                        label="Relationship"
                        {...getFieldProps('relationship')}
                        error={Boolean(touched.relationship && errors.relationship)}
                        helperText={touched.relationship && errors.relationship}
                      />

                      <TextField
                        sx={{ minWidth: 91, mt: 2 }}
                        fullWidth
                        name="deceasedname"
                        label="Deceased Name"
                        {...getFieldProps('deceasedname')}
                        error={Boolean(touched.deceasedname && errors.deceasedname)}
                        helperText={touched.deceasedname && errors.deceasedname}
                      />
                    </stack>
                    <stack direction={{ xs: 'row', sm: 'column' }} spacing={2}>
                      <TextField
                        fullWidth
                        name="placeofbirth"
                        label="Place of Birth"
                        {...getFieldProps('placeofbirth')}
                        error={Boolean(touched.placeofbirth && errors.placeofbirth)}
                        helperText={touched.placeofbirth && errors.placeofbirth}
                      />
                      <TextField
                        sx={{ minWidth: 91, mt: 2 }}
                        fullWidth
                        name="dateofbirth"
                        label="Date of Birth"
                        {...getFieldProps('dateofbirth')}
                        error={Boolean(touched.dateofbirth && errors.dateofbirth)}
                        helperText={touched.dateofbirth && errors.dateofbirth}
                      />
                      <TextField
                        sx={{ minWidth: 91, mt: 2 }}
                        fullWidth
                        name="age"
                        label="Age"
                        {...getFieldProps('age')}
                        error={Boolean(touched.age && errors.age)}
                        helperText={touched.age && errors.age}
                      />

                      <TextField
                        sx={{ minWidth: 91, mt: 2 }}
                        fullWidth
                        name="causeofdeath"
                        label="Cause of Death"
                        {...getFieldProps('causeofdeath')}
                        error={Boolean(touched.causeofdeath && errors.causeofdeath)}
                        helperText={touched.causeofdeath && errors.causeofdeath}
                      />
                    </stack>
                    <stack direction={{ xs: 'row', sm: 'column' }}>
                      <TextField
                        fullWidth
                        name="address"
                        label="Address"
                        {...getFieldProps('address')}
                        error={Boolean(touched.address && errors.address)}
                        helperText={touched.address && errors.address}
                      />
                      <TextField
                        sx={{ minWidth: 91, mt: 2 }}
                        fullWidth
                        name="civilstatus"
                        label="Civil Status"
                        {...getFieldProps('civilstatus')}
                        error={Boolean(touched.civilStatus && errors.civilStatus)}
                        helperText={touched.civilStatus && errors.civilStatus}
                      />
                      <TextField
                        sx={{ minWidth: 91, mt: 2 }}
                        fullWidth
                        name="placeburried"
                        label="Place Burried"
                        {...getFieldProps('placeburried')}
                        error={Boolean(touched.placeburried && errors.placeburried)}
                        helperText={touched.placeburried && errors.placeburried}
                      />

                      <TextField
                        sx={{ minWidth: 91, mt: 2 }}
                        fullWidth
                        name="religion"
                        label="Religion"
                        {...getFieldProps('religion')}
                        error={Boolean(touched.religion && errors.religion)}
                        helperText={touched.religion && errors.religion}
                      />
                    </stack>
                    <stack direction={{ xs: 'row', sm: 'column' }} spacing={2}>
                      <TextField
                        fullWidth
                        name="Occupation"
                        label="Occupation"
                        {...getFieldProps('occupation')}
                        error={Boolean(touched.occupation && errors.occupation)}
                        helperText={touched.occupation && errors.occupation}
                      />
                      <TextField
                        sx={{ minWidth: 91, mt: 2 }}
                        fullWidth
                        name="nameoffather"
                        label="Name of Father"
                        {...getFieldProps('nameoffather')}
                        error={Boolean(touched.nameoffather && errors.nameoffather)}
                        helperText={touched.nameoffather && errors.nameoffather}
                      />
                      <TextField
                        sx={{ minWidth: 91, mt: 2 }}
                        fullWidth
                        name="maiden"
                        label="Maiden Name of Mother"
                        {...getFieldProps('maiden')}
                        error={Boolean(touched.maiden && errors.maiden)}
                        helperText={touched.maiden && errors.maiden}
                      />
                      <TextField
                        sx={{ minWidth: 91, mt: 2 }}
                        fullWidth
                        name="placeofdeath"
                        label="Place of Death"
                        {...getFieldProps('placeofdeath')}
                        error={Boolean(touched.placeofdeath && errors.placeofdeath)}
                        helperText={touched.placeofdeath && errors.placeofdeath}
                      />
                    </stack>
                  </>
                </Stack>
              )}
              {formik.values.typeOfDocument === 'barangay-clearance' && (
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <>
                    <TextField
                      fullWidth
                      name="fullName"
                      label="Full name"
                      {...getFieldProps('fullName')}
                      error={Boolean(touched.fullName && errors.fullName)}
                      helperText={touched.fullName && errors.fullName}
                    />
                    <TextField
                      fullWidth
                      name="purok"
                      label="Purok"
                      {...getFieldProps('purok')}
                      error={Boolean(touched.purok && errors.purok)}
                      helperText={touched.purok && errors.purok}
                    />
                    <TextField
                      fullWidth
                      name="phoneNumber"
                      label="Phone Number"
                      {...getFieldProps('phoneNumber')}
                      error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                      helperText={touched.phoneNumber && errors.phoneNumber}
                    />
                  </>
                </Stack>
              )}
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                {formik.values.typeOfDocument === 'certificate-of-residency' && (
                  <>
                    <TextField
                      fullWidth
                      name="fullName"
                      label="Full name"
                      {...getFieldProps('fullName')}
                      error={Boolean(touched.fullName && errors.fullName)}
                      helperText={touched.fullName && errors.fullName}
                    />
                    <TextField
                      fullWidth
                      name="purok"
                      label="Purok"
                      {...getFieldProps('purok')}
                      error={Boolean(touched.purok && errors.purok)}
                      helperText={touched.purok && errors.purok}
                    />
                    <TextField
                      fullWidth
                      name="phoneNumber"
                      label="Phone Number"
                      {...getFieldProps('phoneNumber')}
                      error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                      helperText={touched.phoneNumber && errors.phoneNumber}
                    />
                  </>
                )}
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                {formik.values.typeOfDocument === 'tree-planting-certificate' && (
                  <>
                    <TextField
                      fullWidth
                      name="fullName"
                      label="Full name"
                      {...getFieldProps('fullName')}
                      error={Boolean(touched.fullName && errors.fullName)}
                      helperText={touched.fullName && errors.fullName}
                    />
                    <TextField
                      fullWidth
                      name="age"
                      label="Age"
                      {...getFieldProps('age')}
                      error={Boolean(touched.address && errors.address)}
                      helperText={touched.address && errors.address}
                    />
                    <TextField
                      fullWidth
                      name="purok"
                      label="Purok"
                      {...getFieldProps('purok')}
                      error={Boolean(touched.purok && errors.purok)}
                      helperText={touched.purok && errors.purok}
                    />
                    <TextField
                      fullWidth
                      name="phoneNumber"
                      label="Phone Number"
                      {...getFieldProps('phoneNumber')}
                      error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                      helperText={touched.phoneNumber && errors.phoneNumber}
                    />
                  </>
                )}
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                {formik.values.typeOfDocument === 'certificate-of-indigency' && (
                  <>
                    <TextField
                      fullWidth
                      name="fullName"
                      label="Full name"
                      {...getFieldProps('fullName')}
                      error={Boolean(touched.fullName && errors.fullName)}
                      helperText={touched.fullName && errors.fullName}
                    />
                    <TextField
                      fullWidth
                      name="purok"
                      label="Purok"
                      {...getFieldProps('Purok')}
                      error={Boolean(touched.purok && errors.purok)}
                      helperText={touched.purok && errors.purok}
                    />
                    <TextField
                      fullWidth
                      name="phoneNumber"
                      label="Phone Number"
                      {...getFieldProps('phoneNumber')}
                      error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                      helperText={touched.phoneNumber && errors.phoneNumber}
                    />
                  </>
                )}
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                {formik.values.typeOfDocument === 'birth-certificate' && (
                  <>
                    <stack direction={{ xs: 'column' }} spacing={2}>
                      <TextField
                        fullWidth
                        name="fullName"
                        label="Full Name"
                        {...getFieldProps('fullName')}
                        error={Boolean(touched.fullName && errors.fullName)}
                        helperText={touched.fullName && errors.fullName}
                      />
                      <TextField
                        sx={{ minWidth: 91, mt: 2 }}
                        fullWidth
                        name="purok"
                        label="Purok"
                        {...getFieldProps('purok')}
                        error={Boolean(touched.purok && errors.purok)}
                        helperText={touched.purok && errors.purok}
                      />

                      <TextField
                        sx={{ minWidth: 91, mt: 2 }}
                        fullWidth
                        name="sex"
                        label="Sex"
                        {...getFieldProps('sex')}
                        error={Boolean(touched.sex && errors.sex)}
                        helperText={touched.sex && errors.sex}
                      />

                      <TextField
                        sx={{ minWidth: 91, mt: 2 }}
                        fullWidth
                        name="dateofbirth"
                        label="Date of Birth"
                        {...getFieldProps('nameofbirth')}
                        error={Boolean(touched.dateofbirth && errors.dateofbirth)}
                        helperText={touched.dateofbirth && errors.dateofbirth}
                      />
                    </stack>
                    <stack direction={{ xs: 'row', sm: 'column' }} spacing={2}>
                      <TextField
                        fullWidth
                        name="weight"
                        label="Weight"
                        {...getFieldProps('weight')}
                        error={Boolean(touched.weight && errors.weight)}
                        helperText={touched.weight && errors.weight}
                      />
                      <TextField
                        sx={{ minWidth: 91, mt: 2 }}
                        fullWidth
                        name="birthorder"
                        label="Birth Order"
                        {...getFieldProps('birthorder')}
                        error={Boolean(touched.birthorder && errors.birthorder)}
                        helperText={touched.birthorder && errors.birthorder}
                      />
                      <TextField
                        sx={{ minWidth: 91, mt: 2 }}
                        fullWidth
                        name="death"
                        label="Death"
                        {...getFieldProps('death')}
                        error={Boolean(touched.death && errors.death)}
                        helperText={touched.death && errors.date}
                      />

                      <TextField
                        sx={{ minWidth: 91, mt: 2 }}
                        fullWidth
                        name="placeofbirth"
                        label="Place of Birth"
                        {...getFieldProps('placeofbirth')}
                        error={Boolean(touched.placeofbirth && errors.placeofbirth)}
                        helperText={touched.placeofbirth && errors.placeofbirth}
                      />
                    </stack>
                    <stack direction={{ xs: 'row', sm: 'column' }}>
                      <TextField
                        fullWidth
                        name="nameofmother"
                        label="Name of Mother"
                        {...getFieldProps('nameofmother')}
                        error={Boolean(touched.nameofmother && errors.nameofmother)}
                        helperText={touched.nameofmother && errors.nameofmother}
                      />
                      <TextField
                        sx={{ minWidth: 91, mt: 2 }}
                        fullWidth
                        name="mothercitizenship"
                        label="Mothers Citizenship"
                        {...getFieldProps('mothercitizenship')}
                        error={Boolean(touched.mothercitizenship && errors.mothercitizenship)}
                        helperText={touched.mothercitizenship && errors.mothercitizenship}
                      />
                      <TextField
                        sx={{ minWidth: 91, mt: 2 }}
                        fullWidth
                        name="motheroccupation"
                        label="Mothers Occupation"
                        {...getFieldProps('motheroccupation')}
                        error={Boolean(touched.motheroccupation && errors.motheroccupation)}
                        helperText={touched.motheroccupation && errors.motheroccupation}
                      />

                      <TextField
                        sx={{ minWidth: 91, mt: 2 }}
                        fullWidth
                        name="nameoffather"
                        label="Name of Father"
                        {...getFieldProps('nameoffather')}
                        error={Boolean(touched.nameoffather && errors.nameoffather)}
                        helperText={touched.nameoffather && errors.nameoffather}
                      />
                    </stack>
                    <stack direction={{ xs: 'row', sm: 'column' }} spacing={2}>
                      <TextField
                        fullWidth
                        name="fathercitizenship"
                        label="Fathers Citizenship"
                        {...getFieldProps('fathercitizenship')}
                        error={Boolean(touched.fathercitizenship && errors.fathercitizenship)}
                        helperText={touched.fathercitizenship && errors.fathercitizenship}
                      />
                      <TextField
                        sx={{ minWidth: 91, mt: 2 }}
                        fullWidth
                        name="fatheroccupation"
                        label="Fathers Occupation"
                        {...getFieldProps('fatheroccupation')}
                        error={Boolean(touched.fatheroccupation && errors.fatheroccupation)}
                        helperText={touched.phoneNumber && errors.phoneNumber}
                      />
                      <TextField
                        sx={{ minWidth: 91, mt: 2 }}
                        fullWidth
                        name="dateofmarriage"
                        label="Date of Marriage"
                        {...getFieldProps('dateofmarriage')}
                        error={Boolean(touched.dateofmarriage && errors.dateofmarriage)}
                        helperText={touched.dateofmarriage && errors.dateofmarriage}
                      />
                      <TextField
                        sx={{ minWidth: 91, mt: 2 }}
                        fullWidth
                        name="placeofmarriage"
                        label="Place of Marriage"
                        {...getFieldProps('placeofmarriage')}
                        error={Boolean(touched.placeofmarriage && errors.placeofmarriage)}
                        helperText={touched.placeofmarriage && errors.placeofmarriage}
                      />
                    </stack>
                    <stack direction={{ xs: 'row', sm: 'column' }} spacing={2}>
                      <TextField
                        fullWidth
                        name="nameofattendant"
                        label="Name of Attendant"
                        {...getFieldProps('nameofattendant')}
                        error={Boolean(touched.nameofattendant && errors.nameofattendant)}
                        helperText={touched.nameofattendant && errors.nameofattendant}
                      />
                      <TextField
                        sx={{ minWidth: 91, mt: 2 }}
                        fullWidth
                        name="addressofattendant"
                        label="Address Of Attendant"
                        {...getFieldProps('addressofattendant')}
                        error={Boolean(touched.addressofattendant && errors.addressofattendant)}
                        helperText={touched.addressofattendant && errors.addressofattendant}
                      />
                      <TextField
                        sx={{ minWidth: 91, mt: 2 }}
                        fullWidth
                        name="since"
                        label="Since"
                        {...getFieldProps('since')}
                        error={Boolean(touched.since && errors.since)}
                        helperText={touched.since && errors.since}
                      />
                    </stack>
                  </>
                )}
              </Stack>
              {formik.values.typeOfDocument === 'barangay-clearance' && (
                <Box sx={{ color: 'gray' }}>
                  <Typography variant="subtitle4">Barangay Certificate Requirements</Typography>
                  <Typography>1. Purok Cerification</Typography>
                  <Typography>2. Valid ID</Typography>
                  <Typography>3. Valid ID</Typography>
                  <Typography>4. Purok Certification</Typography>
                </Box>
              )}
              {formik.values.typeOfDocument === 'birth-certificate' && (
                <Box sx={{ color: 'gray', mt: -2 }}>
                  <Typography variant="subtitle4">Barangay Birth Certificate Requirements</Typography>
                  <Typography>1. Purok Cerification</Typography>
                  <Typography>2. Valid ID</Typography>
                  <Typography>3. Valid ID</Typography>
                  <Typography>4. Purok Certification</Typography>
                </Box>
              )}
              {formik.values.typeOfDocument === 'death-certificate' && (
                <Box sx={{ color: 'gray' }}>
                  <Typography sx={{ color: 'gray' }} variant="subtitle4">
                    Barangay Death Certificate Requirements
                  </Typography>
                  <Typography>1. Purok Cerification</Typography>
                  <Typography>2. Valid ID</Typography>
                  <Typography>3. Valid ID</Typography>
                  <Typography>4. Purok Certification</Typography>
                </Box>
              )}
              {formik.values.typeOfDocument === 'certification' && (
                <Box sx={{ color: 'gray', mt: -2 }}>
                  <Typography variant="subtitle4">Barangay Certification Requirements</Typography>
                  <Typography>1. Purok Cerification</Typography>
                  <Typography>2. Valid ID</Typography>
                  <Typography>3. Valid ID</Typography>
                  <Typography>4. Purok Certification</Typography>
                </Box>
              )}
              {formik.values.typeOfDocument === 'certificate-of-indigency' && (
                <Box sx={{ color: 'gray', mt: -2 }}>
                  <Typography variant="subtitle4">Certificate of Indigency Requirements</Typography>
                  <Typography>1. Purok Cerification</Typography>
                  <Typography>2. Valid ID</Typography>
                  <Typography>3. Valid ID</Typography>
                  <Typography>4. Purok Certification</Typography>
                </Box>
              )}
              {formik.values.typeOfDocument === 'certificate-of-residency' && (
                <Box sx={{ color: 'gray', mt: -2 }}>
                  <Typography variant="subtitle4">Certificate of Residency Requirements</Typography>
                  <Typography>1. Purok Cerification</Typography>
                  <Typography>2. Valid ID</Typography>
                  <Typography>3. Valid ID</Typography>
                  <Typography>4. Purok Certification</Typography>
                </Box>
              )}
              {formik.values.typeOfDocument === 'tree-planting-certificate' && (
                <Box>
                  <Typography sx={{ color: 'gray', mt: -2 }} variant="subtitle4">
                    Tree Planting Certificate Requirements
                  </Typography>
                  <Typography>1. Purok Certification</Typography>
                  <Typography>2. Valid ID</Typography>
                  <Typography>3. Valid ID</Typography>
                  <Typography>4. Purok Certification</Typography>
                </Box>
              )}
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button sx={{ minWidth: 275 }} variant="outlined" component="label">
                  Upload Requirements
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
