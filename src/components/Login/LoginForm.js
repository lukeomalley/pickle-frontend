import React, { useState } from 'react';
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import Error from '../globals/Error';
import { PrimaryButton } from '../globals/Buttons';
import SIGN_IN_USER from '../../mutations/SIGN_IN_USER';
import { setRem, sizes } from '../../styles';

const LoginPage = ({ history }) => {
  const client = useApolloClient();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [signInUser, { error }] = useMutation(SIGN_IN_USER, {
    onCompleted({ signInUser: { token, user } }) {
      history.push('/');
      client.resetStore();
      localStorage.setItem('token', token);
      client.writeData({ data: { isLoggedIn: true, me: user } });
    },
  });

  const handleLogin = e => {
    e.preventDefault();
    signInUser({ variables: { username, password } });
    setUsername('');
    setPassword('');
  };

  return (
    <LoginFormWrapper onSubmit={handleLogin}>
      <h3>Login</h3>

      {error && <Error message="Incorrect username or password" />}
      <input
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <PrimaryButton type="submit">Login</PrimaryButton>
    </LoginFormWrapper>
  );
};

const LoginFormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${setRem(20)};
  width: 30%;
  margin: 0 auto;

  input[type='text'],
  input[type='password'] {
    padding: ${setRem(16)};
    border: none;
    width: 100%;
    font-family: ${props => props.theme.primaryFont};
    font-size: ${setRem(16)};
  }

  input[type='text']:focus,
  input[type='password']:focus {
    outline: none;
    border: 1px solid ${props => props.theme.accentColor};
  }

  h3 {
    text-align: center;
  }

  @media (max-width: ${sizes.desktop}px) {
    width: 50%;
  }

  @media (max-width: ${sizes.tablet}px) {
    width: 70%;
  }
`;

export default withRouter(LoginPage);
