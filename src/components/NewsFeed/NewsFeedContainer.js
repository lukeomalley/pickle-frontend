import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import ME_QUERY from '../../queries/ME_QUERY';
import { setRem } from '../../styles';
import TextPickleCard from '../Pickles/TextPickleCard';

const NewsFeedWrapper = styled.div`
  display: grid;
  grid-gap: ${setRem(20)};
`;

const NewsFeedContainer = ({ pickles }) => {
  const { data, loading, error } = useQuery(ME_QUERY);
  const { me } = data;

  const createVotedPicklesHash = () => {
    if (!me) return {};
    const votedPickles = {};
    for (let pickle of me.votedPickles) {
      if (pickle.id in votedPickles) {
        continue;
      } else {
        votedPickles[pickle.id] = true;
      }
    }
    return votedPickles;
  };

  if (loading) return null;
  if (error) return <div>Error</div>;
  return (
    <NewsFeedWrapper>
      {pickles.map(pickle => {
        return (
          <TextPickleCard key={pickle.id} pickle={pickle} votedPickles={createVotedPicklesHash()} />
        );
      })}
    </NewsFeedWrapper>
  );
};

export default NewsFeedContainer;
