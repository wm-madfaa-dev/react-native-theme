import React from "react";
import { NavigationNativeContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { ThemeProvider } from "../styles";

import ColorPaletteScreen from "../screens/ColorPalette/ColorPalette.screen";
import ElevationScreen from "../screens/Elevation/Elevation.screen";
import TypographyScreen from "../screens/Typography/Typography.screen";
import Header from "../components/Header/Header";

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
      <ThemeProvider>
        <RootStack.Navigator
          screenOptions={() => ({
            header: props => <Header {...props} />
          })}
        >
          <RootStack.Screen
            name={ROUTES.Typography}
            component={TypographyScreen}
          />
          <RootStack.Screen
            name={ROUTES.ColorPalette}
            component={ColorPaletteScreen}
          />
          <RootStack.Screen
            name={ROUTES.Elevation}
            component={ElevationScreen}
          />
        </RootStack.Navigator>
      </ThemeProvider>
    </NavigationNativeContainer>
  );
};

export default App;
