import React from "react";
import { View, Text, ViewStyle } from "react-native";

import useStyles from "./ColorPalette.styles";

export interface ColorPaletteItemProps {
  label: string;
  color: ViewStyle["backgroundColor"];
  centeredLabel?: boolean;
  type?: "light" | "dark";
}

export interface ColorPaletteProps {
  title: string;
  colors: ColorPaletteItemProps[];
}

export interface Palette {
  main: ColorPaletteItemProps;
  light: ColorPaletteItemProps;
  dark: ColorPaletteItemProps;
}

export interface ThemeColorPaletteProps {
  title: string;
  palette?: Palette;
  colors: ColorPaletteItemProps[];
}

const ColorPaletteItem: React.FC<ColorPaletteItemProps> = ({
  label,
  color,
  centeredLabel,
  type
}) => {
  const styles = useStyles({});

  return (
    <View style={styles.colorRoot}>
      <View style={styles.colorBorder}>
        <View style={[styles.color, { backgroundColor: color }]} />
      </View>
      <View style={centeredLabel ? styles.centeredLabel : {}}>
        <Text style={[styles.label, type === "dark" ? styles.labelWhite : {}]}>
          {label}
        </Text>
      </View>
    </View>
  );
};

const ColorPalette: React.FC<ColorPaletteProps> = ({ title, colors }) => {
  const styles = useStyles({});

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.colors}>
        {colors.map((color, index) => (
          <ColorPaletteItem key={index} {...color} />
        ))}
      </View>
    </View>
  );
};

export const ThemeColorPalette: React.FC<ThemeColorPaletteProps> = ({
  title,
  palette,
  colors
}) => {
  const styles = useStyles({});

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>
      {palette && (
        <View style={styles.colors}>
          <ColorPaletteItem
            label={palette.main.label}
            color={palette.main.color}
          />
          <ColorPaletteItem
            label={palette.light.label}
            color={palette.light.color}
          />
          <ColorPaletteItem
            label={palette.dark.label}
            color={palette.dark.color}
          />
        </View>
      )}
      <View style={styles.colors}>
        {colors.map((color, index) => (
          <ColorPaletteItem centeredLabel key={index} {...color} />
        ))}
      </View>
    </View>
  );
};

export default ColorPalette;
