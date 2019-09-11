import React from 'react';
import { ROUTES } from '../../routes';

function Top({ history }) {
  const onClick = () => history.push(ROUTES.about);
  return (
    <div>
      <p>Top</p>
      <button onClick={onClick}>Aboutへ</button>
    </div>
  );
}

export default Top;
