import { SnackbarProvider } from 'notistack'; // routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';
import './firebase-init';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <SnackbarProvider preventDuplicate>
      <ThemeProvider>
        <ScrollToTop />
        <BaseOptionChartStyle />
        <Router />
      </ThemeProvider>
    </SnackbarProvider>
  );
}
