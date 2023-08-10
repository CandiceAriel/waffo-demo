import React, { useEffect } from "react";
import {useLocation} from 'react-router-dom';

function Home() {
  const location = useLocation();
  const locationState = location.state;
  const lang = locationState ? locationState.lang : '';

  useEffect(() => {
    // Update the document title using the browser API
    console.log(lang)
  });

  return (
    <div className="o-home">
    </div>
  );
}

export default Home;
