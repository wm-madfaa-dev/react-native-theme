import deepmerge from "deepmerge";
import createPalette, { PaletteOptions, Palette } from "../createColorPalette";
import createTypography, {
  TypographyOptions,
  Typography
} from "../createTypography";

export interface ThemeOptions {
  palette?: PaletteOptions;
  typography?: TypographyOptions;
}
export interface Theme {
  palette: Palette;
  typography: Typography;
}

const createTheme = (options: ThemeOptions): Theme => {
  const {
    palette: paletteInput = {},
    typography: typographyInput = {},
    ...others
  } = options;
  const palette = createPalette(paletteInput);
  const typography = createTypography(typographyInput);
  return deepmerge({ palette, typography }, others);
};

export default createTheme;
