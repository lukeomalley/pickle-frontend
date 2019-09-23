import React from 'react';
import styled from 'styled-components';

import Title from '../globals/Title';
import Hr from '../globals/HorizontalRule';
import NewsFeedContainer from '../NewsFeed/NewsFeedContainer';
import { setRem } from '../../lib/styles';

const CategoryPageHeaderWrapper = styled.div``;

const CategoryPageHeader = ({ category }) => {
  console.log(category);
  return (
    <CategoryPageHeaderWrapper>
      <Title title={category.name} />
      <Hr marginBottom={20} />
      <NewsFeedContainer pickles={category.pickles} />
    </CategoryPageHeaderWrapper>
  );
};

export default CategoryPageHeader;
