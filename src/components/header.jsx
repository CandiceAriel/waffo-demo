import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const lngs = {
  en: { nativeName: 'English' },
  zh: { nativeName: '中文' }
};

function Header() {
  const navigate = useNavigate();

  const changeLang = useCallback((lng) => {
    navigate('/', { state: { lang: lng } })
  },[navigate]);

  return (
    <div className="c-header">
      {Object.keys(lngs).map((lng) => (
        <button className='c-button c-button-secondary' key={lng} onClick={() => changeLang(lng)}>
          {lngs[lng].nativeName}
        </button>
      ))}
    </div>
  );
}

export default Header;
