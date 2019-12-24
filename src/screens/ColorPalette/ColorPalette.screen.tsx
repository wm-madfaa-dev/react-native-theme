import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams, ROUTES } from "../../app/app";
import ColorPalette from "../../components/ColorPalette/ColorPalette";
import { ThemeColorPalette } from "../../components/ColorPalette/ColorPalette";
import useTheme from "../../styles/themeManager/useTheme";

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
  const theme = useTheme();
  console.log(JSON.stringify(theme));

  return (
    <ScrollView style={styles.root}>
      <ColorPalette
        title="Background"
        colors={[
          { label: "Light", color: "#FAFAFA" },
          { label: "Dark", color: "#E8E8E8" }
        ]}
      />
      <ColorPalette
        title="White overlay"
        colors={[
          { label: "Hover", color: "rgba(255, 255, 255, 0.12)" },
          { label: "Focus", color: "rgba(255, 255, 255, 0.08)" },
          { label: "Pressed", color: "rgba(255, 255, 255, 0.32)" }
        ]}
      />
      <ColorPalette
        title="Black overlay"
        colors={[
          { label: "Hover", color: "#000000" },
          { label: "Focus", color: "rgba(0, 0, 0, 0.12)" },
          { label: "Pressed", color: "rgba(0, 0, 0, 0.16)" }
        ]}
      />
      <ColorPalette
        title="Surface"
        colors={[
          { label: "App Ui", color: "#FFFFFF" },
          { label: "Card", color: "#FAFAFA" },
          { label: "Dialogs", color: "#FFFFFF" },
          { label: "Drawers", color: "#FFFFFF" },
          { label: "Sheets", color: "#FAFAFA" },
          { label: "Side Sheets", color: "#FFFFFF" },
          { label: "Menu", color: "#FAFAFA" },
          { label: "Snackbar", color: "#202020" }
        ]}
      />
      <ThemeColorPalette
        title="Primary"
        palette={{
          main: { label: "500", color: "#6202EE", type: "dark" },
          light: { label: "50", color: "#F2E7FE", type: "light" },
          dark: { label: "900", color: "#190078", type: "dark" }
        }}
        colors={[
          { label: "50", color: "#F2E7FE" },
          { label: "100", color: "#D7B7FD" },
          { label: "200", color: "#D7B7FD" },
          { label: "300", color: "#BB86FC" },
          { label: "400", color: "#7F22FD", type: "dark" },
          { label: "500", color: "#6202EE", type: "dark" },
          { label: "600", color: "#4B01D1", type: "dark" },
          { label: "700", color: "#3700B3", type: "dark" },
          { label: "800", color: "#280096", type: "dark" },
          { label: "900", color: "#190078", type: "dark" }
        ]}
      />
      <ThemeColorPalette
        title="Secondary"
        palette={{
          main: { label: "500", color: "#01A39D", type: "dark" },
          light: { label: "50", color: "#86FFEA", type: "light" },
          dark: { label: "900", color: "#002F33", type: "dark" }
        }}
        colors={[
          { label: "50", color: "#86FFEA" },
          { label: "100", color: "#18FDE1" },
          { label: "200", color: "#18FDE1" },
          { label: "300", color: "#03DAC6" },
          { label: "400", color: "#02BEB2", type: "dark" },
          { label: "500", color: "#01A39D", type: "dark" },
          { label: "600", color: "#018786", type: "dark" },
          { label: "700", color: "#00696B", type: "dark" },
          { label: "800", color: "#004B4F", type: "dark" },
          { label: "900", color: "#002F33", type: "dark" }
        ]}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FAFAFA"
  }
});

export default ColorPaletteScreen;
