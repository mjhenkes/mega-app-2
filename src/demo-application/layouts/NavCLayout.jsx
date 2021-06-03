import React from 'react';

import { SecondaryNavigationLayout, NavigationItem } from '@cerner/terra-application/lib/layouts';

import { ApplicationContext } from '../providers/ApplicationProvider';

import { ModuleContext } from '../providers/ModuleProvider';

const NavCLayout = () => {
  const applicationContext = React.useContext(ApplicationContext);
  const moduleContext = React.useContext(ModuleContext);
  const [navigationState, setNavigationState] = React.useState(moduleContext.pages[0].navigationKey);

  React.useEffect(() => {
    function handleEventNavigation(event) {
      setNavigationState(event.detail);
    }

    window.addEventListener('terra-application-demo.nav-c.navigate', handleEventNavigation);

    return () => {
      window.removeEventListener('terra-application-demo.nav-c.navigate', handleEventNavigation);
    };
  });

  return (
    <React.Suspense fallback="Loading layout">
      <SecondaryNavigationLayout
        id="nav-c-layout"
        label={applicationContext.current.title}
        activeNavigationKey={navigationState}
        onSelectNavigationItem={(key) => { setNavigationState(key); }}
        renderNavigationFallback={() => <div>404</div>}
      >
        {moduleContext.pages.map(page => {
          const Page = page.component;
          return (
            <NavigationItem
              key={page.navigationKey}
              navigationKey={page.navigationKey}
              label={page.label}
              renderPage={() => (<Page label={page.label} key={page.navigationKey} pageKey={page.navigationKey} />)}
            />
          );
        })}
      </SecondaryNavigationLayout>
    </React.Suspense>
  );
};

export default NavCLayout;
