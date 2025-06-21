import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      mainColor: string;
      mainLightColor: string;
      gray2Color: string;
      gray5Color: string;
      blackColor: string;
    };
  }
}
