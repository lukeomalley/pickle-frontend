import React from 'react';
import styled from 'styled-components';

import PickleOption from './PickleOption';
import { setRem, media, sizes } from '../../lib/styles';

const PickleOptionsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${setRem(16)};
  margin-bottom: ${setRem(8)};

  @media (max-width: ${sizes.tablet}px) {
    grid-template-columns: 1fr;
  }
`;

const PickleOptions = ({ options }) => {
  return (
    <PickleOptionsWrapper>
      {options.map(option => (
        <PickleOption key={option.id} option={option} />
      ))}
    </PickleOptionsWrapper>
  );
};

export default PickleOptions;
