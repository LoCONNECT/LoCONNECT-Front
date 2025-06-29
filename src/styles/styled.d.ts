import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      mainColor: string;
      mainDarkColor: string;
      mainLightColor: string;
      gray2Color: string;
      gray3Color: string;
      gray4Color: string;
      gray5Color: string;
      blackColor: string;
    };
  }
}

declare global {
  export interface Window {
    daum: any;
  }
}
