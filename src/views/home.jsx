import React, { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t, i18n } = useTranslation()
  const location = useLocation();
  const locationState = location.state;
  const lang = locationState ? locationState.lang : '';

  const [language, setLanguage] = useState('');
  // const [dependencies, setDependencies] = useState('')

  //set language state
  useEffect(() => {
    const initDep = () => {
      setLanguage(lang)
    }

    initDep()
  },[ lang ]);

  //set language in render
  useEffect(() => {
    const changeLang = (language) => {
      i18n.changeLanguage(language)
    };

    changeLang(language)
  },[
    i18n,
    language
  ]);

  return (
    <div className="c-home o-home-wrapper">
      <h1 className="c-home__text">{t('hello')}</h1>
      <div className="c-home__section-about">
        <span className="c-home__text">{t('about')}</span>
      </div>
      
    </div>
  );
}

export default Home;
