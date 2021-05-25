/* global __webpack_init_sharing__ __webpack_share_scopes__ */
import React from 'react';
import PagesData from '../../config/Pages.json';

// This file needs lots of clean up :/

const localStorage = window.localStorage;
const OverridePagesData = JSON.parse(localStorage.getItem('OverridePagesData')) || {};

const loadRemoteScript = (url) => (
  new Promise((resolve, reject) => {
    // console.log('loadRemoteScript', url);
    if (!url) {
      reject(new Error('No url Provided.'));
    } else {
      const element = document.createElement('script');

      element.src = url;
      element.type = 'text/javascript';
      element.async = true;

      element.onload = () => {
        console.log(`Dynamic Script Loaded: ${url}`);
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

const PagesMap = Object.entries(PagesData).reduce((acc, [key, page]) => {
  acc[key] = React.lazy(loadComponent(page));
  return acc;
}, {});

const OverridePagesMap = Object.entries(OverridePagesData).reduce((acc, [key, page]) => {
  acc[key] = React.lazy(loadComponent(page));
  return acc;
}, {});

const getPage = (pageKey) => {
  if (OverridePagesData[pageKey]) {
    return OverridePagesMap[pageKey];
  }

  return PagesMap[pageKey];
};

const getPagesData = () => Object.keys(PagesData).reduce((acc, pageKey) => {
  if (OverridePagesData[pageKey]) {
    acc[pageKey] = {
      ...OverridePagesData[pageKey],
    };
  } else {
    acc[pageKey] = {
      ...PagesData[pageKey],
    };
  }
  return acc;
}, {});

const setPageOverride = (pageKey, page) => {
  OverridePagesData[pageKey] = page;
  OverridePagesMap[pageKey] = React.lazy(loadComponent(page));
  localStorage.setItem('OverridePagesData', JSON.stringify(OverridePagesData));
};

const removePageOverride = (pageKey) => {
  delete OverridePagesData[pageKey];
  delete OverridePagesMap[pageKey];
  localStorage.setItem('OverridePagesData', JSON.stringify(OverridePagesData));
  return PagesData[pageKey];
};

export default {
  getPage,
  getPagesData,
  setPageOverride,
  removePageOverride,
};
