import deepmerge from "deepmerge";
import createPalette, { PaletteOptions, Palette } from "../createColorPalette";

export interface ThemeOptions {
  palette?: PaletteOptions;
}
export interface Theme {
  palette: Palette;
}

const createTheme = (options: ThemeOptions): Theme => {
  const { palette: paletteInput = {}, ...others } = options;
  const palette = createPalette(paletteInput);
  return deepmerge({ palette }, others);
};

export default createTheme;
