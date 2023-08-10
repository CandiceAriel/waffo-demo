import React, { useEffect } from "react";
import {useLocation} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t, i18n } = useTranslation()
  const location = useLocation();
  const locationState = location.state;
  const lang = locationState ? locationState.lang : '';

  useEffect(() => {
    setLang(lang)
    console.log(lang)
  });

  const setLang = (l) => {
    i18n.changeLanguage(l)
  };

  return (
    <div className="o-home">
      <h1>{t('hello')}</h1>
    </div>
  );
}

export default Home;
