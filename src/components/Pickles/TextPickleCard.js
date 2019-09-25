import React from 'react';
import styled from 'styled-components';

import UserBar from './UserBar';
import PickleOptions from './PickleOptions';
import PickleComments from './PickleComments';
import CommentForm from './CommentForm';
import Hr from '../globals/HorizontalRule';
import { setRem, sizes } from '../../styles';

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

  .green {
    background: green;
  }

  @media (max-width: ${sizes.desktop}px) {
    width: 100%;
  }
`;

const TextPickleCard = ({ pickle, votedPickles }) => {
  // votedPickles contains hash of the pickles that a user has voted on this will be
  // used to conditionally render options with results
  return (
    <TextPickleCardWrapper>
      {pickle.id in votedPickles ? <p>You voted on this pickle</p> : null}
      <UserBar user={pickle.user} />
      <Hr />
      <p className="description">{pickle.description}</p>
      <PickleOptions options={pickle.options} />
      <PickleComments comments={pickle.comments} />
      <Hr />
      <CommentForm pickle={pickle} />
    </TextPickleCardWrapper>
  );
};

export default TextPickleCard;
