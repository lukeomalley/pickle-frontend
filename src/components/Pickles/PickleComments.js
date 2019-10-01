import React from 'react';
import styled from 'styled-components';
import { setRem } from '../../styles';
import PickleComment from './PickleComment';

const PickleCommentsWrapper = styled.div`
  background: ${props => props.theme.mainWhite};
  margin-left: ${setRem(3)};
  margin-bottom: ${setRem(8)};
`;

const PickleComments = ({ comments, quantity }) => {
  return (
    <PickleCommentsWrapper>
      {comments.length === 0
        ? null
        : comments
            .slice(-quantity)
            .map(comment => <PickleComment key={comment.id} comment={comment} />)}
    </PickleCommentsWrapper>
  );
};

export default PickleComments;
