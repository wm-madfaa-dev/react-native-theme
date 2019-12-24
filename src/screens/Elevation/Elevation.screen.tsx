import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams, ROUTES } from "../../app/app";

import Paper from "../../components/Paper/Paper";
import { Shadows } from "../../styles/theme/shadows";
import useTheme from "../../styles/themeManager/useTheme";

type ElevationScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  ROUTES.Elevation
>;
type ElevationScreenRouteProp = RouteProp<RootStackParams, ROUTES.Elevation>;

interface ElevationScreenProps {
  navigation: ElevationScreenNavigationProp;
  route: ElevationScreenRouteProp;
}

const ElevationScreen: React.FC<ElevationScreenProps> = () => {
  const { shadows } = useTheme();
  return (
    <ScrollView>
      <View style={styles.root}>
        {Object.keys(shadows).map(shadow => (
          <Paper key={shadow} elevation={shadow as keyof Shadows} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ElevationScreen;
