import React, { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t, i18n } = useTranslation('home/translation')
  const location = useLocation();
  const locationState = location.state;
  const lang = locationState ? locationState.lang : '';

  const [language, setLanguage] = useState('en');
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
        <p className="c-home__text">{t('this_content_will_change')}</p>
      </div>
      
    </div>
  );
}

export default Home;
