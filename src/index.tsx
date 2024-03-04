import * as Sentry from '@sentry/react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigationType,
} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import App from './app';
import redux from './state/store';
import { GlobalStyle, theme } from './styles/index';

const { store, persistor } = redux;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const basename = process.env.PUBLIC_URL || '/';
const env = process.env;

const queryClient = new QueryClient();

if (env.REACT_APP_SENTRY_DSN) {
  Sentry.init({
    environment: env.REACT_APP_ENVIRONMENT,
    dsn: env.REACT_APP_SENTRY_DSN,
    integrations: [
      new Sentry.BrowserTracing({
        routingInstrumentation: Sentry.reactRouterV6Instrumentation(
          useEffect,
          useLocation,
          useNavigationType,
          createRoutesFromChildren,
          matchRoutes,
        ),
      }),
    ],
    tracesSampleRate: 1,
    release: env.REACT_APP_VERSION,
    tracePropagationTargets: [env.REACT_APP_MAPS_HOST!],
  });
}

root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <PersistGate persistor={persistor}>
        <BrowserRouter basename={basename}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </QueryClientProvider>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
