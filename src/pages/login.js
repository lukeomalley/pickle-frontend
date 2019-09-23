import React from 'react';
import styled from 'styled-components';

import LoginForm from '../components/Login/LoginForm';

const LoginPageWrapper = styled.div`
  width: ${props => props.theme.mainWidth};
  margin: 0 auto;
`;

const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <h1>Login</h1>
      <LoginForm />
    </LoginPageWrapper>
  );
};

export default LoginPage;
