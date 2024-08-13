import { Theme } from '@aplinkosministerija/design-system';
import { createGlobalStyle } from 'styled-components';

export const theme: Theme = {
  colors: {
    primary: '#003C3A',
    secondary: '#C7E6DC',
    tertiary: '#73DC8C',
    transparent: 'transparent',
    label: '#4B5565',
    danger: '#FE5B78',
    success: '#258800',
    powder: '#FFFFFFCC',
    purple: '#8a33fe',
    purpleBrighter: '#b020a2',
    yellow: '#ffb400',
    yellowDarker: '#ffd399',
    greyDarker: '#d4d5de',
    lightSteelBlue: '#cdd5df',
    buttons: {
      primary: {
        background: '#003C3A',
        hover: '#003C3A',
        text: 'white',
        border: '#003C3A',
      },
      secondary: {
        background: 'white',
        text: '#101010',
        border: 'white',
        hover: 'white',
      },
      tertiary: {
        background: '#73DC8C',
        text: 'white',
        border: '#73DC8C',
        hover: '#73DC8C',
      },
      success: {
        background: '#258800',
        text: 'white',
        border: '#258800',
        hover: '#258800',
      },
      danger: {
        background: '#FE5B78',
        text: 'white',
        border: '#FE5B78',
        hover: '#FE5B78',
      },
      transparent: {
        background: 'transparent',
        text: '#101010',
        border: 'transparent',
        hoverText: '#101010',
        hover: 'transparent',
      },
    },
    fields: {
      text: '#101010',
      label: '#101010',
      border: '#d4d5de',
      borderFocus: '#003C3A',
      background: 'white',
    },

    text: {
      primary: '#121926',
      secondary: '#535D6C',
      tertiary: '#4B5565',
      label: '#697586',
      error: '#FE5B78',
      labels: '#697586',
      input: '#231f20',
      accent: '#102EB1',
      powder: '#FFFFFFCC',
      retroBlack: '#101010',
      royalBlue: '#1121DA',
    },
    border: '#CDD5DF',
    background: '#F7F9FB',
    cardBackground: { primary: '#f7f7f7', success: '#eafbf6' },
    GREY: '#f7f7f7',
  },
  radius: {
    buttons: 0.4,
    fields: 0.4,
    multiSelectFieldTag: 0.4,
  },
  height: {
    fields: 4,
    buttons: 4,
  },
  fontSize: {
    fields: 0,
    fieldLabels: 0,
    buttons: 0,
  },
  fontWeight: {
    fields: 0,
    fieldLabels: 0,
    buttons: 0,
  },
};

export const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Stabil Grotesk';
      src: url('./fonts/StabilGrotesk-Regular.woff2') format('woff2'),
           url('./fonts/StabilGrotesk-Regular.woff') format('woff');
        font-weight: normal;
      font-style: normal;
    }



  * {
    box-sizing: border-box;
    font-family: 'Stabil Grotesk', sans-serif;
  }
  html {
    font-size: 62.5%;
    width: 100vw;
    color: ${theme.colors.text?.primary};
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${theme.colors.background};
    font-size: 1.6rem;
    overflow: hidden;
    justify-content: center;
  }
  h1 {
    font-size: 3.2rem;
    color: ${theme.colors.text?.primary};
  }
  a {
    text-decoration: none;
    color: inherit;
    :hover {
      color: inherit;
    }
  }
  button {
    outline: none;
    text-decoration: none;
    display: block;
    border: none;
    background-color: transparent;
  }

  textarea {
    font-size: 1.6rem;
  }
  
`;

export const device = {
  mobileS: `(max-width: 320px)`,
  mobileM: `(max-width: 425px)`,
  mobileL: `(max-width: 868px)`,
  desktop: `(min-width: 869px)`,
};
