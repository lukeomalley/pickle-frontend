import React from 'react';
import styled from 'styled-components';
import Category from './Category';

import { setRem } from '../../lib/styles';

const CategoriesContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${setRem(20)};
  justify-items: center;
`;

const CategoriesContainer = ({ categories }) => {
  return (
    <CategoriesContainerWrapper>
      {categories.map(category => (
        <Category key={category.id} category={category} />
      ))}
    </CategoriesContainerWrapper>
  );
};

export default CategoriesContainer;
