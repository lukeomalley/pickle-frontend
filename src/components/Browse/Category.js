import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { setRem, fadeIn } from '../../styles';

const CategoryWrapper = styled.div`
  padding: ${setRem(20)} ${setRem(36)};
  background: ${props => props.theme.mainWhite};
  border: 1px solid ${props => props.theme.lightGrey};
  width: 250px;
  text-align: center;
  cursor: pointer;

  ${fadeIn('100%', '0%', '0%', 0.8)}

  &:hover {
    background: ${props => props.theme.lightGrey};
  }
`;

const Category = ({ category }) => {
  return (
    <Link to={`/browse/categories/${category.name}`}>
      <CategoryWrapper>
        <p>{category.name}</p>
      </CategoryWrapper>
    </Link>
  );
};

export default Category;
