// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'about',
    path: '/dashboard/about',
    icon: getIcon('emojione-monotone:information'),
  },
  {
    title: 'legislative',
    path: '/dashboard/legislative',
    icon: getIcon('fa6-solid:building-columns'),
  },
  {
    title: 'full disclosure board',
    path: '/dashboard/disclosureBoard',
    icon: getIcon('mdi:file-document-multiple'),
  },
  {
    title: 'Document Request Forms',
    path: '/dashboard/RequestDocumentForm',
    icon: getIcon('ion:documents'),
  },
  {
    auth_required: true,
    treasurer_not_allowed: true,
    title: 'blotter',
    path: '/dashboard/blotter',
    icon: getIcon('icon-park-solid:image-files'),
  },
  {
    treasurer_not_allowed: true,
    auth_required: true,
    title: 'summon',
    path: '/dashboard/summon',
    icon: getIcon('fa6-solid:file-pen'),
  },
  {
    title: 'demographics',
    path: '/dashboard/demographics',
    icon: getIcon('foundation:results-demographics'),
  },
  {
    title: 'officials',
    path: '/dashboard/official',
    icon: getIcon('fluent:people-community-28-filled'),
  },
  {
    auth_required: true,
    title: 'list of purok',
    treasurer_not_allowed: true,
    path: '/dashboard/listOfPurok',
    icon: getIcon('ri:building-2-fill'),
  },
  {
    non_auth_required: true,
    title: 'login',
    path: '/login',
    icon: getIcon('eva:lock-fill'),
  },
  {
    auth_required: true,
    title: 'billing transaction',
    path: '/dashboard/billingTransaction',
    icon: getIcon('ic:round-payments'),
  },
  {
    auth_required: true,
    captain_required: true,
    title: 'register',
    path: '/register',
    icon: getIcon('eva:person-add-fill'),
  },
];

export default navConfig;
