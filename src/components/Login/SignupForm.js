import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { useMutation, useApolloClient } from '@apollo/react-hooks';

import CREATE_USER from '../../mutations/CREATE_USER';

const SignupFormWrapper = styled.form``;

const SignupForm = ({ history }) => {
  const client = useApolloClient();
  const [createUser, { loading, error }] = useMutation(CREATE_USER, {
    onCompleted({ createUser: { errors, token, user } }) {
      localStorage.setItem('token', token);
      client.writeData({ data: { isLoggedIn: true, me: user } });
    },
  });
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = e => {
    e.preventDefault();
    createUser({ variables: { name, username, password } });
    setName('');
    setUsername('');
    setPassword('');
    history.push('/');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occurred</p>;
  return (
    <SignupFormWrapper onSubmit={handleSignup}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />

      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">SignUp</button>
    </SignupFormWrapper>
  );
};

export default withRouter(SignupForm);
