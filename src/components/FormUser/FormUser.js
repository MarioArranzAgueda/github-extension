import React, {useRef, useState} from "react";
import PropTypes from 'prop-types';
import './FormUser.css';
export default function FormUser({submit}) {
  const [text, setText] = useState('');
  const [target, setTarget] = useState(null);
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  const change = (event) => {
    setText(event.target.value);
  }

  const click = () => {
    submit(text);
  }

  const openSettings = (event) => {
    setShow(!show);
    setTarget(event.target);
  }

  return (
    <div className="form-user">
      <input onChange={change} type="text" name="user" data-testid="user-input" />
      <button onClick={click} type="submit" data-testid="user-button">
        Enviar
      </button>
    </div>
  );
}

FormUser.propTypes = {
  submit: PropTypes.func.isRequired
}