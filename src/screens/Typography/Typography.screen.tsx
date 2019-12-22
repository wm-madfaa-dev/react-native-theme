import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams, ROUTES } from "../../app/app";

type ElevationScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  ROUTES.Typography
>;
type ElevationScreenRouteProp = RouteProp<RootStackParams, ROUTES.Typography>;

interface ElevationScreenProps {
  navigation: ElevationScreenNavigationProp;
  route: ElevationScreenRouteProp;
}

const ElevationScreen: React.FC<ElevationScreenProps> = () => {
  return (
    <View style={styles.root}>
      <Text>Typography Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, alignItems: "center", justifyContent: "center" }
});

export default ElevationScreen;
