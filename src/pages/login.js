import React from 'react';
import styled from 'styled-components';

import Title from '../components/globals/Title';
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
      <h1>🥒 Pickle</h1>
      <LoginForm />
      <SignupForm />
    </LoginPageWrapper>
  );
};

export default LoginPage;
