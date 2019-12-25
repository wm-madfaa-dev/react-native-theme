import React from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";

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

const styles = StyleSheet.create({
  root: {
    flexDirection: "column",
    paddingVertical: 15
  },
  title: {
    fontStyle: "normal",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: 15,
    lineHeight: 24,
    marginHorizontal: 15
  },
  colors: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  colorRoot: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    marginHorizontal: 10
  },
  colorBorder: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#202020",
    marginBottom: 5,
    borderRadius: 50
  },
  color: {
    width: 45,
    height: 45,
    borderRadius: 50
  },
  label: {
    fontStyle: "normal",
    fontWeight: "normal",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: 12,
    lineHeight: 16
  },
  labelWhite: {
    color: "#FFFFFF"
  },
  centeredLabel: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 57,
    height: 57,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ColorPalette;
