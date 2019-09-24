import React from 'react';
import styled from 'styled-components';

import LoginForm from '../components/Login/LoginForm';
import SignupForm from '../components/Login/SignupForm';

const LoginPageWrapper = styled.div`
  width: ${props => props.theme.mainWidth};
  margin: 0 auto;
`;

const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <h1>Login</h1>
      <LoginForm />
      <SignupForm />
    </LoginPageWrapper>
  );
};

export default LoginPage;
