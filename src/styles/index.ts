import { createGlobalStyle } from 'styled-components';
export interface Theme {
  colors: {
    disable?: string;
    primary: string;
    secondary: string;
    tertiary: string;
    transparent: string;
    danger: string;
    success: string;
    hover: {
      primary: string;
      secondary: string;
      tertiary: string;
      transparent: string;
      danger: string;
      success: string;
      card?: string;
    };
    sideBar: string;
    border: string;
    label: string;
    error: string;
    grey: string;
    tertiaryLight: string;
  };
}

export const theme: Theme = {
  colors: {
    primary: '#006E82',
    secondary: '#13C9E7',
    tertiary: '#EFF8FF',
    transparent: 'transparent',
    danger: '#FE5B78',
    success: '#4FB922',
    hover: {
      primary: '#006E82',
      secondary: '#13C9E7',
      tertiary: '#def0ff',
      danger: '#FE5B78',
      transparent: '#F3F3F7',
      success: '#4FB922B3',
    },
    sideBar: '#004650',
    tertiaryLight: '#F3F3F7',
    border: '#CDD5DF',
    label: '#231F20',
    error: '#FE5B78',
    grey: '#B3B5C4',
  },
};

export const GlobalStyle = createGlobalStyle`

 *{
  box-sizing: border-box;
  font-family: Atkinson Hyperlegible;
 }

  html { 
        font-size: 62.5%; 
    width: 100vw;
    height: 100vh;
 
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #EEEBE5;
    font-size: 1.6rem;
    width: 100vw;
    height: 100vh;
    overflow:hidden;
  } 
  h1 {
    font-size: 3.2rem;
    color: "#121A55";
  }
  a {
    text-decoration: none;
  }
  button {
    outline: none;
    text-decoration: none;
    display: block;
    border: none;
    background-color: transparent;
  }
  #__next {
    height: 100%;
  }
  textarea {
    font-size: 1.6rem;
  }





`;

export const device = {
  mobileS: `(max-width: 320px)`,
  mobileM: `(max-width: 425px)`,
  mobileL: `(max-width: 788px)`,
  mobileXL: `(max-width: 1025px)`,
  tablet: `(max-width: 1024px) and (min-width: 769px)`,
  desktop: `(min-width: 1025px)`,
};
