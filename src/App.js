import { SnackbarProvider } from 'notistack'; // routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';
import DocumentRequestNotification from './components/DocumentRequestNotification';
import IdleChecker from './components/IdleChecker';
import ScrollToTop from './components/ScrollToTop';
import './firebase-init';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <SnackbarProvider preventDuplicate>
      <IdleChecker>
        <ThemeProvider>
          <DocumentRequestNotification>
            <ScrollToTop />
            <BaseOptionChartStyle />
            <Router />
          </DocumentRequestNotification>
        </ThemeProvider>
      </IdleChecker>
    </SnackbarProvider>
  );
}
