import React from "react";
import { NavigationNativeContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ColorPaletteScreen from "../screens/ColorPalette/ColorPalette.screen";
import ElevationScreen from "../screens/Elevation/Elevation.screen";
import TypographyScreen from "../screens/Typography/Typography.screen";

export enum ROUTES {
  Typography = "Typography",
  ColorPalette = "ColorPalette",
  Elevation = "Elevation"
}

export type RootStackParams = {
  Typography: undefined;
  ColorPalette: undefined;
  Elevation: undefined;
};

const RootStack = createStackNavigator<RootStackParams>();

const App = () => {
  return (
    <NavigationNativeContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name={ROUTES.Typography}
          component={TypographyScreen}
        />
        <RootStack.Screen
          name={ROUTES.ColorPalette}
          component={ColorPaletteScreen}
        />
        <RootStack.Screen name={ROUTES.Elevation} component={ElevationScreen} />
      </RootStack.Navigator>
    </NavigationNativeContainer>
  );
};

export default App;
