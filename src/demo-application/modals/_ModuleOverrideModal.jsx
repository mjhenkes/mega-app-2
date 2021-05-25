import React from 'react';
import PropTypes from 'prop-types';
import List, { Item } from 'terra-list';
import Input from 'terra-form-input';
import Button from 'terra-button';
import ApplicationModal from '@cerner/terra-application/lib/application-modal/ApplicationModal';
import {
} from 'react-router-dom';
import PageMap from '../pages/PageMap';

const propTypes = {
  /**
   * Function called to request closing the modal
   */
  onRequestClose: PropTypes.func.isRequired,
};

const ApplicationSwitcherModal = ({ onRequestClose }) => {
  console.log('modal');
  const [modules, setModules] = React.useState(PageMap.getPagesData());
  return (
    <ApplicationModal
      title="Module Override"
      onRequestClose={onRequestClose}
    >
      <List dividerStyle="bottom-only" paddingStyle="standard">
        {Object.entries(modules).map(([pageKey, page]) => (
          <Item key={pageKey}>
            <label style={{display: 'inline-block'}}>{pageKey}</label>
            <Input
              name="default input"
              value={page.url}
              // style={{display: 'inline-block'}}
              onChange={(event) => {
                console.log(event.target.value);
                modules[pageKey].url = event.target.value;
                console.log(modules);
                setModules({ ...modules });
              }}
              ariaLabel="Default"
            />
            <Button text="Save" onClick={() => PageMap.setPageOverride(pageKey, modules[pageKey])} />
            <Button
              text="Revert"
              onClick={() => {
                modules[pageKey] = PageMap.removePageOverride(pageKey);
                console.log(modules);
                setModules({ ...modules });
              }}
            />
          </Item>
        ))}
      </List>
    </ApplicationModal>
  );
};

ApplicationSwitcherModal.propTypes = propTypes;

export default ApplicationSwitcherModal;
