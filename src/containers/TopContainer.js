import React from 'react';
import { useHistory } from 'react-router-dom';
import Top from '../components/pages/Top';

function TopContainer() {
  const history = useHistory();
  return <Top history={history} />;
}

export default TopContainer;
