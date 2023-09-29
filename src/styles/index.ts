import { DefaultTheme, createGlobalStyle, css } from "styled-components";
import { CommonCompProps } from "../utils/types";


export const theme: DefaultTheme = {
  colors: {
    black1: "#161616",
    black2: "#0B0809",
    gray1: "#292929",
    gray2: "#242424",
    gray3: "#656565",
    gray4: "#5a5a5a",
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

export const commonStyles = css<CommonCompProps>`
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.width};
  text-align: ${(props) => props.textAlign};
  border-radius: ${(props) => props.borderRadius};
`;