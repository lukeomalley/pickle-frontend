import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { useMutation, useApolloClient } from '@apollo/react-hooks';

import { setRem, fadeIn } from '../../styles';
import CREATE_USER from '../../mutations/CREATE_USER';

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
      <h3>Sign Up</h3>

      <input
        type="text"
        name="name"
        placeholder="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

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
      <button type="submit">Sign Up</button>
    </SignupFormWrapper>
  );
};

const SignupFormWrapper = styled.form`
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
    padding: ${setRem(16)} ${setRem(32)};
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

export default withRouter(SignupForm);
