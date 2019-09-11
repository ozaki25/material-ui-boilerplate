import React from 'react';
import Header from '../organisms/Header';
import { Container as MUIContainter } from '@material-ui/core';

function Container({ children, title, back, history }) {
  return (
    <>
      <Header title={title} history={history} back={back} />
      <MUIContainter maxWidth="lg">{children}</MUIContainter>
    </>
  );
}

export default Container;
