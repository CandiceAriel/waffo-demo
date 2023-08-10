import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const setLang = (l) => {
    navigate('/', { state: { lang: l } })
  };

  return (
    <div className="c-header">
      <button onClick={() => {setLang("en");}}>English</button>
      <button onClick={() => {setLang("chi");}}>中文</button>
    </div>
  );
}

export default Header;
