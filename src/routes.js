import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import About from './pages/About';
import BHW from './pages/BHW';
import BillingTransaction from './pages/BillingTransaction';
import Blog from './pages/Blog';
import Blotter from './pages/Blotter';
import BlotterForm from './pages/BlotterForm';
import BNS from './pages/BNS';
import BO from './pages/BO';
import BSPO from './pages/BSPO';
import CVO from './pages/CVO';
import DashboardApp from './pages/DashboardApp';
import Demographics from './pages/Demographics';
import DocumentServices from './pages/DocumentServices';
import EditOfficialsProfile from './pages/EditOfficialsProfile';
import Legislative from './pages/Legislative';
import LegislativeForm from './pages/LegislativeForm';
import ListOfPurok from './pages/ListOfPurok';
import Login from './pages/Login';
import NewsUpdateForm from './pages/NewsUpdateForm';
import Officials from './pages/Officials';
import OfficialsProfile from './pages/OfficialsProfile';
import NotFound from './pages/Page404';
import PL from './pages/PL';
import Products from './pages/Products';
import Profile from './pages/Profile';
import Register from './pages/Register';
import RequestDocumentForm from './pages/RequestDocumentForm';
import ResidentsProfile from './pages/ResidentsProfile';
import Summon from './pages/Summon';
import SummonForm from './pages/SummonForm';
import User from './pages/User';
import ViewLegislative from './pages/ViewLegislative';
import ViewSummonPdf from './pages/ViewSummonPdf';
import FeedbackDialog from './pages/FeedbackDialog';
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
        { path: 'viewLegislative', element: <ViewLegislative /> },
        { path: 'viewSummonPdf', element: <ViewSummonPdf /> },
        { path: 'documentServices', element: <DocumentServices /> },
        { path: 'summon', element: <Summon /> },
        { path: 'blotter', element: <Blotter /> },
        { path: 'official', element: <Officials /> },
        { path: 'demographics', element: <Demographics /> },
        { path: 'officialsProfile', element: <OfficialsProfile /> },
        { path: 'editOfficialsProfile', element: <EditOfficialsProfile /> },
        { path: 'profile', element: <Profile /> },
        { path: 'legislativeForm', element: <LegislativeForm /> },
        { path: 'RequestDocumentForm', element: <RequestDocumentForm /> },
        { path: 'blotterForm', element: <BlotterForm /> },
        { path: 'summonForm', element: <SummonForm /> },
        { path: 'billingTransaction', element: <BillingTransaction /> },
        { path: 'bhw', element: <BHW /> },
        { path: 'bns', element: <BNS /> },
        { path: 'bo', element: <BO /> },
        { path: 'bspo', element: <BSPO /> },
        { path: 'cvo', element: <CVO /> },
        { path: 'pl', element: <PL /> },
        { path: 'newsUpdateForm', element: <NewsUpdateForm /> },
        { path: 'feedbackDialog', element: <FeedbackDialog /> },
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
