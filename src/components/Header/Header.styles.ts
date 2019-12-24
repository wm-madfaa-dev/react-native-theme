import { createStyleSheet } from "../../styles";
import { ViewStyle, TextStyle } from "react-native";

export interface HeaderStyles {
  root: ViewStyle;
  link: TextStyle;
  linkActive: TextStyle;
}

export default createStyleSheet<{}, HeaderStyles>(theme => ({
  root: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.palette.surface.ui,
    paddingHorizontal: theme.spacing(2),
    ...theme.shadows.dp1
  },
  link: {
    ...theme.typography.label,
    color: theme.palette.text.dark.secondary
  },
  linkActive: {
    color: theme.palette.text.dark.primary
  }
}));
