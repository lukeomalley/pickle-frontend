import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LoginForm from '../components/Login/LoginForm';
import SignupForm from '../components/Login/SignupForm';
import { setRem, sizes } from '../styles';

const LoginPageWrapper = styled.div`
  display: grid;
  grid-gap: ${setRem(50)};
  grid-template-columns: 1fr;
  width: ${props => props.theme.mainWidth};
  margin: ${setRem(50)} auto;

  h1 {
    font-size: ${setRem(50)};
    text-align: center;
  }

  @media (max-width: ${sizes.phablet}px) {
    width: 100vw;
  }
`;

const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <Link to="/">
        <h1>
          <span role="img" aria-label="Pickle Logo">
            🥒
          </span>{' '}
          Pickle
        </h1>
      </Link>
      <LoginForm />
      <SignupForm />
    </LoginPageWrapper>
  );
};

export default LoginPage;
