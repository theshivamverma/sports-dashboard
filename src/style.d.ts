import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black1: string;
      black2: string;
      gray1: string;
      gray2: string;
      gray3: string;
      red: string;
      green: string;
      yellow: string;
      primaryButton: string;
      secondaryButton: string;
      primaryFontColor: string;
      secondaryFontColor: string;
    };
  }
}