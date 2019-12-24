import { createStyleSheet } from "../../styles";
import { ViewStyle, TextStyle, Dimensions } from "react-native";
import { Shadows } from "../../styles/theme/shadows";

const { width: screenWidth } = Dimensions.get("screen");

export interface PaperStyles {
  root: ViewStyle;
  label: TextStyle;
}

export interface PaperStylesProps {
  elevation: keyof Shadows;
}

export default createStyleSheet<PaperStylesProps, PaperStyles>(
  (theme, props) => ({
    root: {
      alignItems: "center",
      justifyContent: "center",
      width: screenWidth / 2 - theme.spacing(4),
      height: screenWidth / 2 - theme.spacing(4),
      borderRadius: 5,
      backgroundColor: theme.palette.background.paper,
      marginVertical: theme.spacing(2),
      marginHorizontal: theme.spacing(2),
      ...theme.shadows[props.elevation]
    },
    label: {
      ...theme.typography.s1
    }
  })
);
