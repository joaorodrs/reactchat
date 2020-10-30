import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button, input, text-area {
    outline: 0;
  }

  body {
    background: rgb(40,38,53);
    color: white;
  }
`