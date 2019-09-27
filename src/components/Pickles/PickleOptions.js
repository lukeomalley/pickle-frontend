import React from 'react';
import styled from 'styled-components';

import PickleOption from './PickleOption';
import PickleOptionVoted from './PickleOptionVoted';
import { setRem, sizes } from '../../styles';
import { useQuery } from '@apollo/react-hooks';
import ME_QUERY from '../../queries/ME_QUERY';

const PickleOptionsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${setRem(16)};
  margin-bottom: ${setRem(8)};

  .green {
    background: ${props => props.theme.accentColor};
  }

  @media (max-width: ${sizes.tablet}px) {
    grid-template-columns: 1fr;
  }
`;

const PickleOptions = ({ options, voted }) => {
  const {
    data: { me },
  } = useQuery(ME_QUERY);

  const createSelectedOptionsHash = () => {
    if (!me) return {};
    if (me.options.length === 0) return {};

    const selectedOptions = {};
    for (let option of me.options) {
      if (option.id in selectedOptions) {
        continue;
      } else {
        selectedOptions[option.id] = true;
      }
    }
    return selectedOptions;
  };

  return (
    <PickleOptionsWrapper>
      {voted
        ? options.map(option => (
            <PickleOptionVoted
              key={option.id}
              option={option}
              selectedOptions={createSelectedOptionsHash()}
            />
          ))
        : options.map(option => (
            <PickleOption
              key={option.id}
              option={option}
              selectedOptions={createSelectedOptionsHash()}
            />
          ))}
    </PickleOptionsWrapper>
  );
};

export default PickleOptions;
