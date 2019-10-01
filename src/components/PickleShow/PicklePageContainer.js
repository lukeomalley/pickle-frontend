import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import WholePickle from './WholePickle';
import ME_QUERY from '../../queries/ME_QUERY';
const PicklePageContainerWrapper = styled.div``;

const PicklePageContainer = ({ pickle }) => {
  const {
    data: { me },
    loading,
    error,
  } = useQuery(ME_QUERY);

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
  if (error) return null;
  return (
    <PicklePageContainerWrapper>
      <WholePickle pickle={pickle} votedPickles={createVotedPicklesHash()} />
    </PicklePageContainerWrapper>
  );
};

export default PicklePageContainer;
