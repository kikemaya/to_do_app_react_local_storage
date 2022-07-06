import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --verde: #28a745;
    --azul: #007AEA;
  }
  #root {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding: 50px 0;
  }
  body {
    font-family: 'Roboto', sans-serif;
  }
`

export default GlobalStyles