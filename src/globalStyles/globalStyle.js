import { createGlobalStyle } from "styled-components";
import styleSettings from "../globalStyles/styleSettings";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: ${styleSettings.fontFamily.regular};
    src:  url(${styleSettings.fontFamily.urlRegularVar});
    src: local(${styleSettings.fontFamily.localRegular}), local(${styleSettings.fontFamily.localRegular}),
        url(${styleSettings.fontFamily.urlRegular}) format(${styleSettings.fontFamily.format}),
  }
  @font-face {
    font-family:  ${styleSettings.fontFamily.bold};
    src:  url(${styleSettings.fontFamily.urlBoldVar});
    src: local( ${styleSettings.fontFamily.bold}), local(${styleSettings.fontFamily.localBold}),
        url((${styleSettings.fontFamily.urlBold}) format(${styleSettings.fontFamily.format}),
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: ${styleSettings.fontFamily.regular}, sans-serif;
  }
  .layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin-bottom: -20px;
  }
  .layout .container {
    flex-grow: 1;
  }
`;

export default GlobalStyle;
