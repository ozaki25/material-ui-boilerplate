import React from 'react';
import { ROUTES } from '../../routes';

function About({ history }) {
  const onClick = () => history.push(ROUTES.top);
  return (
    <div>
      <p>About</p>
      <button onClick={onClick}>Topへ</button>
    </div>
  );
}

export default About;
