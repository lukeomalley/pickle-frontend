import React from 'react';
import styled from 'styled-components';
import { setRem } from '../../lib/styles';

const FooterWrapper = styled.div`
  height: ${setRem(20)};
`;

const Footer = () => {
  return <FooterWrapper></FooterWrapper>;
};

export default Footer;
