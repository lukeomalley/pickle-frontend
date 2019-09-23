import { createGlobalStyle } from 'styled-components';

const Globals = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-size: 100%;
    font-family: 'Quicksand', sans-serif;
    color: '#222';
    background: ${props => props.theme.background};
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }
`;

export default Globals;
