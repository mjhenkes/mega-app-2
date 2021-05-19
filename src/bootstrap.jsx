import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import '@cerner/terra-application/lib/application-container';
import '@cerner/terra-application/lib/page'; // Required for our current implementation of module federation.

import ApplicationProvider from './demo-application/providers/ApplicationProvider';

import Application from './Application';

ReactDOM.render(
  <HashRouter>
    <ApplicationProvider>
      <Application />
    </ApplicationProvider>
  </HashRouter>,
  document.getElementById('root'),
);
