import React from 'react';
import styled from 'styled-components';
import { setRem, fadeIn } from '../../styles';

const OptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${props => props.theme.lightGrey};
  padding: ${setRem(16)} ${setRem(32)};

  ${fadeIn('0%', '0%', '0%', 0.8)}
`;

const PickleOption = ({ option, selectedOptions }) => {
  const selected = option.id in selectedOptions;
  return (
    <OptionWrapper className={selected && 'green'}>
      <div>{option.text}</div>
      <div>{option.percentage}%</div>
    </OptionWrapper>
  );
};

export default PickleOption;
