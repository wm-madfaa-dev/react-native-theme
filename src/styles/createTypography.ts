import { TextStyle } from "react-native";
import deepmerge from "deepmerge";

export type ThemeStyle =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "s1"
  | "s2"
  | "p1"
  | "p2"
  | "c1"
  | "c2"
  | "label";

export interface TypographyStyle extends Partial<Omit<TextStyle, "fontSize">> {
  fontSize: number;
}

export interface Variants extends Record<ThemeStyle, TypographyStyle> {}

export interface Typography extends Variants {
  rem: number;
}

export interface TypographyOptions extends Partial<Typography> {
  allVariants?: TextStyle;
}

const createTypography = (options: TypographyOptions): Typography => {
  const { rem = 14, allVariants = {} } = options;

  const buildVariant = (
    size: number,
    lineHeight: number,
    fontWeight: TextStyle["fontWeight"],
    fontStyle: TextStyle["fontStyle"],
    casing?: TextStyle["textTransform"],
    fontFamily?: TextStyle["fontFamily"]
  ): TypographyStyle => {
    return {
      fontFamily,
      fontStyle,
      fontWeight,
      fontSize: rem * size,
      lineHeight: lineHeight * (rem * size),
      textTransform: casing,
      ...allVariants
    };
  };

  const variants: Variants = {
    h1: buildVariant(2.5714, 1.27, "bold", "normal"),
    h2: buildVariant(2.2857, 0.8, "bold", "normal"),
    h3: buildVariant(2.1428, 0.75, "bold", "normal"),
    h4: buildVariant(1.8571, 0.8125, "bold", "normal"),
    h5: buildVariant(1.5714, 0.6875, "bold", "normal"),
    h6: buildVariant(1.2857, 0.75, "bold", "normal"),
    s1: buildVariant(1.0714, 0.625, "600", "normal"),
    s2: buildVariant(0.9285, 0.5416, "600", "normal"),
    p1: buildVariant(1.0714, 0.75, "normal", "normal"),
    p2: buildVariant(0.9285, 0.7222, "normal", "normal"),
    c1: buildVariant(0.8571, 0.75, "normal", "normal"),
    c2: buildVariant(0.8571, 0.75, "600", "normal"),
    label: buildVariant(0.8571, 0.75, "bold", "normal", "uppercase")
  };

  return deepmerge({ rem }, variants);
};

export default createTypography;
