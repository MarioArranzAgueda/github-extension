import React, { useRef, useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import { Overlay, Popover } from 'react-bootstrap';
import './SettingsPanel.css';

export default function SettingsPanel({closeSession}) {
  const [target, setTarget] = useState(null);
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  const openSettings = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const logOut = () => {
      closeSession();
  }

  return (
    <header className="top-header">
      <FiSettings onClick={openSettings} />

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref.current}
        containerPadding={20}
      >
        <Popover title="Configuración" id="popover-contained">
          <Popover.Title as="h3">Popover bottom</Popover.Title>
          <Popover.Content>
            <span onClick={logOut}>Cerrar sesión</span>
          </Popover.Content>
        </Popover>
      </Overlay>
    </header>
  );
}
