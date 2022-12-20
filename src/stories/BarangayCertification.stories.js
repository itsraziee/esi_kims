import { default as BarangayCertificationComponent } from '../sections/documents/BarangayCertification';

export default {
  title: 'Documents/Barangay Certification',
  component: BarangayCertificationComponent,
};

const Template = (args) => <BarangayCertificationComponent {...args} />;

export const BarangayCertification = Template.bind({});
BarangayCertification.args = {
  name: 'Lance Luy',
  purok: 'Purok 5',
  day: 23,
  month: 'October',
  year: 2022,
  or: 2900260,
  ordateissued: '1-17-2022',
  placeissued: 'Kimanait, Pangantucan, Bukidnon',
  ctc: 123,
  ctcdateissued: '1-17-2022',
  secretary: 'HAZEL JOY M. MANZAN',
  barangayCaptain: 'JERRY P. PARADILLO',
};
