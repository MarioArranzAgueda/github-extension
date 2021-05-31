import React, {useState} from "react";
import PropTypes from 'prop-types';

export default function FormUser({submit}) {
  const [text, setText] = useState('');

  const change = (event) => {
    setText(event.target.value);
  }

  const click = () => {
    submit(text);
  }

  return (
    <div>
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