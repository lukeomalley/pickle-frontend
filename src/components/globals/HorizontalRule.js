import styled from 'styled-components';

import { setRem } from '../../lib/styles';

export default styled.hr`
  margin-bottom: ${props => (props.marginBottom ? setRem(props.marginBottom) : setRem(8))};
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;
