import React from 'react';
import styled from 'styled-components';

import Title from '../components/globals/Title';
import LoginForm from '../components/Login/LoginForm';
import SignupForm from '../components/Login/SignupForm';
import { setRem } from '../styles';

const LoginPageWrapper = styled.div`
  display: grid;
  grid-gap: ${setRem(50)};
  grid-template-columns: 1fr;
  width: ${props => props.theme.mainWidth};
  margin: 0 auto;
`;

const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <Title title="Pickle" />
      <LoginForm />
      <SignupForm />
    </LoginPageWrapper>
  );
};

export default LoginPage;
