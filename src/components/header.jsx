import React from 'react';
import { useNavigate } from 'react-router-dom';

const lngs = {
  en: { nativeName: 'English' },
  zh: { nativeName: '中文' }
};

function Header() {
  const navigate = useNavigate();

  const changeLang = (lng) => {
    navigate('/', { state: { lang: lng } })
  };

  return (
    <div className="c-header">
      {/* <button onClick={() => {setLang("en");}}>English</button>
      <button onClick={() => {setLang("chi");}}>中文</button> */}
      {Object.keys(lngs).map((lng) => (
        <button className='c-button c-button-secondary' key={lng} onClick={() => changeLang(lng)}>
          {lngs[lng].nativeName}
        </button>
      ))}
    </div>
  );
}

export default Header;
