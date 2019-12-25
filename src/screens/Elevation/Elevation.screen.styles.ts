import { createStyleSheet } from "../../styles";
import { ViewStyle } from "react-native";

export interface ElevationScreenStyles {
  root: ViewStyle;
}

export default createStyleSheet<{}, ElevationScreenStyles>(theme => ({
  root: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  }
}));
