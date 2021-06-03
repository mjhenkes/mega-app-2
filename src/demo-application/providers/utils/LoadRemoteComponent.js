/* global __webpack_init_sharing__ __webpack_share_scopes__ */

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

/**
 * Dynamically loads a remote component from a federated module.
 * @param {url} url
 * @param {scope} scope
 * @param {module} module
 * @returns A promise that returns a react component.
 */
const loadRemoteComponent = ({ url, scope, module }) => (
  async () => {
    // console.log(url, scope, module);
    try {
      await loadRemoteScript(url);
    } catch (error) {
      const err = Error();
      err.message = 'boom';
      throw err;
    }

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

export default loadRemoteComponent;
