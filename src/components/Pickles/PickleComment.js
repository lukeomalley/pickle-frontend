import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { setRem } from '../../styles';

const CommentWrapper = styled.p`
  overflow-wrap: break-word;
  span {
    font-weight: bolder;
    cursor: pointer;
    margin-right: ${setRem(8)};
  }
`;

const Comment = ({ comment }) => {
  return (
    <CommentWrapper>
      <span>
        <Link to={`/${comment.user.username}`}>{comment.user.username}</Link>
      </span>
      {comment.text}
    </CommentWrapper>
  );
};

export default Comment;
