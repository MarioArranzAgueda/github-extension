import React, { useState} from "react";
import  {getUser} from '../../services/Github';
import {useLocation} from 'wouter';
import './index.css';

export default function FormUserPage() {
  const [text, setText] = useState('');
  const [location, setLocation] = useLocation();
  const change = (event) => {
    setText(event.target.value);
  };

  const click = () => {
    getUser(text).then(data => {
      if(!data) return;
      localStorage.setItem('user', JSON.stringify(data));
      setLocation('/main');
    })
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
