import React from 'react';
import styled from 'styled-components';
import { setRem, fadeIn } from '../../styles';

const OptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${props => props.theme.lightGrey};
  padding: ${setRem(16)} ${setRem(32)};

  .text {
    margin-right: ${setRem(20)};
  }

  ${fadeIn('0%', '0%', '0%', 0.8)}
`;

const PickleOption = ({ option, selectedOptions }) => {
  const selected = option.id in selectedOptions;
  return (
    <OptionWrapper className={selected && 'green'}>
      <div className="text">{option.text}</div>
      <div>{option.percentage}%</div>
    </OptionWrapper>
  );
};

export default PickleOption;
