import React from 'react';
import useReactRouter from 'use-react-router';
import Top from '../components/pages/Top';

function TopContainer() {
  const { history } = useReactRouter();
  return <Top history={history} />;
}

export default TopContainer;
