import React from 'react';
import { Button, Typography } from '@material-ui/core';
import Container from '../templates/Container';
import { ROUTES } from '../../routes';

function Top({ history }) {
  const onClick = () => history.push(ROUTES.about);
  return (
    <Container title="Top" history={history}>
      <Typography>Top</Typography>
      <Button variant="contained" onClick={onClick}>
        Aboutへ
      </Button>
    </Container>
  );
}

export default Top;
