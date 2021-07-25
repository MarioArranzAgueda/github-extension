import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { Popover } from 'react-bootstrap';
import './SettingsPanel.css';

export default function SettingsPanel({ closeSession }) {

  const logOut = () => {
    closeSession();
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body>
        <span onClick={logOut}>Cerrar sesión</span>
      </Popover.Body>
    </Popover>
  );

  return (
    <header className="top-header">
      {/* <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <FiSettings/>
      </OverlayTrigger> */}

    </header>
  );
}
