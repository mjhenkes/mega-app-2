/* global __webpack_init_sharing__ __webpack_share_scopes__ */

import React from 'react';
// import TemplatePage from './TemplatePage';
import RemotePages from '../../Pages.json';

const loadRemoteScript = (url) => (
  new Promise((resolve, reject) => {
    // console.log('loadRemoteScript', url);
    // need to only do this once per url.
    if (!url) {
      reject(new Error('No url Provided.'));
    } else {
      const element = document.createElement('script');

      element.src = url;
      element.type = 'text/javascript';
      element.async = true;

      element.onload = () => {
        // console.log(`Dynamic Script Loaded: ${url}`);
        element.parentNode.removeChild(element);
        resolve();
      };

      element.onerror = (err) => {
        // console.error(`Dynamic Script Error: ${url}`);
        reject(err);
      };

      document.head.appendChild(element);
    }
  })
);

const loadComponent = ({ url, scope, module }) => (
  async () => {
    // console.log(url, scope, module);
    await loadRemoteScript(url);

    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__('default');

    const container = window[scope]; // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    await container.init(__webpack_share_scopes__.default);
    const factory = await window[scope].get(module);
    const Module = factory();
    return Module;
  }
);

const PagesMap = Object.entries(RemotePages).reduce((acc, [key, page]) => {
  // console.log(key, page);
  acc[key] = React.lazy(loadComponent(page));
  return acc;
}, {});

export default PagesMap;

// const MyDay = React.lazy(() => import('organizer/PatientList'));
// const PatientSearch = React.lazy(() => import('organizer/PatientSearch'));
// // import ChartReview from '../../chart/pages/ChartReview';
// // import Handoff from '../../chart/pages/Handoff';
// // import ActiveOrders from '../../chart/pages/ActiveOrders';
// // import InactiveOrders from '../../chart/pages/InactiveOrders';
// // import NoteTemplates from '../../chart/pages/NoteTempates';
// // import InProgressNotes from '../../chart/pages/InProgressNotes';

// export default {
//   MyDay,
//   PatientSearch,
//   ChartReview: PatientSearch,
//   Handoff: PatientSearch,
//   ActiveOrders: PatientSearch,
//   InactiveOrders: PatientSearch,
//   NoteTemplates: PatientSearch,
//   InProgressNotes: PatientSearch,
// };
