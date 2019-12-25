import { createStyleSheet } from "../../styles";
import { ViewStyle } from "react-native";

export interface TypographyScreenStyles {
  root: ViewStyle;
  typography: ViewStyle;
}

export default createStyleSheet<{}, TypographyScreenStyles>(theme => ({
  root: {
    flex: 1,
    paddingHorizontal: theme.spacing(2),
    backgroundColor: theme.palette.background.default
  },
  typography: {
    borderBottomWidth: 1,
    borderBottomColor: theme.palette.divider,
    paddingVertical: theme.spacing(2)
  }
}));
