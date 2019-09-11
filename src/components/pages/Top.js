import React from 'react';
import Container from '../templates/Container';
import { ROUTES } from '../../routes';

function Top({ history }) {
  const onClick = () => history.push(ROUTES.about);
  return (
    <Container title="Top" history={history}>
      <p>Top</p>
      <button onClick={onClick}>Aboutへ</button>
    </Container>
  );
}

export default Top;
