import styled from 'styled-components';

import { setRem, fadeIn, setTransition } from '../../styles';

export const PrimaryButton = styled.button`
  margin: 0 auto;
  font-size: ${setRem(12)};
  text-align: center;
  border: 1px solid ${props => props.theme.lightGrey};
  padding: ${setRem(12)} ${setRem(32)};
  cursor: pointer;
  ${fadeIn('0%', '0%', '0%', 0.3)}
  ${setTransition};

  &:hover {
    background: ${props => props.theme.lightGrey};
  }

  &:active {
    transform: translateY(5px);
  }

  &:focus {
    outline: none;
  }
`;
