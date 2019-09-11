import React from 'react';
import { Typography } from '@material-ui/core';
import Container from '../templates/Container';

function About({ history }) {
  return (
    <Container title="About" history={history} back>
      <Typography>About</Typography>
    </Container>
  );
}

export default About;
