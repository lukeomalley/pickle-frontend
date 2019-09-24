import React, { useState } from 'react';
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import SIGN_IN_USER from '../../mutations/SIGN_IN_USER';

const LoginFormWrapper = styled.form``;

const LoginPage = ({ history }) => {
  const client = useApolloClient();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [signInUser, { loading, error }] = useMutation(SIGN_IN_USER, {
    onCompleted({ signInUser: { token, user } }) {
      console.log(token, user);
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

export default withRouter(LoginPage);
