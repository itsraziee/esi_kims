import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Blog from './pages/Blog';
import User from './pages/User';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';
import ListOfPurok from './pages/ListOfPurok';
import About from './pages/About';
import ResidentsProfile from './pages/ResidentsProfile';
import Legislative from './pages/Legislative';
import DocumentServices from './pages/DocumentServices';
import Summon from './pages/Summon';
import OfficialsProfile from './pages/OfficialsProfile';
import Blotter from './pages/Blotter';
import Officials from './pages/Officials';
import Demographics from './pages/Demographics';
import Profile from './pages/Profile';
import LegislativeForm from './pages/LegislativeForm';
import BarangayBirthCertification from './pages/BarangayBirthCertification';
import BarangayClearance from './pages/BarangayClearance';
import CertificateOfResidency from './pages/CertificateOfResidency';
import BarangayDeathCertification from './pages/BarangayDeathCertification';
import CertificateOfIndigency from './pages/CertificateOfIndigency';
import BarangayCertification from './pages/BarangayCertification';
import RequestDocumentForm from './pages/RequestDocumentForm';
import BillingTransaction from './pages/BillingTransaction';
import BlotterForm from './pages/BlotterForm';
import BHW from './pages/BHW';
import BNS from './pages/BNS';
import BO from './pages/BO';
import BSPO from './pages/BSPO';
import CVO from './pages/CVO';
import PL from './pages/PL';
import NewsUpdateForm from './pages/NewsUpdateForm';
// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
        { path: 'listOfPurok', element: <ListOfPurok /> },
        { path: 'about', element: <About /> },
        { path: 'residentsProfile', element: <ResidentsProfile /> },
        { path: 'legislative', element: <Legislative /> },
        { path: 'documentServices', element: <DocumentServices /> },
        { path: 'summon', element: <Summon /> },
        { path: 'blotter', element: <Blotter /> },
        { path: 'official', element: <Officials /> },
        { path: 'demographics', element: <Demographics /> },
        { path: 'officialsProfile', element: <OfficialsProfile /> },
        { path: 'profile', element: <Profile /> },
        { path: 'legislativeForm', element: <LegislativeForm /> },
        { path: 'RequestDocumentForm', element: <RequestDocumentForm /> },
        { path: 'blotterForm', element: <BlotterForm /> },
        
        { path: 'barangaybirthcertification', element: <BarangayBirthCertification /> },
        { path: 'barangaycertification', element: <BarangayCertification /> },
        { path: 'barangayclearance', element: <BarangayClearance /> },
        { path: 'barangaydeathcertification', element: <BarangayDeathCertification /> },
        { path: 'certificateofresidency', element: <CertificateOfResidency /> },
        { path: 'certificateofindigency', element: <CertificateOfIndigency /> },
        { path: 'billingTransaction', element: <BillingTransaction /> },
        { path: 'bhw', element: <BHW /> },
        { path: 'bns', element: <BNS /> },
        { path: 'bo', element: <BO /> },
        { path: 'bspo', element: <BSPO /> },
        { path: 'cvo', element: <CVO /> },
        { path: 'pl', element: <PL /> },
        { path: 'newsUpdateForm', element: <NewsUpdateForm /> },
        
      ],
    },
    
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },

  ]);
}
