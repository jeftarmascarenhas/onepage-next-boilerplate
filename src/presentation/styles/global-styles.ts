import { createGlobalStyle } from 'styled-components'
import { palette } from './palette'

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font-size: 7px;
}

html, body {
  padding: 0;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 8px;
}

html,
body,
body > div:first-child,
div#__next,
div#__next > div {
  /* height: 100%; */
}

body {
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Kumbh Sans', sans-serif;
  font-family: 'Bebas Neue', cursive;
  font-family: 'Poppins', sans-serif;
  background-color: ${palette.common.black};
  background: ${palette.background.default};
  color: ${palette.common.white};
  line-height: 1.1;
}

h1 {
  margin-bottom: 3rem;
  font-weight: 700;
  font-size: 7.2rem;
}

h2 {
  margin-bottom: 3rem;
  font-weight: 700;
  font-size: 5rem;
}

p {
  font-size: 2.5rem;
  font-weight: 600;
}

button,
input,
optgroup,
select,
textarea {
  font: inherit;
  margin: 0;
  border: 0;
  &:focus {
    outline: none;
    outline: 0;
  }
  &:disabled {
    cursor: not-allowed;
  }
}

form, iframe {
  padding: 0;
  margin: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}
audio,
canvas,
progress,
video {
  display: inline-block;
}

a {
  background-color: transparent;
  text-decoration: none;
  -webkit-text-decoration-skip: objects;
}

a:active,
a:hover {
  outline-width: 0;
}

img {
  width: 100%;
  display: block;
  height: auto;
}

@media screen and (min-width: 1600px) {
  html {
    font-size: 10px;
  }
}


`
