import { createStyleSheet } from "../../styles";
import { ViewStyle } from "react-native";

export interface ColorPaletteScreenStyles {
  root: ViewStyle;
}

export default createStyleSheet<{}, ColorPaletteScreenStyles>(theme => ({
  root: {
    flex: 1,
    backgroundColor: theme.palette.background.default
  }
}));
