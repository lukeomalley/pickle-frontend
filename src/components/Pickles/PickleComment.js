import React from 'react';
import styled from 'styled-components';

import { setRem } from '../../lib/styles';

const CommentWrapper = styled.p`
  span {
    font-weight: bold;
    cursor: pointer;
    margin-right: ${setRem(8)};
  }
`;

const Comment = ({ comment }) => {
  return (
    <CommentWrapper>
      <span>{comment.user.username}</span>
      {comment.text}
    </CommentWrapper>
  );
};

export default Comment;
