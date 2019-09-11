import React from 'react';
import useReactRouter from 'use-react-router';
import About from '../components/pages/About';

function AboutContainer() {
  const { history } = useReactRouter();
  return <About history={history} />;
}

export default AboutContainer;
