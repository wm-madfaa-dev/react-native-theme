import React from "react";
import { Text, View } from "react-native";
import { StackHeaderProps } from "@react-navigation/stack";

import { ROUTES } from "../../app/app";

import useStyles from "./Header.styles";

export interface HeaderProps extends StackHeaderProps {}

const Header: React.FC<HeaderProps> = ({
  insets,
  scene: { route },
  navigation: { navigate }
}) => {
  const styles = useStyles({});

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

export default Header;
