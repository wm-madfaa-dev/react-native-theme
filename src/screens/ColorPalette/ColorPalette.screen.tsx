import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams, ROUTES } from "../../app/app";

type ColorPaletteScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  ROUTES.ColorPalette
>;
type ColorPaletteScreenRouteProp = RouteProp<
  RootStackParams,
  ROUTES.ColorPalette
>;

interface ColorPaletteScreenProps {
  navigation: ColorPaletteScreenNavigationProp;
  route: ColorPaletteScreenRouteProp;
}

const ColorPaletteScreen: React.FC<ColorPaletteScreenProps> = () => {
  return (
    <View style={styles.root}>
      <Text>ColorPalette Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, alignItems: "center", justifyContent: "center" }
});

export default ColorPaletteScreen;
