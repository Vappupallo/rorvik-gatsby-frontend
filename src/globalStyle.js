import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

html {
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

body {
  font-family: 'Open Sans', sans-serif;
  margin: 0;    
  font-size: 14px;
  background: blue;
}

h1 {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 54px;
    color: #333333;
    font-weight: 600;
    margin-top: 8px;
}

h2 {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 44px;
  color: #333333;
  font-weight: 600;
  margin-top: 8px;
}

h3 {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 36px;
  color: #333333;
  font-weight: 600;
}
h4 {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 32px;
  color: #333333;
  font-weight: 600;
}

`