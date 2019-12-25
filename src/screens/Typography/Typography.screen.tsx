import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams, ROUTES } from "../../app/app";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "../../styles";

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
  const { typography } = useTheme();

  return (
    <ScrollView style={styles.root}>
      <View style={styles.typography}>
        <Text style={typography.h1}>H1 Headline</Text>
      </View>
      <View style={styles.typography}>
        <Text style={typography.h2}>H2 Headline</Text>
      </View>
      <View style={styles.typography}>
        <Text style={typography.h3}>H3 Headline</Text>
      </View>
      <View style={styles.typography}>
        <Text style={typography.h4}>H4 Headline</Text>
      </View>
      <View style={styles.typography}>
        <Text style={typography.h5}>H5 Headline</Text>
      </View>
      <View style={styles.typography}>
        <Text style={typography.h6}>H6 Headline</Text>
      </View>
      <View style={styles.typography}>
        <Text style={typography.s1}>S1 Subtitle</Text>
      </View>
      <View style={styles.typography}>
        <Text style={typography.s2}>S2 Subtitle</Text>
      </View>
      <View style={styles.typography}>
        <Text style={typography.p1}>P1 Paragraph</Text>
      </View>
      <View style={styles.typography}>
        <Text style={typography.p2}>P2 Paragraph</Text>
      </View>
      <View style={styles.typography}>
        <Text style={typography.c1}>C1 Caption</Text>
      </View>
      <View style={styles.typography}>
        <Text style={typography.c2}>C2 Caption</Text>
      </View>
      <View style={styles.typography}>
        <Text style={typography.label}>label</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 15
  },
  typography: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.12)",
    paddingVertical: 15
  }
});

export default ElevationScreen;
