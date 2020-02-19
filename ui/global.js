import { createGlobalStyle } from 'styled-components'
import { backgroundColor, fontColor, subtleColor } from './constants'

export const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
  }

  html {
    font-size: 18px;
    line-height: 27px;
  }

  body {
    background: ${backgroundColor};
    color: ${fontColor};
    margin: 0;
    font-size: 1rem;
    font-family: "Lato", sans-serif;
    hyphens: manual;
    line-height: 1.2;
  }

  a {
    color: ${fontColor};
  }

  hr {
    color: ${subtleColor};
    margin-bottom: 50px;
  }

  a {
    text-decoration: underline;
  }

  a:hover {
    text-decoration: none;
  }
`