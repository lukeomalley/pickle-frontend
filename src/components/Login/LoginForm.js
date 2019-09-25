import React, { useState } from 'react';
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import SIGN_IN_USER from '../../mutations/SIGN_IN_USER';
import { setRem, fadeIn } from '../../styles';

const LoginPage = ({ history }) => {
  const client = useApolloClient();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [signInUser, { loading, error }] = useMutation(SIGN_IN_USER, {
    onCompleted({ signInUser: { token, user } }) {
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
    history.push('/');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occurred</p>;
  return (
    <LoginFormWrapper onSubmit={handleLogin}>
      <h3>Login</h3>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </LoginFormWrapper>
  );
};

const LoginFormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${setRem(20)};
  width: 50%;
  margin: 0 auto;

  input[type='text'],
  input[type='password'] {
    padding: ${setRem(8)};
    border: none;
    width: 100%;
    font-family: ${props => props.theme.primaryFont};
    font-size: ${setRem(16)};
  }

  input[type='text']:focus {
    outline: none;
  }

  button {
    width: 50%;
    margin: 0 auto;
    font-size: ${setRem(12)};
    border: 1px solid ${props => props.theme.lightGrey};
    padding: ${setRem(12)} ${setRem(32)};
    cursor: pointer;
    ${fadeIn('0%', '0%', '0%', 0.8)}

    &:hover {
      background: ${props => props.theme.lightGrey};
    }
  }

  h3 {
    text-align: center;
  }
`;

export default withRouter(LoginPage);
