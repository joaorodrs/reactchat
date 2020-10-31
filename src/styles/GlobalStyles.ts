import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Quicksand;
  }

  button, input, text-area {
    outline: none;
    background: transparent;
    border: none;
    font-family: Quicksand;
  }

  body {
    background: rgb(40,38,53);
    color: white;
  }
`