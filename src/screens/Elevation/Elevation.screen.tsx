import React from "react";
import { ScrollView, View } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams, ROUTES } from "../../app/app";

import { Shadows, useTheme } from "../../styles";
import Paper from "../../components/Paper/Paper";

import useStyles from "./Elevation.screen.styles";

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
  const styles = useStyles({});
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

export default ElevationScreen;
