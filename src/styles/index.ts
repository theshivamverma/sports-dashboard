import { DefaultTheme, createGlobalStyle } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    black1: "#161616",
    black2: "#0B0809",
    gray1: "#292929",
    gray2: "#242424",
    gray3: "#656565",
    red: "#E72641",
    green: "#72F030",
    yellow: "#FFC62E",
    primaryButton: "#62208D",
    secondaryButton: "#7A419E",
    primaryFontColor: "#FFFFFF",
    secondaryFontColor: "#B5B4B5",
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  }
`;