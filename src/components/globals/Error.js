import React from 'react';
import styled from 'styled-components';

import { setRem } from '../../styles';

const ErrorWrapper = styled.div`
  text-align: center;
  background: ${props => props.theme.errorColor};
  color: ${props => props.theme.errorTextColor};
  padding: ${setRem(8)} ${setRem(16)};
  text-align: center;
  width: 50%;
  margin: 0 auto;
`;

const Error = ({ message }) => {
  return <ErrorWrapper>{message}</ErrorWrapper>;
};

export default Error;
