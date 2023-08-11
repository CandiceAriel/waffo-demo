import React, { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t, i18n } = useTranslation()
  const location = useLocation();
  const locationState = location.state;
  const lang = locationState ? locationState.lang : '';

  const [language, setLanguage] = useState('');

  useEffect(() => {
    setLanguage(lang)

    const changeLang = (language) => {
      i18n.changeLanguage(language)
    };

    changeLang(language)
  },[i18n,lang, language]);

  return (
    <div className="o-home o-home-wrapper">
      <h1>{t('hello')}</h1>
    </div>
  );
}

export default Home;
