import React from 'react';
import PropTypes from 'prop-types';
import Textarea from 'terra-form-textarea';
import ActionFooter from 'terra-action-footer';
import Button from 'terra-button';
import ApplicationModal from '@cerner/terra-application/lib/application-modal/ApplicationModal';
import {
} from 'react-router-dom';
import { ApplicationContext } from '../providers/ApplicationProvider';

const propTypes = {
  /**
   * Function called to request closing the modal
   */
  onRequestClose: PropTypes.func.isRequired,
};

const ApplicationSwitcherModal = ({ onRequestClose }) => {
  const applicationContext = React.useContext(ApplicationContext);
  console.log('modal');
  const [config, setConfig] = React.useState(JSON.stringify(applicationContext.conf, null, 2));
  console.log(config);
  return (
    <ApplicationModal
      title="Module Override"
      size="huge"
      footer={(
        <ActionFooter
          end={(
            <React.Fragment>
              <Button
                text="Save"
                onClick={() => {
                  applicationContext.setOverrideConfig(JSON.parse(config));
                  onRequestClose();
                }}
              />
              <Button
                text="Reset"
                onClick={() => {
                  applicationContext.resetOverrideConfig();
                  onRequestClose();
                }}
              />
            </React.Fragment>
          )}
        />
      )}
      onRequestClose={onRequestClose}
    >
      <Textarea
        isAutoResizable
        defaultValue={config}
        id="resizable"
        onChange={(event) => {
          console.log(event.target.value);
          setConfig(event.target.value);
        }}
      />
    </ApplicationModal>
  );
};

ApplicationSwitcherModal.propTypes = propTypes;

export default ApplicationSwitcherModal;
