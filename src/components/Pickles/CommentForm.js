import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';

import CREATE_COMMENT from '../../mutations/CREATE_COMMENT';
import { setRem } from '../../styles';

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

  input[type='text']:focus {
    outline: none;
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

// TODO: REFACTOR TO USE UPDATE RATHER THAN REFETCHQUERIES
const CommentForm = ({ pickle }) => {
  const [text, setText] = useState('');
  const [createComment, { loading, error }] = useMutation(CREATE_COMMENT, {
    refetchQueries: ['ALL_PICKLE_QUERY'],
  });

  const handleSubmit = e => {
    e.preventDefault();
    createComment({ variables: { pickle_id: parseInt(pickle.id, 10), text } });
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
