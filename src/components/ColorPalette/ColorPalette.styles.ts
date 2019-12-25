import { createStyleSheet } from "../../styles";
import { ViewStyle, TextStyle } from "react-native";

const COLOR_SIZE = 45;

export interface ColorPaletteStyles {
  root: ViewStyle;
  title: TextStyle;
  colors: ViewStyle;
  colorRoot: ViewStyle;
  colorBorder: ViewStyle;
  color: ViewStyle;
  label: TextStyle;
  labelWhite: TextStyle;
  centeredLabel: ViewStyle;
}

export default createStyleSheet<{}, ColorPaletteStyles>(theme => ({
  root: {
    flexDirection: "column",
    paddingVertical: theme.spacing(2)
  },
  title: {
    ...theme.typography.h6,
    marginHorizontal: theme.spacing(2)
  },
  colors: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  colorRoot: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: theme.spacing(1),
    marginHorizontal: theme.spacing(1)
  },
  colorBorder: {
    borderWidth: 1,
    borderColor: theme.palette.common.black,
    padding: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
    borderRadius: COLOR_SIZE + theme.spacing(0.5)
  },
  color: {
    width: COLOR_SIZE,
    height: COLOR_SIZE,
    borderRadius: COLOR_SIZE + theme.spacing(0.5)
  },
  label: {
    ...theme.typography.c1
  },
  labelWhite: {
    color: theme.palette.text.light.primary
  },
  centeredLabel: {
    top: 0,
    left: 0,
    width: COLOR_SIZE + theme.spacing(1.5),
    height: COLOR_SIZE + theme.spacing(1.5),
    position: "absolute",
    alignItems: "center",
    justifyContent: "center"
  }
}));
