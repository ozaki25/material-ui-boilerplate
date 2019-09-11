import React from 'react';
import styled from 'styled-components';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { ArrowBackIosOutlined } from '@material-ui/icons';

const Title = styled(Typography)`
  flex-grow: 1;
`;

const StyledToolbar = styled(Toolbar)`
  padding-left: ${({ back }) => (back ? '0' : '16px')};
  padding-right: 16px;
`;

function Header({ title, history, back }) {
  return (
    <AppBar position="static" color="primary">
      <StyledToolbar back={back ? 1 : 0} disableGutters>
        {back && (
          <IconButton color="inherit" onClick={history.goBack}>
            <ArrowBackIosOutlined />
          </IconButton>
        )}
        <Title variant="h6" color="inherit">
          {title}
        </Title>
      </StyledToolbar>
    </AppBar>
  );
}

export default Header;
