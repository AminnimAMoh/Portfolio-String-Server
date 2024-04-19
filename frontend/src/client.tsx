import '@babel/polyfill';
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from '@hooks/useRootInfo/store';
import Loading from '@components/LoadingIndicator/LoadingIndicator';
import { ThemeProvider } from 'styled-components';
import { theme } from './frontend-common';
const App = lazy(() => import('./App'));

ReactDOM.hydrate(
  <Suspense fallback={<Loading />}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </Suspense>,
  document.getElementById('root'),
  () => {
    document.getElementById('jss-server-side')?.remove();
  },
);
