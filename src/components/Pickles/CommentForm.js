import React, { useState } from 'react';
import styled from 'styled-components';

import { setRem } from '../../lib/styles';

const CommentFormWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  background: ${props => props.theme.mainWhite};
  padding: ${setRem(8)};

  input[type='text'] {
    border: none;
    width: 100%;
    font-family: ${props => props.theme.primaryFont};
    font-size: ${setRem(16)};
  }

  button {
    border: none;
    background: ${props => props.theme.mainWhite};
    font-size: ${setRem(16)};
    cursor: pointer;
  }

  .blue {
    color: ${props => props.theme.accentColor};
  }
`;

const CommentForm = () => {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(!!text);
    setText('');
  };

  const handleChange = e => {
    setText(e.target.value);
  };

  return (
    <CommentFormWrapper onSubmit={handleSubmit}>
      <input type="text" placeholder="Add a comment..." value={text} onChange={handleChange} />
      <button type="submit" disabled={!text} className={!!text ? 'blue' : ''}>
        Post
      </button>
    </CommentFormWrapper>
  );
};

export default CommentForm;
