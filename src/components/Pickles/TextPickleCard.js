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
  width: 70%;
  max-width: 800px;
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

const TextPickleCard = ({ pickle, votedPickles }) => {
  let voted = pickle.id in votedPickles;
  return (
    <TextPickleCardWrapper>
      <UserBar user={pickle.user} pickle={pickle} />
      <Hr />
      <p className="description">{pickle.description}</p>
      <PickleOptions options={pickle.options} voted={voted} />
      <PickleComments comments={pickle.comments} />
      <Hr />
      <CommentForm pickle={pickle} />
    </TextPickleCardWrapper>
  );
};

export default TextPickleCard;
