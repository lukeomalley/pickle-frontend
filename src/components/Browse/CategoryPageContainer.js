import React from 'react';
import styled from 'styled-components';

import { useQuery } from '@apollo/react-hooks';
import Title from '../globals/Title';
import Hr from '../globals/HorizontalRule';
import NewsFeedContainer from '../NewsFeed/NewsFeedContainer';
import ALL_PICKLE_QUERY from '../../queries/ALL_PICKLE_QUERY';

const CategoryPageContainerWrapper = styled.div``;

const CategoryPageContainer = ({ category }) => {
  const { data, loading, error } = useQuery(ALL_PICKLE_QUERY);

  const filteredPickles = () => {
    return data.pickles.filter(pickle => pickle.category.id === category.id);
  };

  if (loading) return null;
  if (error) return <div>Error</div>;
  return (
    <CategoryPageContainerWrapper>
      <Title title="Pickles About " subtitle={category.name} />
      <Hr marginBottom={20} />
      <NewsFeedContainer pickles={filteredPickles()} />
    </CategoryPageContainerWrapper>
  );
};

export default CategoryPageContainer;
