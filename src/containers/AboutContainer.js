import React from 'react';
import { useHistory } from 'react-router-dom';
import About from '../components/pages/About';

function AboutContainer() {
  const history = useHistory();
  return <About history={history} />;
}

export default AboutContainer;
