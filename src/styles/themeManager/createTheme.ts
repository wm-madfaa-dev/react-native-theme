import deepmerge from "deepmerge";
import createPalette, { PaletteOptions, Palette } from "../createColorPalette";
import createTypography, {
  TypographyOptions,
  Typography
} from "../createTypography";
import createSpacing, { SpacingOptions, Spacing } from "../createSpacing";
import defaultShadows, { createShadowArgs, Shadows } from "../shadows";
import { createShadow } from "../shadows";

export interface ThemeOptions {
  palette?: PaletteOptions;
  typography?: TypographyOptions;
  spacing?: SpacingOptions;
  shadows?: { [key: string]: createShadowArgs };
}
export interface Theme {
  palette: Palette;
  typography: Typography;
  spacing: Spacing;
  shadows: Shadows;
}

const createTheme = (options: ThemeOptions): Theme => {
  const {
    palette: paletteInput = {},
    typography: typographyInput = {},
    spacing: spacingInput,
    shadows: shadowsInput = {},
    ...others
  } = options;
  const palette = createPalette(paletteInput);
  const typography = createTypography(typographyInput);
  const spacing = createSpacing(spacingInput);

  const shadows = Object.keys(shadowsInput).reduce((acc, shadowKey) => {
    const { depth, blur, color } = shadowsInput[shadowKey];
    return { ...acc, [shadowKey]: createShadow(depth, blur, color) };
  }, defaultShadows);

  return deepmerge({ palette, typography, spacing, shadows }, others);
};

export default createTheme;
