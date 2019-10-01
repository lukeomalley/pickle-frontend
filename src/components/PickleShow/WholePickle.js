import React from 'react';
import styled from 'styled-components';

import { setRem, sizes } from '../../styles';
import UserBar from '../Pickles/UserBar';
import Hr from '../globals/HorizontalRule';
import PickleOptions from '../Pickles/PickleOptions';
import PickleComments from '../Pickles/PickleComments';
import CommentForm from '../Pickles/CommentForm';

const WholePickleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 70%;
  max-width: 800px;
  margin: 0 auto;
  padding: ${setRem(16)};
  border: 1px solid ${props => props.theme.lightGrey};
  background: ${props => props.theme.mainWhite};

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

const WholePickle = ({ pickle, votedPickles }) => {
  let voted = pickle.id in votedPickles;
  return (
    <WholePickleWrapper>
      <UserBar user={pickle.user} />
      <Hr />
      <p className="description">{pickle.description}</p>
      <PickleOptions options={pickle.options} voted={voted} />
      {/* insert chartjs here */}
      <p className="votes">{pickle.votes} votes</p>
      <PickleComments comments={pickle.comments} />
      <Hr />
      <CommentForm pickle={pickle} />
    </WholePickleWrapper>
  );
};

export default WholePickle;
