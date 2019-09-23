import React from 'react';
import styled from 'styled-components';

import { setRem } from '../../lib/styles';
import TextPickleCard from '../Pickles/TextPickleCard';

const NewsFeedWrapper = styled.div`
  display: grid;
  grid-gap: ${setRem(20)};
`;

const NewsFeedContainer = ({ pickles }) => {
  return (
    <NewsFeedWrapper>
      {pickles.map(pickle => (
        <TextPickleCard key={pickle.id} pickle={pickle} />
      ))}
    </NewsFeedWrapper>
  );
};

export default NewsFeedContainer;
