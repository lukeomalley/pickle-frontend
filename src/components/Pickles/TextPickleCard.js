import React from 'react';
import styled from 'styled-components';

import UserBar from './UserBar';
import PickleOptions from './PickleOptions';
import PickleComments from './PickleComments';
import CommentForm from './CommentForm';
import Hr from '../globals/HorizontalRule';
import { setRem, sizes } from '../../lib/styles';

const TextPickleCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 50%;
  margin: 0 auto;
  padding: ${setRem(16)};
  border: 1px solid ${props => props.theme.lightGrey};
  background: ${props => props.theme.mainWhite};

  .description {
    font-size: ${setRem(24)};
    margin-bottom: ${setRem(10)};
  }

  @media (max-width: ${sizes.desktop}px) {
    width: 100%;
  }
`;

const TextPickleCard = ({ pickle }) => {
  return (
    <TextPickleCardWrapper>
      <UserBar user={pickle.user} />
      <Hr />
      <p className="description">{pickle.description}</p>
      <PickleOptions options={pickle.options} />
      <PickleComments comments={pickle.comments} />
      <Hr />
      <CommentForm />
    </TextPickleCardWrapper>
  );
};

export default TextPickleCard;
