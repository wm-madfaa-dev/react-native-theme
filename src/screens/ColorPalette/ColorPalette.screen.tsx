import React from "react";
import { ScrollView } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams, ROUTES } from "../../app/app";
import ColorPalette from "../../components/ColorPalette/ColorPalette";
import { ThemeColorPalette } from "../../components/ColorPalette/ColorPalette";
import { useTheme } from "../../styles";

import useStyles from "./ColorPalette.screen.styles";

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
  const styles = useStyles({});
  const { palette } = useTheme();

  return (
    <ScrollView style={styles.root}>
      <ColorPalette
        title="Common"
        colors={[
          { label: "black", color: palette.common.black },
          { label: "white", color: palette.common.white }
        ]}
      />
      <ColorPalette
        title="Background"
        colors={[
          { label: "paper", color: palette.background.paper },
          { label: "default", color: palette.background.default }
        ]}
      />
      <ColorPalette
        title="Divider"
        colors={[{ label: "default", color: palette.divider }]}
      />
      <ColorPalette
        title="Overlay"
        colors={[
          { label: "hover", color: palette.overlay.hover },
          { label: "focus", color: palette.overlay.focus },
          { label: "pressed", color: palette.overlay.pressed }
        ]}
      />
      <ColorPalette
        title="Text / dark"
        colors={[
          { label: "primary", color: palette.text.dark.primary },
          { label: "secondary", color: palette.text.dark.secondary },
          { label: "disabled", color: palette.text.dark.disabled },
          { label: "hint", color: palette.text.dark.hint }
        ]}
      />
      <ColorPalette
        title="Text / light"
        colors={[
          { label: "primary", color: palette.text.light.primary },
          { label: "secondary", color: palette.text.light.secondary },
          { label: "disabled", color: palette.text.light.disabled },
          { label: "hint", color: palette.text.light.hint }
        ]}
      />
      <ColorPalette
        title="Action"
        colors={[
          { label: "active", color: palette.action.active },
          { label: "hover", color: palette.action.hover },
          { label: "selected", color: palette.action.selected },
          { label: "disabled", color: palette.action.disabled },
          { label: "db-bg", color: palette.action.disabledBackground }
        ]}
      />
      <ColorPalette
        title="Surface"
        colors={[
          { label: "ui", color: palette.surface.ui },
          { label: "card", color: palette.surface.card },
          { label: "dialogs", color: palette.surface.dialogs },
          { label: "drawers", color: palette.surface.drawers },
          { label: "sheets", color: palette.surface.sheets },
          { label: "side", color: palette.surface.sideSheets },
          { label: "menu", color: palette.surface.menu },
          { label: "snackbar", color: palette.surface.snackbar }
        ]}
      />
      <ThemeColorPalette
        title="Primary"
        palette={{
          main: { label: "main", color: palette.primary.main },
          light: { label: "light", color: palette.primary.light },
          dark: { label: "dark", color: palette.primary.dark }
        }}
        colors={
          palette.primary.palette
            ? [
                { label: "50", color: palette.primary.palette["50"] },
                { label: "100", color: palette.primary.palette["100"] },
                { label: "200", color: palette.primary.palette["200"] },
                { label: "300", color: palette.primary.palette["300"] },
                {
                  label: "400",
                  color: palette.primary.palette["400"],
                  type: "dark"
                },
                {
                  label: "500",
                  color: palette.primary.palette["500"],
                  type: "dark"
                },
                {
                  label: "600",
                  color: palette.primary.palette["600"],
                  type: "dark"
                },
                {
                  label: "700",
                  color: palette.primary.palette["700"],
                  type: "dark"
                },
                {
                  label: "800",
                  color: palette.primary.palette["800"],
                  type: "dark"
                },
                {
                  label: "900",
                  color: palette.primary.palette["900"],
                  type: "dark"
                },
                { label: "A100", color: palette.primary.palette.A100 },
                {
                  label: "A200",
                  color: palette.primary.palette.A200,
                  type: "dark"
                },
                {
                  label: "A400",
                  color: palette.primary.palette.A400,
                  type: "dark"
                },
                {
                  label: "A700",
                  color: palette.primary.palette.A700,
                  type: "dark"
                }
              ]
            : []
        }
      />
      <ThemeColorPalette
        title="Secondary"
        palette={{
          main: { label: "main", color: palette.secondary.main },
          light: { label: "light", color: palette.secondary.light },
          dark: { label: "dark", color: palette.secondary.dark }
        }}
        colors={
          palette.secondary.palette
            ? [
                { label: "50", color: palette.secondary.palette["50"] },
                { label: "100", color: palette.secondary.palette["100"] },
                { label: "200", color: palette.secondary.palette["200"] },
                { label: "300", color: palette.secondary.palette["300"] },
                {
                  label: "400",
                  color: palette.secondary.palette["400"],
                  type: "dark"
                },
                {
                  label: "500",
                  color: palette.secondary.palette["500"],
                  type: "dark"
                },
                {
                  label: "600",
                  color: palette.secondary.palette["600"],
                  type: "dark"
                },
                {
                  label: "700",
                  color: palette.secondary.palette["700"],
                  type: "dark"
                },
                {
                  label: "800",
                  color: palette.secondary.palette["800"],
                  type: "dark"
                },
                {
                  label: "900",
                  color: palette.secondary.palette["900"],
                  type: "dark"
                },
                { label: "A100", color: palette.secondary.palette.A100 },
                {
                  label: "A200",
                  color: palette.secondary.palette.A200,
                  type: "dark"
                },
                {
                  label: "A400",
                  color: palette.secondary.palette.A400,
                  type: "dark"
                },
                {
                  label: "A700",
                  color: palette.secondary.palette.A700,
                  type: "dark"
                }
              ]
            : []
        }
      />
      <ThemeColorPalette
        title="Error"
        palette={{
          main: { label: "main", color: palette.error.main },
          light: { label: "light", color: palette.error.light },
          dark: { label: "dark", color: palette.error.dark }
        }}
        colors={
          palette.error.palette
            ? [
                { label: "50", color: palette.error.palette["50"] },
                { label: "100", color: palette.error.palette["100"] },
                { label: "200", color: palette.error.palette["200"] },
                { label: "300", color: palette.error.palette["300"] },
                {
                  label: "400",
                  color: palette.error.palette["400"],
                  type: "dark"
                },
                {
                  label: "500",
                  color: palette.error.palette["500"],
                  type: "dark"
                },
                {
                  label: "600",
                  color: palette.error.palette["600"],
                  type: "dark"
                },
                {
                  label: "700",
                  color: palette.error.palette["700"],
                  type: "dark"
                },
                {
                  label: "800",
                  color: palette.error.palette["800"],
                  type: "dark"
                },
                {
                  label: "900",
                  color: palette.error.palette["900"],
                  type: "dark"
                },
                { label: "A100", color: palette.error.palette.A100 },
                {
                  label: "A200",
                  color: palette.error.palette.A200,
                  type: "dark"
                },
                {
                  label: "A400",
                  color: palette.error.palette.A400,
                  type: "dark"
                },
                {
                  label: "A700",
                  color: palette.error.palette.A700,
                  type: "dark"
                }
              ]
            : []
        }
      />
      <ThemeColorPalette
        title="Grey"
        colors={
          palette.error.palette
            ? [
                { label: "50", color: palette.grey["50"] },
                { label: "100", color: palette.grey["100"] },
                { label: "200", color: palette.grey["200"] },
                { label: "300", color: palette.grey["300"] },
                {
                  label: "400",
                  color: palette.grey["400"],
                  type: "dark"
                },
                {
                  label: "500",
                  color: palette.grey["500"],
                  type: "dark"
                },
                {
                  label: "600",
                  color: palette.grey["600"],
                  type: "dark"
                },
                {
                  label: "700",
                  color: palette.grey["700"],
                  type: "dark"
                },
                {
                  label: "800",
                  color: palette.grey["800"],
                  type: "dark"
                },
                {
                  label: "900",
                  color: palette.grey["900"],
                  type: "dark"
                },
                { label: "A100", color: palette.grey.A100 },
                {
                  label: "A200",
                  color: palette.grey.A200,
                  type: "dark"
                },
                {
                  label: "A400",
                  color: palette.grey.A400,
                  type: "dark"
                },
                {
                  label: "A700",
                  color: palette.grey.A700,
                  type: "dark"
                }
              ]
            : []
        }
      />
    </ScrollView>
  );
};

export default ColorPaletteScreen;
