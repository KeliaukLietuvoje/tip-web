import { DesignSystemProvider } from '@aplinkosministerija/design-system';
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

const env = import.meta.env;

const basename = env?.VITE_BASE_URL || '/';

if (env.VITE_SENTRY_DSN) {
  Sentry.init({
    environment: env.VITE_ENVIRONMENT,
    dsn: env.VITE_SENTRY_DSN,
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
    release: env.VITE_VERSION,
    tracePropagationTargets: [env.VITE_MAPS_HOST],
  });
}

const queryClient = new QueryClient();

root.render(
  <Provider store={store}>
    <DesignSystemProvider>
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
    </DesignSystemProvider>
  </Provider>,
);
