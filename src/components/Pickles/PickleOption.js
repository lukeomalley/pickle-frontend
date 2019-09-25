import React from 'react';
import styled from 'styled-components';
import { setRem, fadeIn } from '../../styles';
import { useMutation } from '@apollo/react-hooks';

import CREATE_SELECTION from '../../mutations/CREATE_SELECTION';

const OptionWrapper = styled.div`
  border: 1px solid ${props => props.theme.lightGrey};
  padding: ${setRem(16)} ${setRem(32)};
  cursor: pointer;
  ${fadeIn('0%', '0%', '0%', 0.8)}

  &:hover {
    background: ${props => props.theme.lightGrey};
  }
`;

const PickleOption = ({ option }) => {
  const [createSelection, { data, loading }] = useMutation(CREATE_SELECTION, {
    refetchQueries: ['ME'],
  });

  const handleClick = () => {
    let id = parseInt(option.id);
    createSelection({
      variables: { optionId: id },
    });
  };

  return (
    <OptionWrapper onClick={handleClick}>
      <div>{option.text}</div>
    </OptionWrapper>
  );
};

export default PickleOption;
