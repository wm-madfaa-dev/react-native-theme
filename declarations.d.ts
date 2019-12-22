declare module "*.svg" {
  import { SvgProps } from "react-native-svg";
  const content: React.ComponentClass<SvgProps, any>;
  export default content;
}

declare module "*.json" {
  const value: any;
  export default value;
}

declare module "*.png";
declare module "*.jpg";
