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
  font-size: 18px;
  background: white;
}

h1 {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 36px;
    color: black;
}
`
