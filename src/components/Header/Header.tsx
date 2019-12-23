import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { StackHeaderProps } from "@react-navigation/stack";

import { ROUTES } from "../../app/app";

export interface HeaderProps extends StackHeaderProps {}

const Header: React.FC<HeaderProps> = ({
  insets,
  scene: { route },
  navigation: { navigate }
}) => {
  const isLinkActive = (routeName: ROUTES) => {
    return route.name === routeName ? styles.linkActive : {};
  };

  return (
    <View style={[styles.root, { marginTop: insets.top }]}>
      <Text
        style={[styles.link, isLinkActive(ROUTES.Typography)]}
        onPress={() => navigate(ROUTES.Typography)}
      >
        Typography
      </Text>
      <Text
        style={[styles.link, isLinkActive(ROUTES.ColorPalette)]}
        onPress={() => navigate(ROUTES.ColorPalette)}
      >
        Color Palette
      </Text>
      <Text
        style={[styles.link, isLinkActive(ROUTES.Elevation)]}
        onPress={() => navigate(ROUTES.Elevation)}
      >
        Elevation
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "#FAFAFA",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    elevation: 1,
    shadowColor: "#000000",
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 0.1826086956521739,
    shadowRadius: 1
  },
  link: {
    color: "rgba(0, 0, 0, 0.54)",
    textTransform: "uppercase",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 16
  },
  linkActive: {
    color: "rgba(0, 0, 0, 0.87)"
  }
});

export default Header;
