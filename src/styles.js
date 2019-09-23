import { css, keyframes } from 'styled-components';

export const lightTheme = {
  primaryColor: '#',
  secondaryColor: '#888',
  accentColor: '#5ab082',
  primaryFontColor: '#222',
  mainBlack: '#222',
  mainWhite: '#fff',
  lightGrey: '#e6e6e6',
  darkGrey: '#222',
  background: '#fafafa',
  mainSpacing: '2px',
  mainWidth: '80vw',
  lightShadow: '7px 9px 35px 0px rgba(0,0,0,0.33);',
  darkShadow: '7px 9px 35px 0px rgba(0,0,0,0.63);',
  primaryFont: 'Quicksand, sans-serif',
  secondaryFont: 'Lato, sans-serif',
};

export const setFlex = ({ x = 'center', y = 'center' } = {}) => {
  return `
    display: flex;
    align-items: ${y};
    justify-content: ${x};
  `;
};

export const setBackground = ({
  image = 'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  color = 'rgba(0,0,0,0)',
} = {}) => {
  return `
    background: linear-gradient(${color}, ${color}),
      url(${image}) center/cover fixed no-repeat;
  `;
};

export const setRem = (number = 16) => {
  return `
    ${number / 16}rem
  `;
};

export const setBorder = ({ width = '2px', style = 'solid', color = 'black' } = {}) => {
  return `border: ${width} ${style} ${color}`;
};

export const sizes = {
  large: 1170,
  desktop: 992,
  tablet: 768,
  phablet: 572,
  phone: 376,
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

export const setTransition = ({ property = 'all', time = '0.3s', timing = 'ease-in-out' } = {}) => {
  return `transition: ${property} ${time} ${timing}`;
};

export const fadeIn = (start, midPoint, end, time) => {
  const animation = keyframes`
  0%{
    opacity: 0;
    transform: translateY(${start})  
  }

  50% {
    opacity: 0.5;
    transform: translateY(${midPoint})
  }

  100% {
    opacity: 1;
    transform: translateY(${end}) 
  }
`;

  return css`
    animation: ${animation} ${time}s ease-in-out;
  `;
};

export const setShadow = {
  light: 'box-shadow: 6px 10px 34px -7px rgba(0,0,0,0.39);',
  dark: 'box-shadow: 6px 10px 34px -7px rgba(0,0,0,0.62);',
  darkest: 'box-shadow: 6px 10px 34px -7px rgba(0,0,0,0.81);',
};
