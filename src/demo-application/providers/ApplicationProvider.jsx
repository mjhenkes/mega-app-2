import React, { useEffect } from 'react';
import {
  useLocation,
} from 'react-router-dom';
import loadRemoteComponent from './utils/LoadRemoteComponent';
import ModuleProvider from './ModuleProvider';

const ApplicationContext = React.createContext();
const { localStorage } = window;

const ApplicationProvider = ({ children }) => {
  const location = useLocation();
  // console.log('location in context', location);
  const applicationId = location.pathname.slice(1);
  const [requestState, setRequestState] = React.useState({
    isLoading: true, hasError: false,
  });
  const [config, setConfig] = React.useState({
    applications: {},
    modules: {},
  });
  const [overrideConfig, setOverrideConfig] = React.useState();

  // Fetch config from 'service'
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch('config/AppConfig.json', {
      signal,
      headers: { Accept: 'application/json' },
    }).then(response => response.json()).then((response) => {
      setConfig(response);
      setRequestState({
        isLoading: false,
        hasError: false,
      });
    }).catch(() => {
      setRequestState({
        isLoading: false,
        hasError: true,
      });
    });

    return () => {
      controller.abort();
    };
  }, []);

  // Fetch config from local storage.
  useEffect(() => {
    setOverrideConfig(JSON.parse(localStorage.getItem('OverrideConfig')));
  }, []);

  const {
    isLoading, hasError,
  } = requestState;
  const conf = overrideConfig || config;
  const { applications, modules } = conf;

  console.log('conf', config);

  const currentApplication = applications[applicationId];

  let LoadedModules = {};
  if (currentApplication) {
    LoadedModules = Object.keys(currentApplication?.modules).reduce((acc, moduleType) => {
      acc[moduleType] = currentApplication.modules[moduleType].map((mod) => ({
        ...mod,
        component: React.lazy(loadRemoteComponent(modules[moduleType][mod.moduleKey])),
      }));
      return acc;
    }, {});
  }

  console.log('loadedModules', LoadedModules);

  const demoApplicationApplicationContextProviderValue = React.useMemo(() => ({
    current: currentApplication,
    applications,
    conf,
    setOverrideConfig: (newOverrideConfig) => {
      localStorage.setItem('OverrideConfig', JSON.stringify(newOverrideConfig));
      setOverrideConfig(newOverrideConfig);
    },
    resetOverrideConfig: () => {
      localStorage.removeItem('OverrideConfig');
      setOverrideConfig();
    },
  }), [currentApplication, applications, conf]);

  if (isLoading) {
    return <div>loading</div>;
  }

  if (hasError) {
    return <div>error</div>;
  }

  return (
    <ApplicationContext.Provider value={demoApplicationApplicationContextProviderValue}>
      <ModuleProvider modules={LoadedModules}>
        {children}
      </ModuleProvider>
    </ApplicationContext.Provider>
  );
};

export default ApplicationProvider;
export { ApplicationContext };
