import React from "react";
import { View, Text, ViewProps } from "react-native";
import useStyles, { PaperStylesProps } from "./Paper.styles";

export interface PaperProps extends ViewProps, PaperStylesProps {}

const Paper: React.FC<PaperProps> = ({ elevation = "dp0" }) => {
  const styles = useStyles({ elevation });
  return (
    <View style={styles.root}>
      <Text style={styles.label}>{elevation}</Text>
    </View>
  );
};

export default Paper;
