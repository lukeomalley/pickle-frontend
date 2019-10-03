import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { useMutation, useApolloClient } from '@apollo/react-hooks';

import { PrimaryButton } from '../globals/Buttons';
import Error from '../globals/Error';
import { setRem, sizes } from '../../styles';
import CREATE_USER from '../../mutations/CREATE_USER';

const SignupForm = ({ history }) => {
  const client = useApolloClient();
  const [createUser, { error }] = useMutation(CREATE_USER, {
    onCompleted({ createUser: { errors, token, user } }) {
      history.push('/');
      client.resetStore();
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
  };

  return (
    <SignupFormWrapper onSubmit={handleSignup}>
      <h3>Sign Up</h3>

      {error && <Error message="Username is already taken" />}
      <input
        type="text"
        name="name"
        placeholder="name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
        maxLength="40"
      />

      <input
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
        maxLength="40"
      />

      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        maxLength="40"
      />
      <PrimaryButton type="submit">Sign Up</PrimaryButton>
    </SignupFormWrapper>
  );
};

const SignupFormWrapper = styled.form`
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

export default withRouter(SignupForm);
