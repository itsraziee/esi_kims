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
    auth_required: true,
    title: 'document services',
    path: '/dashboard/documentServices',
    icon: getIcon('ion:documents'),
  },
  {
    auth_required: true,
    title: 'blotter',
    path: '/dashboard/blotter',
    icon: getIcon('icon-park-solid:image-files'),
  },
  {
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
    title: 'list of purok',
    path: '/dashboard/listOfPurok',
    icon: getIcon('ri:building-2-fill'),
  },
  {
    auth_required: true,
    title: 'residents',
    path: '/dashboard/user',
    icon: getIcon('fluent:people-audience-24-filled'),
  },
  {
    title: 'login',
    path: '/login',
    icon: getIcon('eva:lock-fill'),
  },
  {
    auth_required: true,
    title: 'register',
    path: '/register',
    icon: getIcon('eva:person-add-fill'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon('eva:alert-triangle-fill'),
  },
];

export default navConfig;
