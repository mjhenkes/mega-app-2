import React from 'react';

const ModuleContext = React.createContext();

const ApplicationProvider = ({ modules, children }) => (
  <ModuleContext.Provider value={modules}>
    {children}
  </ModuleContext.Provider>
);

export default ApplicationProvider;
export { ModuleContext };
