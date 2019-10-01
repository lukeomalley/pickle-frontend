import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import UserBar from './UserBar';
import PickleOptions from './PickleOptions';
import PickleComments from './PickleComments';
import CommentForm from './CommentForm';
import Hr from '../globals/HorizontalRule';
import { setRem, sizes } from '../../styles';

const TextPickleCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: ${setRem(16)};
  border: 1px solid ${props => props.theme.lightGrey};
  background: ${props => props.theme.mainWhite};

  .more {
    margin-left: ${setRem(3)};
  }

  .votes {
    color: ${props => props.theme.darkGrey};
    margin-left: ${setRem(3)};
  }

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
  const showMore = pickle.comments.length > 5;
  return (
    <TextPickleCardWrapper>
      <UserBar user={pickle.user} pickle={pickle} />
      <Hr />
      <p className="description">{pickle.description}</p>
      <PickleOptions options={pickle.options} voted={voted} />
      <p className="votes">{pickle.votes} votes</p>
      <PickleComments comments={pickle.comments} quantity={5} />
      {showMore && (
        <Link to={`/pickle/${pickle.id}`}>
          <p className="more">show more...</p>
        </Link>
      )}
      <Hr />
      <CommentForm pickle={pickle} />
    </TextPickleCardWrapper>
  );
};

export default TextPickleCard;
