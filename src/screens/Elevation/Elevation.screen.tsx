import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams, ROUTES } from "../../app/app";
import ElevationBox, {
  Shadows,
  shadows
} from "../../components/ElevationBox/ElevationBox";

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
  return (
    <ScrollView>
      <View style={styles.root}>
        {Object.keys(shadows).map(shadow => (
          <ElevationBox key={shadow} elevation={shadow as keyof Shadows} />
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
