import React from 'react';
import styled from 'styled-components';
import { setRem } from '../../lib/styles';

const TitleWrapper = styled.h3`
  font-size: ${setRem(30)};
  margin-bottom: ${setRem(20)};
  text-transform: uppercase;
  text-align: center;

  .title {
    color: ${props => props.theme.accentColor};
  }
`;

const Title = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <span className="title">{title}</span>
      <span>{subtitle}</span>
    </TitleWrapper>
  );
};

export default Title;
